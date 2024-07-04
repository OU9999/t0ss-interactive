"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const main = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box: any) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <Box w={"100dvw"} h={"200dvh"} ref={main}>
      <Box h={"100dvh"}>this is test</Box>
      <Box bgColor={"red"} w={"100px"} h={"100px"} className="box">
        b
      </Box>
      <Box bgColor={"red"} w={"100px"} h={"100px"} className="box">
        o
      </Box>
      <Box bgColor={"red"} w={"100px"} h={"100px"} className="box">
        x
      </Box>
    </Box>
  );
}
