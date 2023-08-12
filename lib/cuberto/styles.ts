import { StyleProps } from "@chakra-ui/react";

export const styles = {
  cursor: {
    position: "fixed",
    top: 0,
    left: 0,
    // zIndex: 9999,
    bg: "#2128bd",
    h: "22px",
    w: "22px",
    pointerEvents: "none",
    borderRadius: "full",
    // opacity: 0.5,
    // backgroundBlendMode: "exclusion",
    transition:
      "height 0.5s ease-in-out, width 0.5s ease-in-out, top 0.5s ease-in-out, left 0.5s ease-in-out",
  },
  cursorSx: {
    "&.visible": {},
    "&.pointer": {
      w: "12px",
      h: "12px",
    },
    "&.scale": {
      w: "100px",
      top: "-40px",
      left: "-40px",
      h: "100px",
      // backgroundBlendMode: "overlay",
    } as StyleProps,
    "&:nth-child(2)": {
      content: '""',
      position: "absolute",
      border: "10px solid #2128bd",
      w: "288px",
      h: "288px",
      borderRadius: "full",
      top: "-144px",
      left: "-144px",
      transition: "all .6s ease-in-out",
    } as StyleProps,
  },
} as {
  [key: string]: StyleProps;
};
