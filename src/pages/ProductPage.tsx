import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { FamuqueNavBar } from "@/components/FamuqueNavBar";
import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { FamuqueFooter } from "@/components/FamuqueFooter";
import { FamuqueHeader } from "@/components/FamuqueHeader";
import NotFoundPage from "./NotFoundPage";
import { FamuqueMetadata } from "@/components/FamuqueMetaData";
import { FamuqueCarousel } from "@/components/FamuqueCarousel";
import { copyToClipBoard } from "@/lib/utils";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  distributorPrice?: string;
  discount?: string;
  image: string;
  slug: string;
  stock?: number;
  sku?: string;
  brand?: string;
  features?: string[];
  onlyCatalog?: boolean;
  details?: { 
    product_id: number;
    code: string;
    size_description: string;
    pack_qty: number;
    total_qty: number;
  }[] | undefined;
}

export const ProductPage = () => {

  const { slug } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      setLoading(true);

     const { data: product, error: productError } = await supabase
      .from("product")
      .select("*")
      .eq("slug", slug)
      .single();

    const { data: details, error: detailsError } = await supabase
      .from("product_details")
      .select("*")
      .eq("product_id", product?.id);

      if (productError) {
        console.error("Error fetching product:", productError);
        setLoading(false);
        return;
      }
      if (detailsError) {
        console.error("Error fetching product details:", detailsError);
      }
      
      if (product) {
        setProduct({
          ...product,
          details: details || []
        });
      }

      fetchImages(product.slug);
    }
    
    async function fetchImages(slug: string) {
      try {
        const res = await fetch(`https://fnsebmblhaelxdgsksym.supabase.co/functions/v1/rapid-function?slug=${slug}`);
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const data = await res.json();

        if (!data.urls || data.urls.length === 0) return;

        const mainImg = data.urls.find((url: string) => url.toLowerCase().includes("main.png")) || data.urls[0];
        const ordered = [mainImg, ...data.urls.filter((url: string) => url !== mainImg)];

        setCarouselImages(ordered);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) return null;
  if (!product || product.stock === 0) return <NotFoundPage />;

  return (
    <>
      <FamuqueMetadata
        title={`${product.name} | Famuque`}
        description={product.description}
        canonicalLink={`https://famuque.com/product/${product.slug}`}
      />

      <DefaultLayout>
        <FamuqueNavBar showAccountButtons={false} />
        <FamuqueHeader
          items={[
            { label: "Inicio", href: "/" },
            { label: "Catálogo", href: "/catalog" },
            { label: product.name }
          ]}
          variants="product"
        />

        <section className="flex flex-col medium:flex-row w-full items-center medium:items-start py-comp-1 medium:py-comp-2 max-w-screen-desktop gap-comp-1 medium:gap-comp-3 px-comp-1">
          {/* Carousel e imagen */}
          <FamuqueCarousel images={carouselImages} slug={product.slug} className="medium:min-w-minimal-1"/>

          {/* Info producto */}
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col w-full gap-comp-1 medium:gap-comp-3">
              <label className="text-black text-gh-4 font-avenir-medium">{product.name}</label>
              {product.details && product.details.length > 0 && (() => {
                const showPackQty = product.details.some(detail => detail.pack_qty != null && detail.pack_qty !== undefined);
                const showTotalQty = product.details.some(detail => detail.total_qty != null && detail.total_qty !== undefined);

                return (
                  <div className="w-full overflow-x-auto">
                      <table className="w-full min-w-short text-left border-separate border-spacing-y-2">
                        <thead>
                          <tr className="text-th-4 font-avenir-medium">
                            <th className="px-2">Código</th>
                            <th className="px-2">Descripción</th>
                            {showPackQty && <th className="px-2">Cant. por bolsa</th>}
                            {showTotalQty && <th className="px-2">Cant. por caja</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {product.details.map((detail, index) => (
                            <tr key={index}>
                              <td 
                                className="px-2 py-1 font-avenir-heavy text-th-4 hover:underline cursor-pointer"
                                onClick={() => copyToClipBoard(detail.code, `Código de ${detail.size_description}`)}
                              >
                                {detail.code}
                              </td>
                              <td className="px-2 py-1 font-avenir-light">{detail.size_description}</td>
                              {showPackQty && <td className="px-2 py-1 font-avenir-light">{detail.pack_qty}</td>}
                              {showTotalQty && <td className="px-2 py-1 font-avenir-light">{detail.total_qty}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                  </div>
                );
              })()}
            </div>
            <div className="grid grid-cols-2 gap-4 justify-self-end"></div>
          </div>
        </section>

        <FamuqueFooter />
      </DefaultLayout>
    </>
  );
};

export default ProductPage;
