import { Text, Flex, FlexProps, Box, HStack, VStack, Spacer, Link, Image, SimpleGrid, Icon, IconProps, Divider, Code } from '@chakra-ui/react';
import React from 'react';
import { GradCap, Github, Linkedin, About, Experience } from './Icons'
import Axios from 'axios';
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

type PageSectionProps = {
  children: React.ReactNode | React.ReactNode[] | undefined;
};

const PageSection = ({ children, ...flexProps }: PageSectionProps & FlexProps) => {
  return (
    <Flex
      direction="column"
      h="calc(100vh - 32px)"
      lineHeight="1.3"
      bgColor="blackAlpha.800"
      borderRadius={10}
      align="center"
      {...flexProps}
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

type GridBlockProps = {
  header: string;
  icon: React.FC;
  children: React.ReactNode | React.ReactNode[];
};

const GridBlock = ({ children, header, icon }: GridBlockProps) => {
  return (
    <Flex
      direction="column"
      lineHeight="1.3"
      bgColor="blackAlpha.800"
      borderRadius={10}
      px={4}
      py={4}
    >
      <HStack mx="auto" mb={4}>
        <Icon as={icon} boxSize={10} mr={4}/>
        <Text>{header}</Text>
      </HStack>
      <Divider mb={4}/>
      {children}
    </Flex>
  );
};

const SecondBlock = () => {
  return (
    <SimpleGrid mt={4} minChildWidth="300px" spacing={4}>
      <GridBlock header="About Me" icon={About}>
        <Text fontSize="2xl">Hi</Text>
      </GridBlock>
      <GridBlock header="Experience" icon={Experience}>
        <Text fontSize="2xl">Software Engineering Apprentice - iFixit</Text>
      </GridBlock>
      <GridBlock header="Education" icon={GradCap}>
        <Text fontSize="2xl">California Polytechnic State University - San Luis Obispo</Text>
        <Text fontSize="2xl">August 2020 - December 2023</Text>
        <Text fontSize="2xl">GPA: 3.86</Text>
        <Text fontSize="2xl">Dean's List: 6 Quarters</Text>
        <Text fontSize="2xl">President's List: 2020-2022</Text>
      </GridBlock>
    </SimpleGrid>
  );
};

const GitHubLink = ({ gitlink, schoolProject }: { gitlink: string, schoolProject: boolean }) => {
  if (schoolProject) {
    return null;
  }
  return (
    <Link color="white" fontSize="lg" href={gitlink}>Check it out on GitHub!</Link>
  );
};

type ProjectProps = {
  name: string;
  content: string;
  gitlink: string;
  schoolProject: boolean;
};

const Project = ({ name, content, gitlink, schoolProject }: ProjectProps) => {
  return (
    <Box borderWidth="medium" borderColor="pink" borderRadius={10} minW="300px" h="300px" p={2}>
      <VStack h="100%">
        <Text>{name}</Text>
        <Text fontSize="xl">{content}</Text>
        <Spacer />
        <GitHubLink gitlink={gitlink} schoolProject={schoolProject} />
      </VStack>
    </Box>
  );
};

const Subtitle = ({ title }: { title: string }) => {
  if (title === 'School Projects') {
    return <Text fontSize="lg">These projects were created for a class, so the code is private. I'd be happy to send you the code directly if you email me at <Code>harrisoncutrone@gmail.com</Code></Text>;
  }
  return null;
};

const ProjectBlock = ({ title, projects }: { title: string; projects: ProjectProps[] }) => {
  const projectComponents = projects.map(({ name, content, gitlink, schoolProject }) => {
    return <Project name={name} content={content} gitlink={gitlink} schoolProject={schoolProject} />
  });
  return (
    <PageSection mt={4} p={4} h="auto">
      <Text>{title}</Text>
      <HStack p={4} spacing={10} m="auto" w="100%" overflow="scroll">
        {projectComponents}
      </HStack>
      <Subtitle title={title} />
    </PageSection>
  );
};

export const Website = () => {
  const [personalProjects, setPersonalProjects] = React.useState<ProjectProps[]>([]);
  const [schoolProjects, setSchoolProjects] = React.useState<ProjectProps[]>([]);

  React.useEffect(() => {
    Axios.get('/projects/personal').then((res) => {setPersonalProjects(res.data.projects)});
    Axios.get('/projects/school').then((res) => {setSchoolProjects(res.data.projects)});
  }, []);

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
      <SecondBlock />
      <ProjectBlock title={"Personal Projects"} projects={personalProjects}/>
      <ProjectBlock title={"School Projects"} projects={schoolProjects}/>
    </Box>
  );
}
