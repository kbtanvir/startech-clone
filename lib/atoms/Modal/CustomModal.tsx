import { Modal, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react";

export function CustomModal(props: {
  isOpen: boolean;
  onClose: () => void;
  body?: JSX.Element;
  maxW?: string;
}) {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <ModalOverlay />
      <ModalContent
        p={["30px", "60px"]}
        maxW={props.maxW || "570px"}
        bg="black"
      >
        <Stack
          bg="gray.100"
          justifyContent={"center"}
          alignItems={"center"}
          color="gray.600"
          top="24px"
          right="24px"
          w="40px"
          h="40px"
          position={"absolute"}
          borderRadius={"full"}
          cursor="pointer"
          onClick={props.onClose}
          _hover={{ opacity: 0.8 }}
        >
          Close
        </Stack>
        {props.body}
      </ModalContent>
    </Modal>
  );
}
