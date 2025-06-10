import { IconType } from "react-icons"

export interface Technology {
  name: string
  icon: IconType
  className?: string
}

export interface Categories {
  [category: string]: Technology[]
}