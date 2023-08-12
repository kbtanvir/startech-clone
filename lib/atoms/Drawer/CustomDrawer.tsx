import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";

export function CustomDrawer(props: {
  isOpen: boolean;
  onClose: () => void;
  body?: JSX.Element;
  maxW?: string;
}) {
  return (
    <Drawer onClose={props.onClose} isOpen={props.isOpen} placement="left">
      <DrawerOverlay />
      <DrawerContent
        p={["30px", "60px"]}
        maxW={props.maxW || "900px"}
        bg="black"
        overflowY="scroll"
        minH="100vh"
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          color="white"
          bg="transparent"
          border={"2px solid white"}
          top="24px"
          right="24px"
          w="40px"
          h="40px"
          position={"absolute"}
          borderRadius={"full"}
          cursor="pointer"
          onClick={props.onClose}
          transition="all 0.3s ease-in"
          _hover={{ opacity: 0.8, borderColor: "gold" }}
        >
          <Box h="2px" bg="white" w="20px" />
        </Stack>
        {props.body}
      </DrawerContent>
    </Drawer>
  );
}
