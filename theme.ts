import { extendTheme } from "@chakra-ui/react"

const colors = {
  "jet-black": "#282120",
  yellow: "#FAD02C",
  cream: "#F8EFE4",
  rosewater: "#E6C2BF",
  coral: "#FF5765",
}

const fonts = { heading: "'Noto Serif', serif", body: "'Lustria', serif" }

export const theme = extendTheme({ colors, fonts })
