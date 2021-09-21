import { Link, Routes } from "blitz"
import { VStack, Link as ChakraLink, Heading, Text } from "@chakra-ui/react"
import ReactPlaceholder from "react-placeholder"

export const Post = () => {
  return (
    <VStack w="full">
      <Link href={Routes.Post({ id: "the-id" })}>
        <ChakraLink alignSelf="flex-start">
          <Heading as="h2" size="lg">
            Title
          </Heading>
        </ChakraLink>
      </Link>
      <Text alignSelf="flex-start" textOverflow="ellipsis" noOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
