import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"

function AboutPage() {

  return (
    <>
      <title>Sobre Nososotros | Famuque</title>
      <meta name="description" content="Conoce más sobre nosotros y nuestra misión en Famuque. Nos dedicamos a ofrecer productos para irrigación de calidad." />
      <link rel="canonical" href="https://famuque.com/about" />
      <DefaultLayout>
        <FamuqueNavBar/>
        <FamuqueHeader items={[
          { label: "Inicio", href: "/dev" },
          { label: "Sobre nosotros" }
        ]}/>
        <section className="bg-white flex relative w-full h-screen items-center justify-center">

        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default AboutPage
