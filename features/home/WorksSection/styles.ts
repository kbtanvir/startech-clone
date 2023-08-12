import { StyleProps } from "@chakra-ui/react";
import { commonStyle } from "../../../lib/theme/consts/commonStyle.const";

export const styles = {
  sectionWrapper: {
    // justifyContent: "space-between",
    position: "relative",
    // minH: ["240vh", "1200px"],
    zIndex: 2,
    pt: "200px",
    w: "full",
    gap: {
      base: 6,
      xl: "100px",
    },
    bg: "linear-gradient(180deg, #212530 0%, #000000 27.6%, #13161C 78.12%, #212530 100%);",
    px: {
      base: 6,
    },
  },

  sectionTitleWrapper: {
    w: "full",
    gap: 4,
    alignItems: "start",
  },
  sectionTitle: commonStyle.sectionTitle,
  coolTextWrapper: {
    position: "absolute",
    top: "10em",
    w: "full",
    display: {
      base: "none",
      xl: "flex",
    },
  },
  rowWrapper: {
    gap: {
      base: 6,
      xl: "0em",
    },
    display: {
      base: "grid",
    },
    gridTemplateColumns: {
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
    },
    placeItems: {
      base: "center",
    },

    zIndex: 1,
  },
} as {
  [key: string]: StyleProps;
};

export const piStyle = {
  itemWrapper: {
    cursor: "pointer",
    position: "relative",
    justifyContent: "center",
    alignItems: "start",
    w: {
      base: "full",
      xl: "487px",
    },
  } as StyleProps,
  titleWrapper: (hover: boolean) =>
    ({
      transform: {
        xl: hover
          ? "translateX(0px)"
          : ["translateX(0px)", "translateX(-50px)"],
      },
      transition: "all 0.7s ease-in-out",
      zIndex: 2,
      background: {
        base: hover ? "rgba(0, 0, 0, 0.7)" : "transparent",
      },
      backdropFilter: {
        base: "blur(1px)",
        xl: hover ? "blur(10px)" : "blur(0px)",
      },
      position: "absolute",
      maxW: "300px",
      w: "full",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      paddingBottom: "30px",
      paddingRight: "30px",
    } as StyleProps),
  underline: {
    bg: "#ffd12d",
    h: "3px",
    border: "none",
    position: "relative",
    zIndex: 2,
    w: "100px",
    mb: "10px",
  } as StyleProps,
  titleIdle: {
    color: "white",
    fontSize: "24px",
    position: "relative",
    zIndex: 1,
    fontWeight: "700",
    textTransform: "uppercase",
    pb: "3",
  } as StyleProps,
  imageWrapper: (hover: boolean) =>
    ({
      width: {
        base: "full",
        xl: "487px",
      },
      height: "276px",
      position: ["relative"],
      zIndex: 0,
      borderRadius: "10px",
      overflow: "hidden",
      transform: {
        xl: hover
          ? "translateX(-0px)"
          : ["translateX(0px)", "translateX(40px)"],
      },
      transition: "all 0.9s ease-in-out",
    } as StyleProps),
  imageOverLay: (hover: boolean) =>
    ({
      width: "101%",
      height: "101%",
      position: "absolute",
      zIndex: 1,
      background: `linear-gradient(180deg, rgb(9 8 20 / 86%) 0%, rgb(0 0 0 / 24%) 100%)`,
      opacity: hover ? 0 : 1,
      left: ["0", "-1"],
      top: "-1",
      transform: hover ? "translateY(-600px)" : "translateY(0)",
      transition: "transform 0.3s ease-in-out, opacity 0.6s ease-in-out",
    } as StyleProps),
};
