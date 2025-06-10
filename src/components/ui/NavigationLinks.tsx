import Link from "next/link"
import { scrollToSection } from "@/lib/scrollToSection"

const HoverLinkStyle =
  "relative inline-block transition-all duration-300 ease-in-out hover:after:w-full after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-[#A6A6A6] after:transition-all after:duration-300 after:ease-in-out"

export default function NavigationLinks() {
  return (
    <div className="w-full h-full flex flex-col justify-start text-gray-300 gap-4 text-sm font-sans font-light">
      <Link
        href="#home"
        className={`flex flex-col text-neutral-100 cursor-pointer font-mono font-bold text-lg mb-10 hover:text-gray-300`}
        onClick={(e) => scrollToSection(e, "home")}
      >
        <span>Jonatas</span>
        <span>Eduardo</span>
      </Link>
      <Link
        href="#sobre"
        className={HoverLinkStyle}
        onClick={(e) => scrollToSection(e, "sobre")}
      >
        Sobre
      </Link>
      <Link
        href="#projeto"
        className={HoverLinkStyle}
        onClick={(e) => scrollToSection(e, "projetos")}
      >
        Projetos
      </Link>
      <Link
        href="#contato"
        className={HoverLinkStyle}
        onClick={(e) => scrollToSection(e, "contato")}
      >
        Contato
      </Link>
    </div>
  )
}
