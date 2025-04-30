import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import FamuqueBackground from "@/assets/background/famuque-background--1.jpg"
import { useNavigate } from "react-router-dom"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueButton } from "@/components/FamuqueButton"
import { FamuqueProductCard } from "@/components/FamuqueProductCard"
import tempImage from "@/assets/temp/aspersor.jpg"

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <title>Inicio | Famuque</title>
      <meta name="description" content="Explora nuestros productos agrícolas en línea" />
      <link rel="canonical" href="https://famuque.com/dev" />
      <DefaultLayout>
        <FamuqueNavBar absolute/>
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
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
            <FamuqueProductCard
              name="Aspersor Plastico 1/2"
              description="ASPERSOR PLST. 1/2  R/M, 10-13 MTS 1.150 A 1.190 L/H PRESION DE 1.5 A 3.5 BAR"
              price="CRC 2.500"
              image={tempImage}
            />
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
