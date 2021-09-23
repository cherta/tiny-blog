import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetPost = z.object({
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetPost), async ({ id }) => {
  const post = await db.post.findFirst({ where: { id } })

  if (!post) throw new NotFoundError()

  return post
})
