import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // para obtener params URL
import { supabase } from "@/lib/supabaseClient"; // importa tu cliente supabase
import { FamuqueNavBar } from "@/components/FamuqueNavBar";
import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { FamuqueFooter } from "@/components/FamuqueFooter";
import { FamuqueHeader } from "@/components/FamuqueHeader";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import NotFoundPage from "./NotFoundPage";
import { FamuqueMetadata } from "@/components/FamuqueMetaData";

interface ProductProps {
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
}


export const ProductPage = () => {
  const { slug } = useParams(); // id viene de /product/:id
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  // const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      setLoading(true);
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
        return;
      }
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [slug]);

  
  if (loading) return null; // o un spinner

  if (!product || product.stock === 0) {
    return <NotFoundPage />;
  }

  return (
    <>
      <FamuqueMetadata
        title={`${product.name} | Famuque`}
        description={product.description}
        canonicalLink={`https://famuque.com/product/${product.slug}`}
      />

      <DefaultLayout>
        <FamuqueNavBar showCart={false} showLogin={false} showSearch={false}/>
        <FamuqueHeader
          items={[
            { label: "Inicio", href: "/" },
            { label: "Catálogo", href: "/catalog" },
            { label: product.name }
          ]}
          variants="product"
        />

        <section className="flex w-full py-comp-3-desktop max-w-screen-desktop gap-comp-3">
          {/* Carousel e imagen */}
          <div className="flex w-1/2 justify-between ">
            <Carousel opts={{ align: "start" }} orientation="vertical" className="w-comp-3">
              <CarouselContent className="h-minimal">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="laptop:basis-1/4 aspect-square w-comp-3">
                    <div className="p-1">
                      <img
                        src={product.image}
                        className="aspect-square object-cover rounded hover:brightness-75 transition-all duration-300 cursor-pointer"
                        alt={product.name}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <img src={product.image} className="w-minimal aspect-square object-cover rounded-2xl" alt={product.name} />
          </div>

          {/* Info producto */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col w-full gap-4">
              <label className="text-black text-gh-4 font-avenir-medium">{product.name}</label>
              <label className="text-gray text-dh-3 font-avenir-light">{product.price}</label>
              {product.oldPrice && !product.distributorPrice && (
                <label className="text-gray text-dh-3 font-avenir-light line-through">{product.oldPrice}</label>
              )}
              {product.distributorPrice && (
                <label className="text-gray text-dh-3 font-avenir-light">{product.distributorPrice}</label>
              )}
              {product.discount && (
                <label className="text-gray text-dh-3 font-avenir-light">{product.discount}</label>
              )}
              <label className="text-black text-th-4 font-avenir-light w-minimal ">{product.description}</label>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-self-end">
              {!product.onlyCatalog && (
                <>
                  {/* <FamuqueButton variant="outline">Add to Cart</FamuqueButton>
                  <FamuqueButton labelClassName="flex flex-row justify-evenly" variant="outline">
                    <FamuqueButton
                      variant="secondary"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </FamuqueButton>
                    <label className="text-black text-th-4 font-avenir-light">{quantity}</label>
                    <FamuqueButton
                      variant="secondary"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </FamuqueButton>
                  </FamuqueButton> */}
                </>
              )}
            </div>
          </div>
        </section>

        <FamuqueFooter />
      </DefaultLayout>
    </>
  );
};

export default ProductPage;
