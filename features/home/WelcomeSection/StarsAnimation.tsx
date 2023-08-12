import { Box, Stack } from "@chakra-ui/react";
import { animated, useScroll, useSpring } from "@react-spring/web";
import StarsSVG from "../../../lib/atoms/SVG/WelcomeSVGs";
import { ShootingStar } from "./ShootingStar";

export function StarsAnimation({
  rotation = false,
  falling = false,
  reverse = false,
}: {
  rotation?: boolean;
  falling?: boolean;
  reverse?: boolean;
}) {
  const stars = Array.from({ length: 10 }, (_, i) => i);
  const { scrollYProgress } = useScroll();
  // inifinte rotation
  const yellowRotation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 40000 },
  });
  const whiteStarRotation = useSpring({
    from: { rotate: 270 },
    to: { rotate: 360 + 270 },
    loop: true,
    config: { duration: 45000 },
  });
  const blueRotation = useSpring({
    from: { rotate: 180 },
    to: { rotate: 360 + 180 },
    loop: true,
    config: { duration: 50000 },
  });

  return (
    <Box
      position={"absolute"}
      top="0"
      left="0"
      zIndex={0}
      w="full"
      overflow={"hidden"}
      minH="100vh"
    >
      {stars.map((i, idx) => (
        <ShootingStar key={i} n={idx} />
      ))}
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 100]),
          rotate: whiteStarRotation.rotate.to(r => r),
        }}
      >
        <Stack position={"absolute"}>
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} right="0">
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} top="-400">
          <StarsSVG />
        </Stack>
        <Stack position={"absolute"} right="0" top="0">
          <StarsSVG />
        </Stack>
      </animated.div>
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 400]),
          rotate: yellowRotation.rotate.to(r => r),
        }}
      >
        <Stack left="150" top="350" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={3} />
        </Stack>
        <Stack right="130" top="250" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={3} />
        </Stack>
        <Stack left="250" top="-550" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={3} />
        </Stack>
        <Stack right="230" top="350" position={"absolute"}>
          <StarsSVG color="#FFD12D" r={3} />
        </Stack>
      </animated.div>
      <animated.div
        style={{
          // translateY: scrollYProgress.to([0, 1], [0, 200]),
          rotate: blueRotation.rotate.to(r => r),
        }}
      >
        <Stack left="-330" top="150" position={"absolute"}>
          <StarsSVG color="#7EFFEA" r={1.2} />
        </Stack>
        <Stack right="330" top="150" position={"absolute"}>
          <StarsSVG color="#7EFFEA" r={1.2} />
        </Stack>
      </animated.div>
    </Box>
  );
}
