import { animated, useInView } from "@react-spring/web";
import { CSSProperties } from "react";

export const OpacityTransition = ({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?:
    | {
        from: CSSProperties;
        to: CSSProperties;
      }
    | {};
}) => {
  const [ref, springs] = useInView(() => style, {
    rootMargin: "-45% 0px -45% 0px",
  });

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};
