import FamuqueBackground from "@/assets/background/famuque-background--1.webp"
import FamuqueBackground2 from "@/assets/background/famuque-background--2.webp"
import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { useNavigate } from "react-router-dom"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueButton } from "@/components/FamuqueButton"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"
import { FamuqueMarquee } from "@/components/FamuqueMarquee"
import { brandsData } from "@/data/brandsData"

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
          <div className="flex flex-col items-center justify-center mx-3 max-w-screen-desktop">
            <label className="text-th-3 medium:text-dh-1 text-center font-avenir-heavy text-gray">
              Más de 20 años dedicados a proveer soluciones en sistemas de riego de alta calidad.
            </label>
            <br />
            <label className="text-th-4 medium:text-dh-3 text-center font-avenir-light">
              Distribuimos insumos certificados de marcas líderes, respaldando proyectos agrícolas e industriales en todo el país.
            </label>
            <FamuqueButton 
              className="mt-comp-1"
              variant="tertiary"
              onClick={() => navigate('/catalog')}
            >
              Mira nuestros productos
            </FamuqueButton>
          </div>
        </section>  
        <section className="relative bg-white flex flex-row w-full h-minimal-2 medium:h-short items-center justify-center py-comp-2">
          {/* contacto*/}
          <img src={FamuqueBackground2} alt="Famuque" className="absolute w-full h-full object-cover brightness-50" />
          <div className="w-full flex flex-col max-w-screen-desktop gap-comp-1 z-10 mx-std-2 bg-famuque-light items-center py-std-3 medium:py-comp-2  shadow-2xl">
            <label className="text-th-2 medium:text-dh-1 text-center font-avenir-heavy text-famuque">
              ¡Ponte en contacto con nosotros!
            </label>
            <label className="text-th-4 medium:text-dh-3 font-avenir-light text-center">
              Para obtener más información sobre nuestros precios o productos
            </label>
            <FamuqueButton 
              className="mt-comp-1 max-w-fit"
              onClick={() => navigate('/contact')}
              >
              Contáctanos
            </FamuqueButton>
          </div>

        </section>
        <FamuqueMarquee 
          className="py-comp-1 bg-famuque" 
          itemClassName="max-w-strap-mobile mx-std-3 medium:max-w-minimal-1 medium:mx-comp-1"
          imageClassName="opacity-50 grayscale"
          images={brandsData}
        />
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default HomePage
