import {
  Box,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { animated } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { CustomDrawer } from "../../../lib/atoms/Drawer/CustomDrawer";
import { useScrollTo } from "../../../lib/hooks/useScrollTo";
import { StarsAnimation } from "../WelcomeSection/StarsAnimation";
import { IWorkData, worksData } from "./data";
import { piStyle, styles } from "./styles";

function LiveToWork() {
  const { scrollTo, lg } = useScrollTo();
  return (
    <VStack {...styles.coolTextWrapper}>
      <animated.div
        style={{
          x: scrollTo({
            xl: [1100, 0],
          }),
        }}
      >
        <CoolText text="Live" />
      </animated.div>
      <animated.div
        style={{
          x: scrollTo({
            xl: [-1300, 500],
          }),
        }}
      >
        <CoolText text="To" />
      </animated.div>
      <animated.div
        style={{
          x: scrollTo({
            xl: [1400, -200],
          }),
        }}
      >
        <CoolText text="Work" />
      </animated.div>
    </VStack>
  );
}

export default function WorksSection() {
  const { scrollTo, lg } = useScrollTo();

  return (
    <VStack {...styles.sectionWrapper}>
      <StarsAnimation />
      {!lg && (
        <VStack {...styles.sectionTitleWrapper}>
          <Text {...styles.sectionTitle}>Works</Text>
          <Box {...piStyle.underline} />
        </VStack>
      )}

      <LiveToWork />
      {/* ROW 1 */}

      <HStack position={"relative"} w="full" justifyContent={"center"}>
        <animated.div
          style={{
            x: scrollTo({
              xl: [-200, 200],
            }),
            width: "100%",
          }}
        >
          <HStack {...styles.rowWrapper}>
            <ProjectItem item={worksData[0]} />
            <ProjectItem item={worksData[1]} />
          </HStack>
        </animated.div>
      </HStack>

      {/*  ROW 2 */}

      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            x: scrollTo({
              xl: [300, -300],
            }),
            width: "100%",
          }}
        >
          <HStack {...styles.rowWrapper}>
            <ProjectItem item={worksData[2]} />
            <ProjectItem item={worksData[3]} />
          </HStack>
        </animated.div>
      </HStack>

      {/* ROW 3 */}

      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            x: scrollTo({
              xl: [-100, 300],
            }),
            width: "100%",
          }}
        >
          <HStack {...styles.rowWrapper}>
            <ProjectItem item={worksData[4]} />
          </HStack>
        </animated.div>
      </HStack>
    </VStack>
  );
}

function ProjectItem({ item }: { item: Partial<IWorkData> }) {
  const [hover, sethover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CustomDrawer
        isOpen={isOpen}
        onClose={onClose}
        body={<SingleItemModal item={item} />}
      />
      <VStack
        onClick={onOpen}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        {...piStyle.itemWrapper}
      >
        <Box {...piStyle.titleWrapper(hover)}>
          <Text {...piStyle.titleIdle}>{item.title}</Text>
          <Box {...piStyle.underline} />
        </Box>
        <Stack {...piStyle.imageWrapper(hover)}>
          <Box {...piStyle.imageOverLay(hover)} />

          <Image
            src={item.imageURL ? `/images/works/${item.imageURL}` : ""}
            layout="fill"
            alt="moon"
            objectFit="cover"
            objectPosition="center"
            lazyBoundary="1000px"
          />
        </Stack>
      </VStack>
    </>
  );
}

function SingleItemModal({ item }: { item: Partial<IWorkData> }) {
  return (
    <VStack
      w="full"
      justifyContent={"start"}
      alignItems={"start"}
      gap="4"
      pt={[16]}
    >
      {/* IMAGE */}
      <Box position="relative" height="300px" w="full">
        <Image
          style={{ borderRadius: "10px" }}
          src={item.imageURL ? `/images/works/${item.imageURL}` : ""}
          layout="fill"
          alt="moon"
          objectFit="cover"
        />
      </Box>
      <HStack
        pt="4"
        flexWrap={"wrap"}
        gap="4"
        justifyContent={"start"}
        flexDir={"row-reverse"}
      >
        {item.skills!.map((text, i) => (
          <Tag key={i} variant="outline" size="lg" color="gold">
            {text}
          </Tag>
        ))}
      </HStack>
      <Link target="_blank" href={item.liveUrl} _focus={{ outline: "none" }}>
        <>
          <HStack
            pt="4"
            cursor="pointer"
            _hover={{ color: "gold", transform: "scale(1.2)" }}
            transition={"all 0.3s ease-in"}
          >
            <Icon
              as={AiOutlineLink}
              color={"white"}
              fontSize={"20px"}
              cursor="pointer"
            />
            <Text color="white" fontSize={"20px"} display="inline">
              Live demo
            </Text>
          </HStack>
        </>
      </Link>

      {/* TITLE */}
      <Text color="Gold" fontSize={"24px"} textTransform={"capitalize"}>
        {item.title}
      </Text>
      <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
      <Text color="white" fontSize={"16px"}>
        {item.overview}
      </Text>
      {/* RESULTS */}
      {item.results!.length > 0 && (
        <>
          <Text color="white" fontSize={"24px"}>
            Results
          </Text>
          <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
          <VStack alignItems={"start"}>
            {item.results?.map((result, i) => (
              <Text color="white" fontSize={"16px"} key={i}>
                ✅ {result}
              </Text>
            ))}
          </VStack>
        </>
      )}
      {/* Challenges */}
      {item.challenges!.length > 0 && (
        <>
          <Text color="white" fontSize={"24px"}>
            Challenges
          </Text>
          <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
          <VStack alignItems={"start"}>
            {item.challenges?.map((result, i) => (
              <Text color="white" fontSize={"16px"} key={i}>
                🟥 {result}
              </Text>
            ))}
          </VStack>
        </>
      )}
      {/* RESULTS */}
      <Text color="white" fontSize={"24px"}>
        Solutions
      </Text>
      <Box bg="#FFD12D" h="3px" border={"none"} w="100px" mb="10px" />
      <VStack alignItems={"start"}>
        {item.solution?.map((result, i) => (
          <Text color="white" fontSize={"16px"} key={i}>
            🟩 {result}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
