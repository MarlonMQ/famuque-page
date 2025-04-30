import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueInput } from "@/components/FamuqueInput"
import { FamuqueButton } from "@/components/FamuqueButton"
import { Label, RequiredLabel } from "@/components/static/Labels"
import { FamuqueTextArea } from "@/components/FamuqueTextArea"
import LocationIcon from "@/assets/logos/famuque-location.svg?react"
import PhoneIcon from "@/assets/logos/famuque-phone.svg?react"
import ClockIcon from "@/assets/logos/famuque-clock.svg?react"


function ContactPage() {

  return (
    <>
      <title>Contacto | Famuque</title>
      <meta name="description" content="Contáctanos para más información sobre nuestros productos y servicios agrícolas. Estamos para ayudarte." />
      <link rel="canonical" href="https://famuque.com/contact" />
      <DefaultLayout >
        <FamuqueNavBar/>
        <FamuqueHeader items={[
          { label: "Inicio", href: "/dev" },
          { label: "Contacto" }
        ]}/>
        <section className="bg-white flex flex-col relative h-fit text-center w-full items-center gap-std-3 justify-center p-std-3 tablet:p-comp-2-desktop">
          <label className="font-avenir-heavy text-dh-2 tablet:text-gh-2">¡Ponte en contacto con nosotros!</label>
          <label className="font-avenir-medium text-gray text-dh-5 tablet:text-th-2 max-w-screen-laptop text-center">Para más información sobre nuestros productos y servicios, no dudes en enviarnos un correo electrónico. ¡Estamos disponibles para ayudarte!</label>
        </section>
        <section className="bg-white flex flex-col laptop:flex-row relative w-full max-w-screen-desktop gap-comp-2-tablet justify-center p-comp-1 laptop:p-comp-2-desktop ">
          <div className="w-full flex flex-col gap-comp-2 order-2 laptop:order-1">
            <div className="flex flex-row gap-comp-2">
              <LocationIcon className="size-comp-1-tablet tablet:size-comp-2"/>
              <div className="grid gap-std-2">
                <label className="text-dh-3 tablet:text-dh-2 font-avenir-medium">
                  Dirección
                </label>
                <label className="text-dh-4 tablet:text-dh-3 font-avenir-light">
                  San Rafael de Poás, 
                  <br/> 
                  Alajuela Costa Rica
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-comp-2">
              <PhoneIcon className="size-comp-1-tablet tablet:size-comp-2"/>
              <div className="grid gap-std-2">
                <label className="text-dh-3 tablet:text-dh-2 font-avenir-medium">
                  Teléfono
                </label>
                <label className="text-dh-4 tablet:text-dh-3 font-avenir-light">
                  +(506) 83495522
                  <br/>
                  +(506) 24484597
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-comp-2">
              <ClockIcon className="size-comp-1-tablet tablet:size-comp-2"/>
              <div className="grid gap-std-2">
                <label className="text-dh-3 tablet:text-dh-2 font-avenir-medium">
                  Horario de Atención
                </label>
                <label className="text-dh-4 tablet:text-dh-3 font-avenir-light">
                  Lunes a Viernes:
                  <br/>
                  De 7:00 am a 5:00 pm
                </label>
              </div>
            </div>
          </div>
          <fieldset className="w-full max-w-screen-wide grid grid-cols-1  gap-y-std-2 gap-x-comp-3 order-1 laptop:order-2">
            <div className="grid gap-std-1">
              <RequiredLabel text="Tu Nombre" />
              <FamuqueInput name={"originalImplantingDate"} />
            </div>
            <div className="grid gap-std-1">
              <RequiredLabel text="Correo Electrónico" />
              <FamuqueInput name={"explantDate"} />
            </div>
            <div className="grid gap-std-1">
              <RequiredLabel text="Número de teléfono" />
              <FamuqueInput name={"explantDate"} />
            </div>
            <div className="grid gap-std-1">
              <Label text="¿Como podémos ayudarte?"/>
              <FamuqueTextArea name={"explantDate"} />
            </div>
            <div className="justify-self-start">
              <FamuqueButton type="submit" variant="primary" >
                Enviar
              </FamuqueButton>
            </div>
          </fieldset>
        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default ContactPage
