import {FamuqueNavBar} from "@/components/FamuqueNavBar"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { FamuqueFooter } from "@/components/FamuqueFooter"
import { FamuqueHeader } from "@/components/FamuqueHeader"
import { FamuqueMetadata } from "@/components/FamuqueMetaData"
import { FamuqueForm} from "@/components/FamuqueForm"
import { Label } from "@/components/static/Labels"
import { ROUTES } from "@/router/routes"
import PhoneIcon from "@/assets/logos/famuque-phone.svg?react"
import ClockIcon from "@/assets/logos/famuque-clock.svg?react"
import emailjs from '@emailjs/browser';
import { FamuqueToast } from "@/components/FamuqueToast"
import { useFormik } from "formik"
import WhatsappIcon from "@/assets/logos/famuque-whatsapp.svg?react"
import EmailIcon from "@/assets/logos/famuque-email.svg?react"
import { FamuqueButton } from "@/components/FamuqueButton"

import * as Yup from "yup"


function ContactPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Este campo es requerido"),
      email: Yup.string().email("Correo inválido").required("Este campo es requerido"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Número inválido")
        .required("Campo requerido"),
    }),
    onSubmit: async (values, { resetForm }) => {
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
    },
  });

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
          { label: "Inicio", href: ROUTES.STATIC.HOME },
          { label: "Contacto", href: ROUTES.STATIC.CONTACT }
        ]}/>
        <section className="bg-white flex flex-col relative h-fit text-center w-full items-center gap-std-3 justify-center p-std-3 tablet:p-comp-2-desktop">
          <label className="font-avenir-heavy text-dh-2 tablet:text-gh-2">¡Ponte en contacto con nosotros!</label>
          <label className="font-avenir-medium text-gray text-dh-5 tablet:text-th-2 max-w-screen-laptop text-center">Para más información sobre nuestros productos y servicios, no dudes en enviarnos un correo electrónico. ¡Estamos disponibles para ayudarte!</label>
        </section>
        <section className="bg-white flex flex-col laptop:flex-row relative w-full max-w-screen-desktop gap-comp-2-tablet justify-center p-comp-1 laptop:p-comp-2-desktop ">
          <div className="w-full flex flex-col gap-comp-2 order-2 laptop:order-1">
            <div className="flex flex-row gap-comp-2">
              <EmailIcon className="size-comp-1-tablet tablet:size-comp-2"/>
              <div className="grid gap-std-2">
                <label className="text-dh-3 tablet:text-dh-2 font-avenir-medium">
                  Correo Electrónico
                </label>
                <FamuqueButton
                  className="w-fit"
                  labelClassName="text-dh-4 tablet:text-dh-3 font-avenir-light"
                  onClick={() => window.open("mailto:k.emuva@hotmail.com", "_blank")}
                  variant="quaternary"
                >
                  k.emuva@hotmail.com
                </FamuqueButton>   
              </div>
            </div>
            <div className="flex flex-row gap-comp-2">
              <PhoneIcon className="size-comp-1-tablet tablet:size-comp-2"/>
              <div className="grid gap-std-2">
                <label className="text-dh-3 tablet:text-dh-2 font-avenir-medium">
                  Teléfonos
                </label>
                  <FamuqueButton
                    className="w-fit"
                    labelClassName="text-dh-4 tablet:text-dh-3 font-avenir-light"
                    onClick={() => window.open("https://wa.me/50688855222", "_blank")}
                    variant="quaternary"
                    prepend_icon={<WhatsappIcon className="size-comp-1"/>}
                  >
                    +506 8885 5222
                  </FamuqueButton>
                  <FamuqueButton
                    className="w-fit"
                    labelClassName="text-dh-4 tablet:text-dh-3 font-avenir-light"
                    onClick={() => window.open("tel:+50624484597", "_blank")}
                    variant="quaternary"
                    prepend_icon={<PhoneIcon className="size-comp-1"/>}
                  >
                    +506 2448 4597
                  </FamuqueButton>
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
            formik={formik}
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
                name="message" 
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
