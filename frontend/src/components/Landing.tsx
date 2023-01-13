import { VStack, Image, Text } from "@chakra-ui/react";
import { PageSection } from "./Shared";

const BackgroundText = () => {
  return (
    <Text
      fontSize={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
      m="0"
      bgGradient="linear(to-tl, #832cdd, #ce24ad)"
      bgClip="text"
    >
      Hey there!
    </Text>
  );
};

export const LandingBlock = () => {
  return (
    <PageSection>
      <VStack m="auto" spacing={0}>
        <Image
          src="./Harrison_Cutrone_Prop.jpg"
          boxSize={{ base: 150, sm: 200, md: 250, lg: 275 }}
          borderRadius="full"
        />
        <BackgroundText />
        <Text
          fontWeight="bold"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}
        >
          I'm Harrison Cutrone.
        </Text>
        <Text px={8}>
          I'm a Software Engineering Apprentice at iFixit and a CS student at
          Cal Poly.
        </Text>
      </VStack>
      <Text pb={2} mx="auto">
        Scroll down to see more...
      </Text>
    </PageSection>
  );
};
