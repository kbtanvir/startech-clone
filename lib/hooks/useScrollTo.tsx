import { useMediaQuery } from "@chakra-ui/react";
import { useScroll } from "@react-spring/web";

export function useScrollTo() {
  const { scrollYProgress } = useScroll();
  const [isLargerThan1300] = useMediaQuery("(min-width: 1299px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  function scrollTo({
    base = [0, 0],
    md = [0, 0],
    lg = [0, 0],
    xl = [0, 0],
  }: {
    base?: any[];
    md?: any[];
    lg?: any[];
    xl?: any[];
  }) {
    if (isLargerThan1300) {
      return scrollYProgress.to([0, 1], xl);
    }
    if (isLargerThan1000) {
      return scrollYProgress.to([0, 1], lg);
    }
    if (isLargerThan700) {
      return scrollYProgress.to([0, 1], md);
    }
    return scrollYProgress.to([0, 1], base);
  }

  return {
    scrollTo,
    base: isLargerThan500,
    md: isLargerThan700,
    lg: isLargerThan1000,
    xl: isLargerThan1300,
  };
}
