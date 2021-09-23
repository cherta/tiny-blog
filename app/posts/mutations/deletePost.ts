import { resolver, AuthorizationError } from "blitz"
import db from "db"
import { z } from "zod"

const DeletePost = z.object({
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(DeletePost),
  resolver.authorize(),
  async (input, ctx) => {
    const post = await db.post.findUnique({ where: { id: input.id } })
    if (post?.userId !== ctx.session.userId)
      throw new AuthorizationError("You are not allowed to delete this post")
    return input
  },
  async ({ id }) => {
    const post = await db.post.deleteMany({ where: { id } })

    return post
  }
)
