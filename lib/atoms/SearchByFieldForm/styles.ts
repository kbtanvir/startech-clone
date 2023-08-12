import { StyleProps } from "@chakra-ui/react";

export const styles = {
  wrapper: {
    placeItems: "start",
    placeContent: "space-between",
    w: "full",
    gridTemplateColumns: "1fr 130px",
  } as StyleProps,

  searchIcon: {
    left: "25px",
    p: "0",
    width: "15px",
  } as StyleProps,
  searchField: {
    bg: "white",
    color: "gray.600",
    fontSize: "14px",
    // border: "1px solid",
    borderColor: "transparent",
    borderRadius: "10px 0px 0px 10px",
    fontWeight: "400",
    pl: "64px",
    pr: "20px !important",
    _placeholder: {
      color: "gray.500",
    },
  } as StyleProps,
};
