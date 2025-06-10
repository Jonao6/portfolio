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