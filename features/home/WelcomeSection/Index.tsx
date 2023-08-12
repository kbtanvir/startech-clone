import { Stack, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { TerrainSVG } from "../../../lib/atoms/SVG/WelcomeSVGs";
import { IntroTexts } from "./IntroTexts";
import { StarsAnimation } from "./StarsAnimation";

export default function WelcomeSection() {
  return (
    <VStack
      bg="linear-gradient(180deg, #0C0D0F 41.15%, #205B6D 100%);"
      w="full"
      minH="100vh"
      justifyContent={"center"}
      position="relative"
    >
      <StarsAnimation />
      <MoonAnimation />
      <MountainAnimation />
      <TerrainAnimation />
      <IntroTexts />
    </VStack>
  );
}

function MoonAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <animated.div
      style={{
        translateY: scrollYProgress.to([0, 1], [0, 600]),
        right: "0",
        position: "absolute",
      }}
    >
      <Stack
        position="relative"
        width={[70, "120px"]}
        height={[70, "120px"]}
        zIndex={1}
        bottom={{
          base: "-15vh",
          lg: "10vh",
        }}
        right={{
          base: "10vw",
        }}
      >
        <Image src="/welcome/moon.svg" layout="fill" alt="moon" />
      </Stack>
    </animated.div>
  );
}
function MountainAnimation() {
  const { scrollYProgress } = useScroll();
  return (
    <Stack
      right={{ base: 0, xl: 150 }}
      bottom={{
        base: 0,
        xl: "10px",
      }}
      position={"absolute"}
      zIndex="2"
    >
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [0, 200]),
        }}
      >
        <Image
          src="/welcome/mountain.svg"
          width={904}
          height={382}
          alt="Mountain"
        />
      </animated.div>
    </Stack>
  );
}
function TerrainAnimation() {
  return (
    <Stack
      position={"absolute"}
      zIndex="3"
      bottom={{ base: -2, xl: -40 }}
      w="full"
    >
      <TerrainSVG />
    </Stack>
  );
}
