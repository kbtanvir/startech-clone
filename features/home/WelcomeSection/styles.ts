import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {},
  introText: {
    fontSize: {
      base: "22px !important",
      md: "45px !important",
    },
    fontWeight: "700",
  },
  animatedTextWrapper: {
    overflowY: "hidden",
    css: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    w: ["250px", "500px"],
    height: ["30px", 45],
    position: "relative",
    top: {
      base: "6px",
      md: "6px",
    },
  },
} as {
  [key: string]: StyleProps;
};
