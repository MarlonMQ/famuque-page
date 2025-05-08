import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"

interface ProductProps {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  slug: string; // para URL canónica
  stock?: number;
  sku?: string;
  brand?: string;
  features?: string[];
}


export const ProductPage: React.FC<ProductProps> = ({
  name,
  description,
  price,
  oldPrice,
  discount,
  image,
  slug, // para URL canónica
  stock,
  sku,
  brand,
  features,
}) => {
  return (
    <>
    <title>{name} | Famuque</title>
    <meta name="description" content={`Compra ${name} al mejor precio. ${description}`} />
    <link rel="canonical" href={`https://famuque.com/product/${slug}`} />
      <DefaultLayout>
        <FamuqueNavBar/>
        <FamuqueHeader
        items={[
          { label: "Inicio", href: "/" },
          { label: "Tienda", href: "/shop" },
          { label: name }
        ]}
        variants="product"
      />
        <section className="bg-white flex relative w-full h-screen items-center justify-center">

        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default ProductPage
