import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { magnetic } from "../../../lib/cuberto/magnetic";
import { styles } from "./styles";

export default function Header() {
  useEffect(() => {
    magnetic.init({
      x: 0.5,
      y: 0.5,
      s: 0.2,
    });
  }, []);
  return (
    <VStack bg="antiquewhite">
      <HStack
        minH={"64px"}
        bg="white"
        px="50px"
        top="0"
        // position={"fixed"}
        className="curosor-container"
        justifyContent="space-between"
        w="full"
        alignItems={"start"}
      >
        <Box h="30" className="magnetic pointer">
          <Box position={"relative"} w="114px" h="17px" top="6">
            <Image src="/logo.png" objectFit="cover" layout="fill" alt="" />
          </Box>
        </Box>

        <HStack gap="2">
          {["benefits", "security", "download"].map((item, i) => (
            <MenuItem key={i} item={item} />
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
}

function MenuItem({ item }: { item: string }) {
  const [hovered, sethovered] = useState(false);
  return (
    <Button
      {...styles.menuItem}
      className="magnetic scale"
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
      color={hovered ? "white" : "black"}
      transition="color 0.2s ease-in-out"
    >
      {item}
    </Button>
  );
}
