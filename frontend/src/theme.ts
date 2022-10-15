import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
    fontSize: "4xl",
  }
};

export const theme = extendTheme({
  styles: {
    global: ({
      body: {
        bg: "blackAlpha.800",
      }
    })
  },
  components: {
    Text,
  },
  fonts: {
    body: `'Dosis', sans-serif`,
  }
})