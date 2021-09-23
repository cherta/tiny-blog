import { Link, Routes } from "blitz"
import { VStack, Link as ChakraLink, Heading, Text } from "@chakra-ui/react"
import ReactPlaceholder from "react-placeholder"
import { Post as PostModel } from "db"

export const Post = ({ post }: { post: PostModel }) => {
  return (
    <VStack w="full">
      <Link href={Routes.Post({ id: post.id })}>
        <ChakraLink alignSelf="flex-start">
          <Heading as="h2" size="lg">
            {post.title}
          </Heading>
        </ChakraLink>
      </Link>
      <Text alignSelf="flex-start" textOverflow="ellipsis" noOfLines={2}>
        {post.body}
      </Text>
    </VStack>
  )
}

export const PostPlaceholder = () => {
  return (
    <VStack>
      <ChakraLink alignSelf="flex-start">
        <Heading as="h2" size="lg">
          <ReactPlaceholder type="text" rows={1} ready={false}>
            <span />
          </ReactPlaceholder>
        </Heading>
      </ChakraLink>

      <ReactPlaceholder type="text" rows={2} ready={false}>
        <span />
      </ReactPlaceholder>
    </VStack>
  )
}
