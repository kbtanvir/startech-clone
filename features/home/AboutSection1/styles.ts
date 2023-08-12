import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  grid: {
    position: "relative",
    minH: "1000px",
    w: "full",
    zIndex: "2",
    px: [6, "20"],
    pt: {
      base: "10vh",
      md: "20vh",
    },
    pb: {
      base: "10",
      lg: "40vh",
    },
    bg: "#212530",
  },
  textWrapper: {
    pt: {
      base: "4vh",
      md: 0,
    },
    position: "relative",
  },
  aboutText: commonStyle.aboutText,
  imageWrapper: {
    position: "relative",
    placeItems: "end",
    justifySelf: "end",
    bottom: {
      base: "-5em",
      lg: "-40vh",
    },
    right: {
      base: "-5vw",
      lg: "5vw",
      //   xl: 0,
    },
  },

  skyWrapper: {
    position: "relative",
    h: {
      base: "80vw",
      lg: "600px",
    },
    w: {
      base: "80vw",
      lg: "600px",
    },
    right: {
      base: "0em",
    },
    bottom: {
      base: "-0",
      lg: "10",
    },
  },
  mountainWrapper: {
    position: "absolute",
    height: {
      base: "calc(100vw * .264)",
      lg: "264px",
    },
    width: {
      base: "calc(100vw * .475)",
      lg: "475px",
    },

    bottom: {
      base: "2em",
    },
    right: {
      base: "40vw",
      lg: "6em",
    },
  },
  boyWrapper: {
    position: "absolute",
    height: {
      base: "calc(100vw * .663 * 1.2)",
      lg: "calc(100vw * .663 * 0.75 )",
      xl: "663px",
    },
    width: {
      base: "calc(100vw * .827 * 1.2)",
      lg: "calc(100vw * .827 * 0.75 )",
      xl: "827px",
    },

    right: {
      base: "-25vw",
      xl: "-20em",
    },
    bottom: {
      base: "-0",
      lg: "-0",
      xl: "-0",
    },
  },
} as {
  [key: string]: StyleProps;
};
