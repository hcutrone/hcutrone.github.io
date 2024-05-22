import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
    fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" },
  },
};

const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
    fontSize: { base: "50px", sm: "60px", md: "80px", lg: "100px" },
  },
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "blackAlpha.800",
      },
    },
  },
  components: {
    Text,
    Heading,
  },
  fonts: {
    body: `'Dosis', sans-serif`,
    heading: `'Dosis', sans-serif`,
  },
});
