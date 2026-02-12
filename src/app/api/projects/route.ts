import { fetchProject } from "@/lib/fetchProject"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const project = await fetchProject(
    "https://raw.githubusercontent.com/Jonao6/ecommerce-monorepo/master/project.json"
  )
  const validProjects = project ? [project] : []

  const response = validProjects.map((proj) => ({
    project: proj,
  }))

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
