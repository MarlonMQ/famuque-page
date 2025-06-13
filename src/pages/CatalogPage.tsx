import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FamuqueNavBar } from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueProductCard } from "@/components/FamuqueProductCard/FamuqueProductCard"

function CatalogPage() {
  const [productos, setProductos] = useState<any[]>([])

  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .limit(10)

      if (error) console.error("Error al obtener productos:", error)
      else {
        console.log("Productos obtenidos:", data)
        // Aquí puedes procesar los datos si es necesario
        setProductos(data)
      } 
    }

    fetchProductos()
  }, [])

  return (
    <>
      <title>Catálogo | Famuque</title>
      <meta
        name="description"
        content="Explora nuestro catálogo de productos agrícolas en línea. Encuentra lo que necesitas para tu cultivo."
      />
      <link rel="canonical" href="https://famuque.com/catalog" />
      <DefaultLayout>
        <FamuqueNavBar />
        <FamuqueHeader
          items={[
            { label: "Inicio", href: "/dev" },
            { label: "Catálogo" },
          ]}
        />
        <section className="bg-white flex flex-col gap-4 w-full min-h-screen items-center justify-start p-8">
          <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-std-3 p-comp-1 tablet:p-comp-1-desktop w-full max-w-screen-desktop">
            {productos.map((producto) => (
              <FamuqueProductCard
                key={producto.id}
                slug={producto.slug}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                oldPrice={producto.old_price}
                discount={producto.discount}
                image={producto.image}
                showAddToCart={true}
                showShare={true}
              />
            ))}
          </div>
        </section>
        <FamuqueFooter />
      </DefaultLayout>
    </>
  )
}

export default CatalogPage
