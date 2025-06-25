import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FamuqueNavBar } from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueProductCard } from "@/components/FamuqueProductCard/FamuqueProductCard"
import { FamuquePagination } from "@/components/FamuquePagination"
import { Loader2 } from "lucide-react";

const ITEMS_PER_PAGE = 1

function CatalogPage() {
  const [productos, setProductos] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  // const search = ""

  useEffect(() => {
    async function fetchProductos() {
      
      setLoading(true)
      const from = (currentPage - 1) * ITEMS_PER_PAGE
      const to = from + ITEMS_PER_PAGE - 1

      const { data, error, count } = await supabase
        .from("product")
        .select("*", { count: "exact" }) // importante para obtener total
        .range(from, to)

      if (error) {
        console.error("Error al obtener productos:", error)
        return
      }

      const totalPages = Math.ceil((count ?? 0) / ITEMS_PER_PAGE)

      setProductos(data || [])
      setTotalPages(totalPages)
      setLoading(false)
    }
    fetchProductos()
  }, [currentPage])

  return (
    <>
      <title>Catálogo | Famuque</title>
      <meta
        name="description"
        content="Explora nuestro catálogo de productos agrícolas en línea. Encuentra lo que necesitas para tu cultivo."
      />
      <link rel="canonical" href="https://famuque.com/catalog" />
      <DefaultLayout>
        <FamuqueNavBar showCart={false} showLogin={false} showSearch={false} />
        <FamuqueHeader
          items={[
            { label: "Inicio", href: "/dev" },
            { label: "Catálogo" },
          ]}
        />
        {loading ? (
          <div className="flex flex-col gap-2 items-center justify-center w-full h-strap">
            <label className="font-avenir-light text-th-1 text-center text-gray-500">Cargando productos...</label>
            <Loader2 className=" animate-spin size-comp-3 text-gray-500" />
          </div>
        ) : (
          <>
          <section className="bg-white flex flex-col gap-4 w-full items-center justify-start p-8">
            <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 gap-std-3 tablet:p-comp-1-desktop w-full max-w-screen-desktop">
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
                showAddToCart={false}
                showShare={false}
                />
              ))}
            </div>
          </section>
        
        {totalPages > 1 && (
          <div className="flex justify-center w-full p-4 z-20">
          <FamuquePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="w-full max-w-screen-desktop"
          />
          </div>
        )}
        </>
        )}
        <FamuqueFooter />
        </DefaultLayout>
        </>
      )
}

export default CatalogPage
