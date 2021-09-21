import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Post } from "app/posts/components/Posts"
import { Divider, VStack } from "@chakra-ui/react"

const Home: BlitzPage = () => {
  return (
    <VStack spacing="4" divider={<Divider />}>
      <Post />
      <Post />
      <Post />
    </VStack>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
