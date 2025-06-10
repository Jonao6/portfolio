import { scrollToSection } from "@/lib/scrollToSection"
import { LinkButtonProps } from "@/types/Button"
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { IoMdDownload } from "react-icons/io"
import { HeroButton, SocialButton } from "../ui/Button"

const socialLinks: Record<string, LinkButtonProps> = {
  linkedin: {
    href: process.env.LINKEDIN_URL ?? "#",
    icon: FaLinkedin,
    label: "Linkedin",
  },
  github: {
    href: process.env.GITHUB_URL ?? "#",
    icon: FaGithub,
    label: "Github",
  },
  twitter: {
    href: process.env.TWITTER_URL ?? "#",
    icon: FaTwitter,
    label: "Twitter",
  },
  instagram: {
    href: process.env.INSTAGRAM_URL ?? "#",
    icon: FaInstagram,
    label: "Instagram",
  },
}

export const curriculumButton: LinkButtonProps[] = [
  {
    label: "Curriculum",
    href: "/files/curriculum.pdf",
    icon: IoMdDownload,
    options: { target: "_blank" },
  },
  {
    label: "Projetos",
    href: "#projetos",
    icon: FaArrowRight,
    options: {
      onClick: (e) => scrollToSection(e, "home"),
    },
  },
]

export default function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center items-start min-h-screen w-full px-6 sm:px-10 md:px-14 py-10"
      id="home"
    >
      <div className="w-full mb-2">
        <p className="text-base font-mono text-gray-300">
          Olá! Eu sou o Jonatas Eduardo
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-28 mt-4 w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-mono capitalize text-white">
          Full-stack
        </h1>
        <div className="flex flex-wrap justify-between gap-6 md:gap-16">
          {curriculumButton.map(({ label, href, icon }) => (
            <HeroButton key={label} label={label} href={href} icon={icon} />
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-6 mt-10 w-full">
        <p className="text-base leading-7 font-mono text-gray-300 max-w-2xl">
          Focado em qualidade técnica e manutenibilidade. Construo sistemas
          pensando na sua evolução contínua, onde cada decisão de arquitetura
          facilita futuras melhorias sem comprometer a performance atual.
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-mono capitalize text-white">
          Developer
        </h1>
      </div>

      <div className="flex justify-between md:justify-center items-center w-full flex-wrap gap-8 md:gap-16 mt-16 lg:mt-30 text-gray-300">
        {Object.entries(socialLinks).map(([key, props]) => (
          <SocialButton key={key} {...props} />
        ))}
      </div>
    </section>
  )
}
