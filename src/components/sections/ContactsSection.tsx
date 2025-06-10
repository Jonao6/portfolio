import { LinkButtonProps } from "@/types/Button"
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6"
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

export default function ContactsSection() {
  return (
    <section className="flex flex-col pt-12 w-full gap-14" id="contato">
      <h1 className="text-left text-6xl text-neutral-100 font-extrabold font-mono">
        Contato
      </h1>
      <div className="flex flex-col justify-center items-start h-full gap-14 py-20 px-16">
        <div className="flex flex-wrap">
          <h2 className="w-full font-mono font-bold text-3xl text-neutral-100 tracking-widest">
            Jonatas Eduardo Heleno Fernandes dos Santos
          </h2>
          <div className="mt-14 mb-20">
            <div className="flex flex-col items-start">
              <span className="font-mono font-normal text- text-white">{`Email`}</span>
              <span className="font-mono font-bold text-xl text-white">
                {process.env.EMAIL_URL}
              </span>
            </div>

            <div className="flex flex-col items-start mt-5">
              <span className="font-mono font-normal text-lg text-white">{`Telefone`}</span>
              <span className="font-mono font-bold text-xl text-white">
                {process.env.PHONE_NUMBER}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 mt-8 w-full">
            <SocialButton
              href={socialLinks.linkedin.href}
              label={socialLinks.linkedin.label}
              icon={socialLinks.linkedin.icon}
            />
            <SocialButton
              href={socialLinks.twitter.href}
              label={socialLinks.twitter.label}
              icon={socialLinks.twitter.icon}
            />
            <HeroButton
              href={`/files/curriculum.pdf`}
              label={`Curriculum`}
              icon={FaDownload}
              options={{ download: "curriculum.pdf" }}
            />
            <SocialButton
              href={socialLinks.github.href}
              label={socialLinks.github.label}
              icon={socialLinks.github.icon}
            />
            <SocialButton
              href={socialLinks.instagram.href}
              label={socialLinks.instagram.label}
              icon={socialLinks.instagram.icon}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
