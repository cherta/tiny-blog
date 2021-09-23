import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Post } from "app/posts/components/Posts"
import { Divider, VStack } from "@chakra-ui/react"
import getPosts from "app/posts/queries/getPosts"
import { Suspense } from "react"

const Home: BlitzPage = () => {
  return (
    <Suspense fallback={null}>
      <PostList />
    </Suspense>
  )
}

const PostList = () => {
  const [result] = useQuery(getPosts, { take: 10 })
  return (
    <VStack spacing="4" divider={<Divider />}>
      {result.posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </VStack>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
