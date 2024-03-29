import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Layout from "../components/layout/layout";
import Fonts from "../components/fonts/fonts";
import { store } from "../lib/store/store";
import NextNProgress from "nextjs-progressbar";
import ProtectLayout from "../components/layout/protect-layout";
import App from "../components/App";
import "../styles/globals.css";
const theme = extendTheme({
  fonts: {
    body: "IBM Plex Sans Thai",
    heading: "IBM Plex Sans Thai",
  },
});
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <NextNProgress color="teal" options={{ showSpinner: false }} />
        <Fonts />
        <App>
          {!Component.authPage ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Layout>
              <ProtectLayout>
                <Component {...pageProps} />
              </ProtectLayout>
            </Layout>
          )}
        </App>
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
