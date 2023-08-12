import { StyleProps } from "@chakra-ui/react";

export const styles = {
  wrapper: {
    placeItems: "start",
    placeContent: "space-between",
    w: "full",
    gridTemplateColumns: "1fr 130px",
  } as StyleProps,
  dropdownButton: {
    bg: "white",
    mt: "0 !important",
    h: "48px",
    border: "0",
    borderRadius: "0 10px 10px 0px",
    borderColor: "gray.300",
    fontWeight: "600",
    textAlign: "left",
    px: "16px",
    minW: "127px",
    overflow: "hidden",
    _hover: {
      bg: "white",
    },
    _active: {
      bg: "gray.100",
    },
  } as StyleProps,
  dropdownButtonSX: {
    "& span": {
      fontSize: "14px !important",
    },
  },

  dropdownWrapper: {} as StyleProps,
  dropdownItem: {} as StyleProps,
};
