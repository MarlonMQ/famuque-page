import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import SettingsLogo from "@/assets/logos/famuque-settings.svg?react"


function ComingSoonPage() {

  return (
    <DefaultLayout>
      <section className="bg-white flex flex-row items-center justify-center w-full h-screen">
        <label className="text-gh-1 text-black font-avenir-heavy">En Desarrollo</label>
        <SettingsLogo className="size-comp-3 animate-spin-slow"/>
      </section>
      
    </DefaultLayout>
  )
}

export default ComingSoonPage
