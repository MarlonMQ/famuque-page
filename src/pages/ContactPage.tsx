import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"
import { FamuqueForm, FormHelpers} from "@/components/FamuqueForm"
import { Label } from "@/components/static/Labels"
import { ROUTES } from "@/router/routes"
import LocationIcon from "@/assets/logos/famuque-location.svg?react"
import PhoneIcon from "@/assets/logos/famuque-phone.svg?react"
import ClockIcon from "@/assets/logos/famuque-clock.svg?react"
import emailjs from '@emailjs/browser';
import { FamuqueToast } from "@/components/FamuqueToast"
import { FormValues } from "@/types/FormValues";

import * as Yup from "yup"


function ContactPage() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo es requerido"),
    email: Yup.string().email("Correo inválido").required("Este campo es requerido"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Número inválido")
      .required("Campo requerido"),
  });
  async function onSubmit(
    values: FormValues,
    { resetForm }: FormHelpers<FormValues>
  ) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message
        }, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      FamuqueToast.showToast("Mensaje enviado exitosamente", "Su mensaje ha sido enviado, nos pondremos en contacto con usted pronto.", "success");
      resetForm();
    } catch (error) {
      FamuqueToast.showToast("Error al enviar el mensaje", "No se pudo enviar el mensaje. Por favor, inténtelo de nuevo más tarde.", "error");
    }
  }

  return (
    <>
      <FamuqueMetadata
        title="Contacto | Famuque"
        description="Contáctanos para más información sobre nuestros productos y servicios agrícolas. Estamos para ayudarte."
        canonicalLink="https://famuque.com/contact"
      />
      <DefaultLayout >
        <FamuqueNavBar showAccountButtons={false}/>
        <FamuqueHeader items={[
          { label: "Inicio", href: ROUTES.HOME },
          { label: "Contacto", href: ROUTES.CONTACT }
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
          <FamuqueForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className="w-full max-w-screen-wide grid grid-cols-1  gap-y-std-2 gap-x-comp-3 order-1 laptop:order-2"
          >
            <div className="grid gap-std-1">
              <Label required text="Tu Nombre" />
              <FamuqueForm.Input 
                name={"name"}
                type="text" 
                placeholder="Ingresa tu nombre completo"
              />
            </div>
            <div className="grid gap-std-1">
              <Label required text="Correo electrónico" />
              <FamuqueForm.Input 
                name={"email"} 
                type="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="grid gap-std-1">
              <Label required text="Número telefónico" />
              <FamuqueForm.Input 
                name={"phone"}
                type="tel"
                placeholder="Ingresa tu número telefónico"
              />
            </div>
            <div className="grid gap-std-1">
              <Label text="¿Como podémos ayudarte?" />
              <FamuqueForm.TextArea 
                name={"message"} 
                placeholder="Cotizaciones, contactos, sugerencias, etc."
              />
            </div>
            <div className="justify-self-start">
              <FamuqueForm.Submit>
                Enviar
              </FamuqueForm.Submit>
            </div>
          </FamuqueForm>
        </section>
        <FamuqueFooter/>
      </DefaultLayout>
    </>
  )
}

export default ContactPage
