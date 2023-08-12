import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import { animated, useScroll } from "@react-spring/web";
import Image from "next/image";
import { CoolText } from "../../../lib/atoms/CoolText/CoolText";
import { StarsAnimation } from "../WelcomeSection/StarsAnimation";
import { ITestimonial, testimonialData } from "./data";
import { styles } from "./styles";

export default function TestimonialSection() {
  const { scrollYProgress } = useScroll();

  return (
    <VStack {...styles.sectionWrapper}>
      <StarsAnimation />
      <animated.div
        style={{
          translateY: scrollYProgress.to([0, 1], [-200, 600]),
          translateX: scrollYProgress.to([0, 1], [-500, 600]),
          position: "absolute",
          top: "0",
          zIndex: 0,
        }}
      >
        <CoolText
          bg={"linear-gradient(180deg, #2C3344 0%, rgba(44, 51, 68, 0) 100%)"}
          text="Testimonial"
        />
      </animated.div>

      <VStack {...styles.tRowWrapper}>
        <Grid {...styles.testimonialListWrapper} left="-10vw">
          <TestimonialItem data={testimonialData[0]} />
          <TestimonialItem data={testimonialData[1]} />
        </Grid>
        <Grid {...styles.testimonialListWrapper} justifyItems={"end"}>
          <TestimonialItem data={testimonialData[2]} />
          <TestimonialItem data={testimonialData[3]} />
        </Grid>
        <Grid {...styles.testimonialListWrapper} right="-10vw">
          <TestimonialItem data={testimonialData[4]} />
          <TestimonialItem data={testimonialData[5]} />
        </Grid>
      </VStack>
    </VStack>
  );
}

function TestimonialItem({ data }: { data: Partial<ITestimonial> }) {
  return (
    <Grid {...styles.testimonialItemWrap}>
      <Box
        width={[50, "82px"]}
        height={[50, "82px"]}
        position="relative"
        top="1"
      >
        <Image
          src={`/images/testimonial/${data.image}`}
          layout="fill"
          alt="moon"
        />
      </Box>
      <VStack {...styles.textWrap}>
        <Text
          {...styles.testimonialText}
        >
          {data.text}
        </Text>
        <Text
          {...{
            fontSize: "14px",
            fontStyle: "italic",
            lineHeight: "29px",
            color: "#FFD12D",
          }}
        >
          {data.name}
        </Text>
        <Text
          {...{
            fontSize: "12px",
            color: "#BEBEBE",
          }}
        >
          {data.company}
        </Text>
      </VStack>
    </Grid>
  );
}
