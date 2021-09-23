import { BlitzPage, useParam, Link, Routes, useSession, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react"
import { Suspense } from "react"
import getPost from "app/posts/queries/getPost"

const Post: BlitzPage = () => {
  const id = useParam("id", "string") as string
  return (
    <>
      <VStack spacing="2">
        <Suspense fallback={null}>
          <PostDetail id={id} />
        </Suspense>
      </VStack>
    </>
  )
}

const PostDetail = ({ id }: { id: string }) => {
  const [post] = useQuery(getPost, { id })
  return (
    <>
      <Heading as="h2" size="lg" alignSelf="flex-start">
        {post.title}
        <Suspense fallback={null}>
          <EditButton id={id} />
        </Suspense>
      </Heading>
      <Text alignSelf="flex-start">{post.body}</Text>
    </>
  )
}

export const EditButton = ({ id }: { id: string }) => {
  const session = useSession()
  const [post] = useQuery(getPost, { id })
  return post.userId === session.userId ? (
    <Link href={Routes.EditPost({ id })}>
      <ChakraLink ml="2" fontSize="xs" fontWeight="normal">
        Edit
      </ChakraLink>
    </Link>
  ) : null
}

Post.suppressFirstRenderFlicker = true
Post.getLayout = (page) => <Layout>{page}</Layout>

export default Post
