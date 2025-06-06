import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"
import ContactsSection from "@/components/ContactsSection"
import Footer from "@/components/Footer"
import GsapWrapper from "@/components/GsapWrapper"

export default function Home() {
  return (
    <GsapWrapper>
      <main className="flex flex-col items-center px-[15%]">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactsSection />
        <Footer />
      </main>
    </GsapWrapper>
  )
}
