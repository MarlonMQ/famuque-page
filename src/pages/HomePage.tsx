import FamuqueBackground from "@/assets/background/famuque-background--1.jpg"
import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { useNavigate } from "react-router-dom"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueButton } from "@/components/FamuqueButton"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <FamuqueMetadata
        title="Inicio | Famuque"
        description="Explora nuestros productos agrícolas en línea"
        canonicalLink="https://famuque.com/"
      />
      <DefaultLayout>
        <FamuqueNavBar showAccountButtons={false}/>
        <section className="relative flex flex-row items-center tablet:justify-end w-full h-screen ">
          <img src={FamuqueBackground} alt="Famuque" className="absolute w-full h-screen object-cover z-10" />
          <div className="z-10 bg-famuque-light mx-std-3 tablet:mx-comp-3-desktop w-3xl p-comp-1 tablet:p-comp-1-desktop flex flex-col items-start gap-std-2-desktop">
            <label className="text-gh-3 tablet:text-ggh-4 font-avenir-heavy  text-famuque">Mira todos nuestros productos!</label>
            <label className="text-gray-dark text-gh-6 laptop:text-gh-4">Accede a nuestro catálogo online</label>
            <FamuqueButton 
              onClick={() => navigate('/catalog')}
            >
              Catálogo
            </FamuqueButton>
          </div>
        </section>
        <section className="bg-white flex flex-col relative w-full items-center justify-center py-comp-2">
          <label className="text-gh-3 font-avenir-heavy">Nuestros Productos</label>
          <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-std-3 p-comp-1 tablet:p-comp-1-desktop w-full max-w-screen-desktop">
          </div>
          <FamuqueButton 
            onClick={() => navigate('/catalog')}
            variant="tertiary"
          >
            Ver más
          </FamuqueButton>
        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default HomePage
