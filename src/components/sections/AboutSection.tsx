import { about } from "@/data/ts/about"
import { skillCategories } from "@/data/ts/skill"
import React from "react"
import Skill from "../ui/Skill"

export default async function AboutSection() {
  return (
    <section
      className="flex flex-col justify-between pt-10 pb-24 gap-10 px-4 sm:px-6 md:px-10 mb-10"
      id="sobre"
    >
      <h1 className="font-extrabold font-mono text-white text-4xl sm:text-5xl md:text-6xl">
        Sobre
      </h1>
      <div className="flex flex-col lg:flex-row py-5 gap-10">
        <div className="w-full lg:w-1/2 font-sans text-base text-gray-300 tracking-widest leading-8 sm:leading-10 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-400 pr-0 lg:pr-10 pb-6 lg:pb-0">
          {about.paragrafos.map((p: string, i: number) => (
            <React.Fragment key={i}>
              <p>{p}</p> <br />
            </React.Fragment>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col px-0 lg:px-9 gap-5">
          <h2 className="text-xl sm:text-2xl text-white font-mono font-bold">
            Skills
          </h2>
          <div className="space-y-10 px-0 sm:px-5">
            {Object.entries(skillCategories).map(
              ([categoryName, technologies]) => (
                <div key={categoryName}>
                  <h3 className="text-lg sm:text-xl font-medium font-sans text-white mb-4">
                    {categoryName}
                  </h3>
                  <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                    {technologies.map((tech) => (
                      <Skill key={tech.name} category={tech} />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
