import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueButton } from "@/components/FamuqueButton"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/router/routes"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <FamuqueMetadata
        title="Página no encontrada | Famuque"
        description="Lo sentimos, la página que buscas no existe. Vuelve al inicio para explorar nuestros productos."
        canonicalLink="https://famuque.com/not-found"
      />
      <section className="bg-white flex flex-col items-center justify-center w-full h-screen">
        <label className="text-th-2 tablet:text-gh-1 text-black font-avenir-heavy">404 - Página no encontrada</label>
        <div className="size-comp-3 animate-spin-slow"/>
        <FamuqueButton 
          variant="hyperlinks"
          onClick={() => navigate(ROUTES.STATIC.HOME)}
        >
          Volver al inicio
        </FamuqueButton>
      </section>
    </DefaultLayout>
  )
}

export default NotFoundPage
