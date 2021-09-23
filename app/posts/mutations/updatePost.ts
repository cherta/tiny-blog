import { resolver, AuthorizationError } from "blitz"
import db from "db"
import { UpdatePost } from "app/posts/validations"

export default resolver.pipe(
  resolver.zod(UpdatePost),
  resolver.authorize(),
  async (input, ctx) => {
    const post = await db.post.findUnique({ where: { id: input.id } })
    if (post?.userId !== ctx.session.userId)
      throw new AuthorizationError("You are not allowed to update this post")
    return input
  },
  async ({ id, ...data }) => {
    const post = await db.post.update({ where: { id }, data })

    return post
  }
)
