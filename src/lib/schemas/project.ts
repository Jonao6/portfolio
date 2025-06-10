import { z } from "zod/v4"

export const ProjectSchema = z.object({
  title: z.string(),
  content: z.array(z.string()),
  image: z.string(),
  url: z.string(),
  tags: z.array(z.string()),
  demo: z.string(),
})

export type Project = z.infer<typeof ProjectSchema>
