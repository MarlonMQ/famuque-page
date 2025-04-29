import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueInput } from "@/components/FamuqueInput"
import { RequiredLabel } from "@/components/static/RequiredLabel"

function ContactPage() {

  return (
    <DefaultLayout>
      <FamuqueNavBar/>
      <FamuqueHeader items={[
        { label: "Inicio", href: "/" },
        { label: "Contacto" }
      ]}/>
      <section className="bg-white flex flex-col relative h-strap  w-full items-center justify-center px-comp-3-desktop">
        <label className="font-avenir-heavy text-gh-2">Ponte en contacto con nosotros</label>
        <label className="font-avenir-medium text-gray text-th-2 max-w-screen-laptop text-center">Para más información sobre nuestros productos y servicios, no dudes en enviarnos un correo electrónico. ¡Estamos disponibles para ayudarte!</label>
      </section>
      <section className="bg-white flex relative w-full h-screen items-start justify-center px-comp-3-desktop">
      <fieldset className="w-full max-w-screen-wide grid grid-cols-1 laptop:grid-cols-2 gap-y-std-2 gap-x-comp-3">
        <div className="grid gap-std-1 col-start-2">
          <RequiredLabel text="Nombre" />
          <FamuqueInput name={"originalImplantingDate"} />
        </div>
        <div className="grid gap-std-1 col-start-1">
          <RequiredLabel text="correo" />
          <FamuqueInput name={"explantDate"} />
        </div>
        <div className="grid gap-std-1 col-start-2">
          <RequiredLabel text="correo" />
          <FamuqueInput name={"explantDate"} />
        </div>

      </fieldset>
      </section>
      <FamuqueFooter/>
    </DefaultLayout>
  )
}

export default ContactPage
