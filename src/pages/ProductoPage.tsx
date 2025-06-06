import {useState} from "react"
import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import { FamuqueButton } from "@/components/FamuqueButton"


interface ProductProps {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  distributorPrice?: string;
  discount?: string;
  image: string;
  slug: string; // para URL canónica
  stock?: number;
  sku?: string;
  brand?: string;
  features?: string[];
  onlyCatalog?: boolean; // si es true, no se muestra el botón de añadir al carrito
}


export const ProductPage: React.FC<ProductProps> = ({
  name,
  description,
  price,
  distributorPrice,
  oldPrice,
  discount,
  image,
  slug, // para URL canónica
  onlyCatalog = false,
}) => {
  const [cuantity, setQuantity] = useState(1);



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
          { label: "Catálogo", href: "/catalog" },
          { label: name }
        ]}
        variants="product"
      />
      <section className="flex w-full py-comp-3-desktop max-w-screen-desktop gap-comp-3">
        <div className="flex w-1/2 justify-between ">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-comp-3" 
            >
            <CarouselContent className="h-minimal">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="laptop:basis-1/4 aspect-square w-comp-3">
                  <div className="p-1">
                    <img
                      src={image} 
                      className="aspect-square object-cover rounded hover:brightness-75 transition-all duration-300 cursor-pointer"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <img src={image} className="w-minimal aspect-square object-cover rounded-2xl" />
        </div>
        {/* product info */}
        <div className="flex flex-col justify-between">
              
            <div className="flex flex-col w-full gap-4">
              <label className="text-black text-gh-4 font-avenir-medium">{name}</label>
              <label className="text-gray text-dh-3 font-avenir-light">{price}</label>
              {oldPrice && !distributorPrice && <label className="text-gray text-dh-3 font-avenir-light line-through">{oldPrice}</label>}
              {distributorPrice && <label className="text-gray text-dh-3 font-avenir-light">{distributorPrice}</label>}
              {discount && <label className="text-gray text-dh-3 font-avenir-light">{discount}</label>}
              <label className="text-black text-th-4 font-avenir-light w-minimal ">{description}</label>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-self-end">
              {!onlyCatalog && (
                <>
                <FamuqueButton variant="outline">
                    Add to Cart
                </FamuqueButton>
                <FamuqueButton labelClassName="flex flex-row justify-evenly" variant="outline">
                    <FamuqueButton variant="secondary" onClick={() => setQuantity(cuantity - 1)} disabled={cuantity <= 1}>
                    -
                    </FamuqueButton>
                    <label className="text-black text-th-4 font-avenir-light">{cuantity}</label>
                    <FamuqueButton variant="secondary" onClick={() => setQuantity(cuantity + 1)} disabled={cuantity >= 10}>
                    +
                </FamuqueButton>
                </FamuqueButton>
                </>
              )}

            </div>
        </div>
      </section>

        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default ProductPage
