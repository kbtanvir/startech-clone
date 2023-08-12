import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {
    justifyContent: "space-between",
    position: "relative",
    minH: {
      md: "1000px",
    },
    w: "full",
    px: 6,
    pt: ["20"],
    bg: "#212530",
    gap: {
      base: "10vh",
    },
  },
  container: {
    w: "full",
    maxW: "1400px",
    flexDir: {
      base: "column",
      lg: "row",
    },
    gap: "20",
    justifyContent: "space-between",
  },
  formWrapper: {
    w: "full",
    maxW: "500px",
    alignItems: "stretch",
    gap: "23px",
    position: "relative",
    zIndex: 1,
  },
  formTitle: {
    fontSize: {
      base: "25px !important",
      md: "45px !important",
    },
    fontWeight: "700",
    textAlign: {
      base: "center",
      md: "left",
    },
  },
  rightImage: {
    paddingTop: {
      base: "20vh",
      xl: "100px",
    },
    position: "relative",
  },
  footerWrap: {
    pb: {
      base: "40px",
    },
  },
  footerText: {
    color: "gray.500",
    cursor: "pointer",
    _hover: {
      color: "gold",
    },
  },
} as {
  [key: string]: StyleProps;
};
