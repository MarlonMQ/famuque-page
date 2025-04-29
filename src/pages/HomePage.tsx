import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import FamuqueBackground from "@/assets/background/famuque-background--1.jpg"
import { useNavigate } from "react-router-dom"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueButton } from "@/components/FamuqueButton"

function HomePage() {
  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <FamuqueNavBar absolute/>
      <section className="flex flex-row items-center tablet:justify-end relative w-full h-screen ">
        <img src={FamuqueBackground} alt="Famuque" className="absolute w-full h-screen object-cover -z-10" />
        <div className="bg-famuque-light mx-std-3 tablet:mx-comp-3-desktop w-3xl p-comp-1-desktop flex flex-col items-start gap-std-2-desktop">
          <label className="text-ggh-4 font-avenir-heavy  text-famuque">Mira todos nuestros productos!</label>
          <label className="text-gray-dark text-4xl">Accede a nuestro catálogo online</label>
          <FamuqueButton 
            onClick={() => navigate('/catalog')}
          >
            Catálogo
          </FamuqueButton>
        </div>
      </section>
      <section className="bg-white flex relative w-full h-screen items-center justify-center">

      </section>
      <FamuqueFooter/>
    </DefaultLayout>
  )
}

export default HomePage
