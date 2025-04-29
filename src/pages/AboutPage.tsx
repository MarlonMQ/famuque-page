import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"

function AboutPage() {

  return (
    <DefaultLayout>
      <FamuqueNavBar/>
      <FamuqueHeader items={[
        { label: "Inicio", href: "/" },
        { label: "Sobre nosotros" }
      ]}/>
      <section className="bg-white flex relative w-full h-screen items-center justify-center">

      </section>
      <FamuqueFooter/>
    </DefaultLayout>
  )
}

export default AboutPage
