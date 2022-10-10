import { Text, Flex, FlexProps, Box, HStack, VStack, Spacer, Link, Image, SimpleGrid, Icon, IconProps, Divider } from '@chakra-ui/react';
import React from 'react';
import { GradCap, Github, Linkedin, About, Experience } from './Icons'

const BackgroundText = () => {
  return (
    <Text fontSize="150px" m="0" bgGradient='linear(to-tl, #832cdd, #ce24ad)' bgClip="text">Hey there!</Text>
  )
};

type LogoLinkProps = {
  url: string;
  icon: React.FC;
}

const LogoLink = ({ url, icon, ...iconProps }: LogoLinkProps & IconProps) => {
  return (
    <Link href={url}>
      <Icon as={icon} {...iconProps}/>
    </Link>
  )
};

const PageSection = ({ children, ...props }: { children: React.ReactNode | React.ReactNode[] & FlexProps }) => {
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
    <VStack
      w="32px"
      h="100vh"
      position="fixed"
      mt={-4}
      spacing={10}
    >
      <Spacer />
      <LogoLink url="https://www.github.com/hcutrone" icon={Github} boxSize={6} />
      <LogoLink url="https://www.linkedin.com/in/hcutrone" icon={Linkedin} boxSize={6} />
      <Spacer />
    </VStack>
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
