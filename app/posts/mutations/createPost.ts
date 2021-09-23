import { resolver } from "blitz"
import db from "db"
import { CreatePost } from "app/posts/validations"

export default resolver.pipe(resolver.zod(CreatePost), resolver.authorize(), async (input, ctx) => {
  const post = await db.post.create({ data: { userId: ctx.session.userId, ...input } })

  return post
})
