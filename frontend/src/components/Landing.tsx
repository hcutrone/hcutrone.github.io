import { VStack, Image, Text } from "@chakra-ui/react";
import { PageSection } from "./Shared";

const BackgroundText = () => {
   return (
     <Text fontSize="150px" m="0" bgGradient='linear(to-tl, #832cdd, #ce24ad)' bgClip="text">Hey there!</Text>
   )
 };

export const LandingBlock =() => {
   return (
     <PageSection>
       <VStack m="auto" spacing={0}>
         <Image src="./Harrison_Cutrone_Prop.jpg" boxSize={300} borderRadius="full" />
         <BackgroundText />
         <Text fontWeight="bold">I'm Harrison Cutrone.</Text>
         <Text px={8} fontSize="4xl">
           I'm a Software Engineering Apprentice at iFixit and a CS student at Cal Poly.
         </Text>
       </VStack>
       <Text fontSize="3xl" pb={2} mx="auto">
         Scroll down to see more...
       </Text>
     </PageSection>
   );
 };