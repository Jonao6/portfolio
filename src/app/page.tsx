import ContactsSection from "@/components/sections/ContactsSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectSection from "@/components/sections/ProjectSection"
import AboutSection from "@/components/sections/AboutSection"
import ReactLenis from "lenis/react"

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center px-[15%]">
      <ReactLenis root>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactsSection />
      </ReactLenis>
    </main>
  )
}
