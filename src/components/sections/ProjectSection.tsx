import { ProjectProps } from "@/types/Project"
import Project from "../project/Project"

export default async function ProjectSection() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`)
  // const data: ProjectProps[] = await res.json()
  
  return (
    <section className="flex flex-col w-full" id="projetos">
      <div className="flex justify-end items-center">
        <h1 className="text-6xl font-mono font-extrabold text-neutral-100 shrink-0 mb-20">
          Projetos
        </h1>
      </div>
      {/* {data.map((proj, index) => (
        <div
          className={`
      pb-8 md:pb-10
      not-last:mb-60
      flex items-center
    `}
          key={index}
        >
          <Project project={proj.project} isInverted />
        </div>
        ))} */}
    </section>
  )
}
