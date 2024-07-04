"use client";

import theme from "@/style/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export function ChakraProviders({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
