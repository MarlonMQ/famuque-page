import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { ROUTES } from "@/router/routes"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"

function AboutPage() {

  return (
    <>
      <FamuqueMetadata
        title="Sobre Nosotros | Famuque"
        description="Conoce más sobre nosotros y nuestra misión en Famuque. Nos dedicamos a ofrecer productos para irrigación de calidad."
        canonicalLink="https://famuque.com/about_us"
      />
      <DefaultLayout>
        <FamuqueNavBar showAccountButtons={false}/>
        <FamuqueHeader items={[
          { label: "Inicio", href: ROUTES.HOME },
          { label: "Sobre nosotros", href: ROUTES.ABOUT }
        ]}/>
        <section className="bg-white flex relative w-full h-screen items-center justify-center">

        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default AboutPage
