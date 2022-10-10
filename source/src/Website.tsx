import { Text, Flex, Box, HStack, VStack, Spacer, Link, Image } from '@chakra-ui/react';

const BackgroundText = () => {
  return (
    <Text fontSize="150px" m="0" bgGradient='linear(to-tl, #832cdd, #ce24ad)' bgClip="text">Hey there!</Text>
  )
};

const LogoLink = ({ url, icon }: { url: string, icon?: string }) => {
  return (
    <Link href={url}>
      <Image src={icon} alt="LogoLink" />
    </Link>
  )
};

const PageSection = ({ children, ...props }: any) => {
  return (
    <Flex
      direction="column"
      h="calc(100vh - 32px)"
      lineHeight="1.3"
      bgColor="blackAlpha.800"
      borderRadius={10}
      {...props}
    >
      {children}
    </Flex>
  );
};

const Header = () => {
  return (
    <HStack
      w="100vw"
      h="100px"
      position="fixed"
      backgroundColor="blackAlpha.500"
      mt={-4}
      ml={-4}
      p={8}
      spacing={10}
    >
      <Spacer />
      <LogoLink url="https://www.github.com/hcutrone" icon="./Github-Mark-Light-32px.png" />
      <LogoLink url="https://www.linkedin.com/in/hcutrone" icon="./linkedin.png" />
      <Spacer />
    </HStack>
  );
};

const LandingBlock =() => {
  return (
    <PageSection>
      <VStack m="auto" spacing={0}>
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

export const Website = () => {
  return (
    <Box
      bgGradient='linear(to-tl, #832cdd, #ce24ad)'
      w="100vw"
      m="auto"
      p={4}
      textAlign="center"
      alignItems="center"
    >
      <Header />
      <LandingBlock />
    </Box>
  );
}
