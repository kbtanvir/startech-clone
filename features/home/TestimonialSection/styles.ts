import { StyleProps } from "@chakra-ui/react";

export const styles = {
  sectionWrapper: {
    // justifyContent: "space-between",
    position: "relative",
    w: "full",
    minH: "1200px",
    py: {
      base: "100px",
      md: "140px",
    },
    bg: "linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);",
    px: {
      base: 6,
      md: 10,
      xl: 0,
    },
  },
  tRowWrapper: {
    gap: { base: 10, md: 20 },
    position: "relative",
    alignItems: "center",
    left: {
      base: "0",
      // xl: "-10vw",
    },
  },
  testimonialListWrapper: {
    position: {
      base: "static",
      xl: "relative",
    },
    zIndex: "1",
    gap: {
      base: 10,
      xl: "100px",
    },

    flexDir: {
      base: "column",
      xl: "row",
    },
    display: {
      base: "grid",
    },

    // horizontal end

    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(2, 1fr)",
    },
  },
  testimonialItemWrap: {
    w: "full",
    gap: {
      base: "6",
      xl: "32px",
    },

    gridTemplateColumns: {
      base: "1fr 4fr",
    },
  },
  textWrap: {
    alignItems: {
      base: "start",
    },
    maxW: {
      base: "full",
      xl: "321px",
    },
    w: "full",
  },
  testimonialText: {
    fontSize: { base: "14px", },
    color: "#FFFFFF",
  },
} as {
  [key: string]: StyleProps;
};
