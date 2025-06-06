import React from "react"
import { promises as fs } from "fs"
import { skillCategories } from "@/data/ts/skill"
import Skill from "./ui/Skill"

export default async function AboutSection() {
  const file = await fs.readFile(process.cwd() + "/src/data/about.json", "utf8")
  const data = JSON.parse(file)
  return (
    <section className="flex flex-col justify-between pt-10 px-0 pb-24 gap-5 mb-10">
      <h1 className="font-extrabold font-mono text-white text-6xl">Sobre</h1>
      <div className="flex flex-row py-5 order-1">
        <div className="w-1/2 font-sans text-lg text-gray-300 tracking-widest leading-10 pr-10 border-r-2 border-gray-400">
          {data.paragrafos.map((p: string, i: number) => (
            <React.Fragment key={i}>
              <p>{p}</p> <br />
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col px-9 gap-5">
          <h1 className="text-2xl text-white font-mono font-bold">Skills</h1>
          <div className="space-y-10 px-5">
            {Object.entries(skillCategories).map(
              ([categoryName, technologies]) => (
                <div key={categoryName}>
                  <h2 className="text-xl font-medium font-sans text-white mb-4">
                    {categoryName}
                  </h2>
                  <div className="flex flex-wrap gap-8">
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
