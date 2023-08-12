import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProps } from "next/app";
import router from "next/router";
import { useEffect, useState } from "react";
import "../lib/configs/firebase.config";
import "../lib/local/i18n";
import theme from "../lib/theme/theme";
import * as gtag from "../lib/utils/gtag";
export const { ToastContainer, toast } = createStandaloneToast();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setpageLoading] = useState(true)
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
