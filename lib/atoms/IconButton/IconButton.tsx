import { Box } from "@chakra-ui/react";
import React from "react";

export default function IconButton({
  children,
  bg,
  p,
}: {
  children: React.ReactNode;
  bg?: string;
  p?: string;
}) {
  return (
    <Box
      as="button"
      border="1px solid"
      borderColor={"gray.300"}
      borderRadius="full"
      p={p ?? "2"}
      transition="all 0.3s"
      bg={bg ?? "blue.100"}
      _hover={{
        bg: bg ?? "blue.100",
      }}
    >
      {children}
    </Box>
  );
}
