import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueButton } from "@/components/FamuqueButton"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/router/routes"

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <section className="bg-white flex flex-col items-center justify-center w-full h-screen">
        <label className="text-th-2 tablet:text-gh-1 text-black font-avenir-heavy">404 - Página no encontrada</label>
        <div className="size-comp-3 animate-spin-slow"/>
        <FamuqueButton 
          variant="hyperlinks"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Volver al inicio
        </FamuqueButton>
      </section>
    </DefaultLayout>
  )
}

export default NotFoundPage
