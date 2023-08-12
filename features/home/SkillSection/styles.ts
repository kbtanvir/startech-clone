import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  sectionWrapper: {
    justifyContent: "space-between",
    position: "relative",
    minH: "1000px",
    py: {
      base: "100px",
      xl: "200px",
    },
    w: "full",
    bg: "#212530",
    px: {
      base: 6,
      md: 10,
      xl: 0,
    },
  },
  sectionTitleWrapper: {
    w: "full",
    gap: 4,
    alignItems: "start",
    pt: "100px",
  },
  sectionTitle: commonStyle.sectionTitle,
  skillListWrapper: {
    right: {
      base: "0",
      xl: "10vw",
    },

    w: "full",
    position: {
      base: "relative",
      xl: "absolute",
    },
    top: "40px",
    gap: {
      base: 2,
      sm: 10,
      xl: "100px",
    },
    rowGap: {
      base: 6,
    },

    display: {
      base: "grid",
      xl: "flex",
    },
    gridTemplateColumns: {
      base: "repeat(2, 1fr)",
      sm: "repeat(3, 1fr)",
      lg: "minmax(0, 1fr)",
    },
    placeItems: {
      base: "start",
      xl: "center",
    },
    justifyContent: "end",
  },
  skillItem: {
    color: "gray.500",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    _hover: {
      color: "gold",
    },
    fontSize: {
      base: "18px",
      md: "20px",
    },
    fontWeight: "400",
  },
  skillTitle: {
    color: {
      base: "gold",
      xl: "white",
    },
    fontSize: { base: "20px", md: "24px" },
    position: "relative",
    zIndex: 1,
    fontWeight: "700",
    textTransform: {
      base: "capitalize",
      md: "uppercase",
    },
    pb: {
      lg: 4,
    },
  },
} as {
  [key: string]: StyleProps;
};
