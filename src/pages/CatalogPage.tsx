import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FamuqueNavBar } from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"

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
          <h2 className="text-2xl font-semibold">Productos:</h2>
          {productos.length === 0 && <p>Cargando productos...</p>}
          <ul className="w-full max-w-4xl grid grid-cols-2 gap-4">
            {productos.map((producto) => (
              <li
                key={producto.id}
                className="border p-4 rounded shadow-sm"
              >
                <p className="font-bold">{producto.nombre}</p>
                <p>₡{producto.precio}</p>
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-48 object-cover mt-2"
                />
              </li>
              
            ))}
          </ul>
        </section>
        <FamuqueFooter />
      </DefaultLayout>
    </>
  )
}

export default CatalogPage
