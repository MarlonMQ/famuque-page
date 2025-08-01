import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FamuqueNavBar } from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueProductCard } from "@/components/FamuqueProductCard/FamuqueProductCard"
import { FamuquePagination } from "@/components/FamuquePagination"
import { Loader2 } from "lucide-react"
import { useDebounce } from "@/lib/utils"
import { FamuqueSearcher } from "@/components/FamuqueSearcher"

const ITEMS_PER_PAGE = 24

function CatalogPage() {
  const [productos, setProductos] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const debouncedSearch = useDebounce(searchInput, 300)

  useEffect(() => {
    async function fetchProductos() {
      setLoading(true);

      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const offset = from;

      let data = [];
      let error = null;
      let total = 0;

      if (search.trim() !== "") {
        const response = await supabase.rpc("search_products", {
          keyword: search,
          limit_param: ITEMS_PER_PAGE,
          offset_param: offset,
        });

        data = response.data;
        error = response.error;

        total = data?.[0]?.total_count ?? 0;
      } else {
        const response = await supabase
          .from("product")
          .select("*", { count: "exact" })
          .range(from, from + ITEMS_PER_PAGE - 1);

        data = response.data || [];
        error = response.error;
        total = response.count ?? 0;
      }

      if (error) {
        console.error("Error al obtener productos:", error);
        setProductos([]);
        setTotalPages(1);
        setLoading(false);
        return;
      }
      const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));

      setProductos(data || []);
      setTotalPages(totalPages);
      setLoading(false);
    }

    fetchProductos();
  }, [currentPage, search]);



  useEffect(() => {
    setCurrentPage(1)
    setSearch(debouncedSearch)
  }, [debouncedSearch])

  return (
    <>
      <title>Catálogo | Famuque</title>
      <meta
        name="description"
        content="Explora nuestro catálogo de productos agrícolas en línea. Encuentra lo que necesitas para tu cultivo."
      />
      <link rel="canonical" href="https://famuque.com/catalog" />
      <DefaultLayout>
        <FamuqueNavBar showAccountButtons={false}/>
        <FamuqueHeader
          items={[
            { label: "Inicio", href: "/" },
            { label: "Catálogo" },
          ]}
        />

        {/* Buscador */}
        <FamuqueSearcher
          searchValue={searchInput}
          onSearchChange={setSearchInput}
          showFilterButton={true}
        />

        {/* Estado de carga */}
        {loading ? (
          <div className="flex flex-col gap-comp-1 w-full min-h-minimal items-center justify-center">
            <label className="font-avenir-light text-th-1 text-center text-gray-500">
              Cargando productos...
            </label>
            <Loader2 className="animate-spin size-comp-3 text-gray-500" />
          </div>
        ) : (
          <section className="flex flex-col gap-comp-2 w-full items-center justify-center py-comp-2">
            <div className="grid grid-cols-1 tablet:grid-cols-2 medium:grid-cols-3 laptop:grid-cols-4 gap-comp-1 mx-comp-1 max-w-screen-desktop">
              {productos.length === 0 ? (
                <p className="text-th-2 text-gray-500 col-span-full text-center">
                  No se encontraron productos.
                </p>
              ) : (
                productos.map((producto) => (
                  <FamuqueProductCard
                    key={producto.id}
                    product={producto}
                    showAddToCart={false}
                    showShare={false}
                  />
                ))
              )}
            </div>
            {totalPages > 1 && (
              <FamuquePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="w-full max-w-screen-desktop"
              />
            )}
          </section>
        )}

        <FamuqueFooter />
      </DefaultLayout>
    </>
  )
}

export default CatalogPage
