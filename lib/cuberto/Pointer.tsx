import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect, useRef } from "react";
import { globalStore } from "../utils/global.store";
import { styles } from "./styles";

export default function Pointer() {
  const cursorEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    if (!cursorEl.current) return console.log("nope");

    const c = new MouseFollower({
      // container: parentRef.current,
      el: cursorEl.current,
      speed: 0.9,
      stateDetection: {
        scale: ".scale",
        pointer: ".pointer",
      },
    });

    new MouseFollower({
      // before element
      el: cursorEl.current.cloneNode(true) as HTMLDivElement,
    });
    new MouseFollower({
      // before element
      el: cursorEl.current.cloneNode(true) as HTMLDivElement,
    });

    globalStore.setCursor(c);
    return () => {};
  }, []);
  return (
    <Box
      ref={cursorEl}
      {...styles.cursor}
      sx={styles.cursorSx}
      className="cursor"
    ></Box>
  );
}
