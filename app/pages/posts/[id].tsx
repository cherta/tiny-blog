import { BlitzPage, useParam, Link, Routes, useSession } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react"
import { Suspense } from "react"

const Post: BlitzPage = () => {
  const id = useParam("id", "string")
  return (
    <>
      <VStack spacing="2">
        <Heading as="h2" size="lg" alignSelf="flex-start">
          Title
          <Suspense fallback={null}>
            <EditButton id={id} />
          </Suspense>
        </Heading>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </Text>
      </VStack>
    </>
  )
}

export const EditButton = ({ id }: { id?: string }) => {
  const session = useSession()
  return session.userId && id ? (
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
