import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  grid: {
    position: "relative",
    minH: {
      base: "600px",
      md: "1000px",
    },
    w: "full",
    zIndex: "2",
    px: {
      base: 6,
      md: 10,
    },

    justifyItems: "center",
    py: {
      base: "17vh",
      md: "20vh",
      xl: "0",
    },
    bg: "#212530",
    templateColumns: {
      base: "1fr",
      xl: "1fr 2fr",
    },
  },
  textWrapper: {
    pl: {
      base: "0",
      xl: "10vw",
    },
    position: "relative",
    bottom: {
      base: "10em",
      md: "20vh",
      xl: "-30vh",
    },
  },
  aboutText: commonStyle.aboutText,

  imageWrapper: {
    zIndex: "2",
    position: "relative",
    top: {
      base: "-15em",
      md: "-20vh",
      xl: "0",
    },

    width: {
      base: "80vw",
      md: "50vw",
      xl: "37em",
    },
    height: {
      base: "80vw",
      md: "50vw",
      xl: "37em",
    },
  },
} as {
  [key: string]: StyleProps;
};
