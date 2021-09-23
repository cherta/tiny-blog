import { z } from "zod"

export const CreatePost = z.object({
  title: z.string(),
  body: z.string(),
})

export const UpdatePost = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
})
