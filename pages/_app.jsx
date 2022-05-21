import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Head from "next/head"
import Layout from "../components/layout/layout"
import Fonts from "../components/fonts/fonts"
import "../styles/globals.css"
const theme = extendTheme({
  fonts: {
    body: "IBM Plex Sans Thai",
    heading: "IBM Plex Sans Thai",
  },
})
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
