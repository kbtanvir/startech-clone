import { Box, HStack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { piStyle } from "../WorksSection/styles";
import { styles } from "./styles";

export default function SkillSection() {
  const { scrollYProgress } = useScroll();
  const [lg] = useMediaQuery("(min-width: 1024px)");
  return (
    <VStack {...styles.sectionWrapper}>
      {!lg && (
        <VStack {...styles.sectionTitleWrapper}>
          <Text {...styles.sectionTitle}>Skills</Text>
          <Box {...piStyle.underline} />
        </VStack>
      )}
      <HStack position={"relative"} w="full">
        <animated.div
          style={{
            left: scrollYProgress.to([0, 1], [-600, 200]),
            top: 200,
            position: "absolute",
          }}
        >
          <CoolText
            text="Skills"
            bg="linear-gradient(180deg, #0d111c 0%, rgba(44, 51, 68, 0) 100%)"
          />
        </animated.div>

        <HStack {...styles.skillListWrapper}>
          <SkillList
            title="Frontend"
            list={[
              "HTML",
              "CSS",
              "TypeScript",
              "SASS/SCSS",
              "Tailwind CSS",
              "Flutter",
              "React.js",
              "Next.js",
              "Jest",
              "React Query",
              "Chakra UI & Material UI",
              "Redux & Redux Toolkit",
              "Vue.js",
            ]}
          />
          <SkillList
            title="Backend"
            list={[
              "Node.js",
              "Express.js",
              "Nest.js",
              "MongoDB",
              "MySQL",
              "Firebase",
              "Rest API",
              "Sendgrid / Sendinblue",
              "JWT",
            ]}
          />
          <SkillList
            title="UX/UI"
            list={[
              "Figma",
              "Illustrator",
              "Photoshop",
              "Affinity",
              "Manga Studio",
            ]}
          />
          <SkillList
            title="Motion"
            list={["Framer Motion", "Three.js", "React Spring"]}
          />
          <SkillList title="CMS" list={["Wordpress", "Webflow"]} />
        </HStack>
      </HStack>
    </VStack>
  );
}

function SkillList({ title, list }: { title: any; list: any[] }) {
  const [lg] = useMediaQuery("(min-width: 1024px)");
  return (
    <VStack position={"relative"} alignItems={"start"}>
      <Box position="relative" pb="4">
        <Text {...styles.skillTitle}>{title}</Text>
        {lg && <Box {...piStyle.underline} />}
      </Box>
      <VStack
        position="relative"
        zIndex={1}
        spacing={0}
        w="full"
        alignItems="start"
      >
        {list.map(item => (
          <Text key={item} {...styles.skillItem}>
            {item}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
}
