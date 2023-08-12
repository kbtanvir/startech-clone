import { Grid } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../lib/atoms/Sidebar/Sidebar";
import { styles } from "./styles";

function WithSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Grid {...styles.withSidebarGrid}>
      <Sidebar />
      {children}
    </Grid>
  );
}

export default WithSidebar;
