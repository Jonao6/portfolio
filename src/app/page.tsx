export const dynamic = "force-dynamic";

import ContactsSection from "@/components/sections/ContactsSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectSection from "@/components/sections/ProjectSection"
import AboutSection from "@/components/sections/AboutSection"
import ReactLenis from "lenis/react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <ReactLenis root>
        <div className="flex flex-col w-full justify-center items-center px-[15%]">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactsSection />
        </div>
      </ReactLenis>
      <Footer />
    </main>
  )
}
