import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomSpinner from "../lib/atoms/Spinner/Spinner";

export function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [childComp, setChildren] = useState<React.ReactNode>(LoadingScreen);
  const router = useRouter();

  useEffect(() => {
    // const isAuthRoute = router.pathname.split("/").includes("auth");
    // globalStore.setSidebarToggle(false);

    // if (!isAuthRoute && !isAuthenticated) {
    //   router.push(AppRoutes.Auth.Login);
    //   return setChildren(LoadingScreen);
    // }

    // if (isAuthRoute && isAuthenticated) {
    //   router.push(AppRoutes.Products.baseURL);
    //   return setChildren(LoadingScreen);
    // }

    setChildren(children);
  }, [children, router, router.pathname]);

  return <>{childComp}</>;
}

export function LoadingScreen() {
  return (
    <Flex
      {...{
        w: "full",
        height: "100vh !important",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomSpinner />
    </Flex>
  );
}
