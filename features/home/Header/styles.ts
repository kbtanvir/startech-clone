import { StyleProps } from "@chakra-ui/react";

export const styles = {
  menuItem: {
    transition: "ease-in-out .01s",
    bg: "transparent",
    color: "blue.800",
    textTransform: "capitalize",
    _hover: {
      bg: "transparent",
    } as StyleProps,
  },
} as {
  [key: string]: StyleProps;
};
