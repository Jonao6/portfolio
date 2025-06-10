import {
  DiGithubBadge,
  DiJavascript1,
  DiMongodb,
  DiReact,
} from "react-icons/di"
import {
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTypescript,
} from "react-icons/tb"
import { SiGithubactions, SiPostgresql, SiZod } from "react-icons/si"
import { FaDocker, FaFigma, FaGit } from "react-icons/fa6"
import { RiTailwindCssFill, RiVercelLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { Categories } from "@/types/About"

export const skillCategories: Categories = {
  "Front-End": [
    { name: "JavaScript", icon: DiJavascript1, className: "text-yellow-400" },
    { name: "TypeScript", icon: TbBrandTypescript, className: "text-blue-500" },
    { name: "React", icon: DiReact, className: "text-cyan-400" },
    { name: "NextJs", icon: TbBrandNextjs, className: "text-neutral-100" },
    { name: "Tailwind", icon: RiTailwindCssFill, className: "text-sky-400" },
  ],
  "Back-End": [
    { name: "Node", icon: FaNodeJs, className: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, className: "text-sky-800" },
    { name: "MySQL", icon: TbBrandMysql, className: "text-sky-600" },
    { name: "MongoDB", icon: DiMongodb, className: "text-green-600" },
    { name: "Prisma", icon: TbBrandPrisma, className: "text-slate-300" },
  ],
  Tools: [
    { name: "Zod", icon: SiZod, className: "text-purple-400" },
    { name: "GitHub", icon: DiGithubBadge, className: "text-white" },
    { name: "Figma", icon: FaFigma, className: "text-pink-500" },
    { name: "Git", icon: FaGit, className: "text-orange-500" },
  ],
  "CI/CD": [
    { name: "Vercel", icon: RiVercelLine, className: "text-white" },
    { name: "Docker", icon: FaDocker, className: "text-blue-400" },
    {
      name: "Github Actions",
      icon: SiGithubactions,
      className: "text-indigo-400",
    },
  ],
}
