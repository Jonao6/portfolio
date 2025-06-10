import { ProjectSchema, Project } from "./schemas/project"

export async function fetchProject(url: string): Promise<Project | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } })

    if (!res.ok) return null

    const json = await res.json()

    const parsed = ProjectSchema.safeParse(json)

    if (parsed.success) {
      return parsed.data
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
