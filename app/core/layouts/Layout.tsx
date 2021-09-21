import { ReactNode } from "react"
import { Head, Link, Routes } from "blitz"
import {
  Avatar,
  Container,
  Link as ChakraLink,
  Box,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Tiny Blog"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minH="100vh" bg="jet-black" color="cream">
        <HStack as="header" p="4" justifyContent="space-between">
          <Heading as="h1">
            <Link href="/">tiny blog.</Link>
          </Heading>
          <HStack spacing="4">
            <NewArticle />
            <User />
          </HStack>
        </HStack>
        <Container pt="8">{children}</Container>
      </Box>
    </>
  )
}

export const User = () => {
  return <Avatar size="sm" bg="rosewater" cursor="pointer" />
}

export const NewArticle = () => {
  return (
    <Link href={Routes.NewPost()}>
      <IconButton
        as={ChakraLink}
        size="sm"
        aria-label="New Article"
        icon={<AddIcon />}
        bg="yellow"
        _hover={{ bg: "rosewater" }}
        _active={{ bg: "rosewater" }}
        color="jet-black"
        borderRadius="full"
      />
    </Link>
  )
}

export default Layout
