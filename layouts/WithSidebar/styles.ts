import { StyleProps } from "@chakra-ui/react";

export const commonStyles = {
  gridGap: "5",
};

export const styles = {
  withSidebarGrid: {
    minHeight: "100vh",
    placeItems: "start",
    placeContent: "space-between",
    w: "full",
    gridColumnGap: commonStyles.gridGap,
    gridTemplateColumns: "220px 1fr",
  } as StyleProps,
};
