import { IconType } from "react-icons"

export interface SkillProps {
  category: {
    name: string
    icon: IconType
    className?: string
  }
}

export default function Skill({ category }: SkillProps) {
  const { name, icon: Icon, className } = category

  return (
    <div className="flex flex-col items-center gap-2 max-w-20 text-center transition-transform duration-300 ease-in-out hover:scale-110 ">
      <Icon className={`h-10 w-10 ${className}`} />
      <span className="text-sm font-mono text-gray-300">{name}</span>
    </div>
  )
}
