import { ReactNode, Suspense } from "react"
import { Head, Link, Routes, useSession, useMutation, useRouter } from "blitz"
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
            <Suspense fallback={null}>
              <NewArticle />
              <User />
            </Suspense>
          </HStack>
        </HStack>
        <Container pt="8">{children}</Container>
      </Box>
    </>
  )
}

export const User = () => {
  const router = useRouter()
  const user = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  return (
    <Avatar
      size="sm"
      name={user?.name ?? user?.email}
      onClick={async () => {
        if (user) await logoutMutation()
        else router.push(Routes.LoginPage())
      }}
      bg="rosewater"
      cursor="pointer"
    />
  )
}

export const NewArticle = () => {
  const session = useSession()
  return session.userId ? (
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
  ) : null
}

export default Layout
