import { HeroButton, SocialButton, LinkButtonProps } from "./ui/Button"
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa"

import { IoMdDownload } from "react-icons/io"

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
  },
  { label: "Projetos", href: "#Projetos", icon: FaArrowRight },
]

export default function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center items-start h-screen"
      id="Home"
    >
      <div className="flex item-start w-full">
        <p className="text-lg font-mono text-gray-300">
          Olá! Eu sou o Jonatas Eduardo
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-24 mt-4">
        <h1 className="text-8xl font-semibold font-mono capitalizer text-white">
          Full-stack
        </h1>
        {curriculumButton.map(({ label, href, icon }) => (
          <div key={label}>
            <HeroButton label={label} href={href} icon={icon} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 w-full">
        <p className="w-2xl text-lg leading-9 font-mono font-normal text-gray-300">
          Focado em qualidade técnica e manutenibilidade. Construo sistemas
          pensando na sua evolução contínua, onde cada decisão de arquitetura
          facilita futuras melhorias sem comprometer a performance atual.
        </p>
        <h1 className="text-8xl font-semibold font-mono capitalizer text-white">
          Developer
        </h1>
      </div>

      <div className="flex justify-center items-center w-full gap-10 mt-44 text-gray-300">
        {Object.entries(socialLinks).map(([key, props]) => (
          <SocialButton key={key} {...props} />
        ))}
      </div>
    </section>
  )
}
