"use client";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w={"100dvw"} h={"200dvh"}>
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
