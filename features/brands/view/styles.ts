import { StyleProps } from "@chakra-ui/react";
import { commonStyles } from "../../../layouts/WithSidebar/styles";

export const styles = {
  wrapper: {
    minHeight: "100vh",
    placeItems: "start", // horizontal
    placeContent: "stretch", // vertical
    w: "full",
    gridColumnGap: commonStyles.gridGap,
    gridTemplateColumns: "1fr 460px",
  } as StyleProps,

  // COLUMN 1
  // ------------------------------------

  column1wrapper: {
    w: "full",
    h: "full",
    gap: commonStyles.gridGap,
    placeItems: "stretch",
    pt: "40px",
  } as StyleProps,

  c1r1: {
    w: "full",
    gap: commonStyles.gridGap,
    placeItems: "stretch",
    gridTemplateColumns: "400px 1fr",
  } as StyleProps,
  c1r3: {
    w: "full",
    gap: commonStyles.gridGap,
    placeItems: "stretch",
    gridTemplateColumns: "200px 200px 1fr",
  } as StyleProps,

  // COLUMN 2
  // ------------------------------------

  column2wrapper: { bg: "white", w: "full", h: "full" } as StyleProps,
};
