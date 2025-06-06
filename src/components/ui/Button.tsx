import Link from "next/link"
import { IconType } from "react-icons"

export interface ButtonProps {
  label: string
  icon: IconType
  options?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  size?: string
}

export interface LinkButtonProps extends ButtonProps {
  href: string
}

export function HeroButton({
  label,
  href,
  icon,
  options = {},
  size,
}: LinkButtonProps) {
  const Icon = icon
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-12 py-2.5 font-normal font-sans text-black shadow-md transition duration-300 ease-out rounded-4xl"
      aria-label={label}
      {...options}
    >
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-white text-black duration-300 group-hover:translate-x-0">
        <Icon className="h-6 w-6" />
      </span>

      <span
        className={`ease absolute flex h-full w-full transform items-center justify-center text-black transition-all duration-300 group-hover:translate-x-full ${
          size ? size : "text-1xl"
        } tracking-widest`}
      >
        {label}
      </span>

      <span
        className={`invisible relative ${
          size ? size : "text-1xl"
        } font-medium tracking-widest`}
      >
        {label}
      </span>
    </Link>
  )
}

export function SocialButton({ href, icon, label, size }: LinkButtonProps) {
  const Icon = icon
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center justify-center gap-5 px-5 h-10 border border-gray-300 rounded-3xl text-white  transition-colors delay-75 duration-200 ease-in-out scale-105 hover:bg-white hover:text-black"
    >
      <Icon className="w-5 h-5" />
      <span className={`${size ? size : "text-sm"} font-sans font-normal`}>
        {label}
      </span>
    </Link>
  )
}

export function ProjectButton ({href, label, icon}: LinkButtonProps) {
  const Icon = icon
  return(
    <Link href={href}>
      <Icon />
      <span>{label}</span>
    </Link>
  )
}