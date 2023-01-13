import { Text, Flex, Box, HStack, VStack, Spacer, Link, SimpleGrid, Icon, Divider, Code, List, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { GradCap, Experience, Arrow_DownRight } from './Icons'
import { getPersonalProjects, getSchoolProjects } from './projects';
import { Header, LandingBlock } from './components';

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
      px={8}
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

const ListWithHeader = ({ header, children }: { header: string, children: any }) => {
  return (
    <>
      <Text fontSize="2xl">{header}</Text>
      <List ml={6} mt={2} spacing={2}>{children}</List>
    </>
  );
};

const ListItemWithIcon = ({ children }: any) => {
  return (
    <ListItem>
      <HStack>
        <ListIcon as={Arrow_DownRight} />
        <Text fontSize="xl">{children}</Text>
      </HStack>
    </ListItem>
  );
};

const SecondBlock = () => {
  return (
    <SimpleGrid mt={4} minChildWidth="300px" spacing={4} textAlign="left">
      <GridBlock header="Experience" icon={Experience}>
        <ListWithHeader header="Software Engineering Apprentice @ iFixit">
          <ListItemWithIcon>
            Developed in an Agile environment on full stack applications, using: JavaScript, TypeScript, React, SQL, PHP
          </ListItemWithIcon>
          <ListItemWithIcon>
            Improved usability and responsiveness of profile edit page by updating from PHP to TypeScript and React
          </ListItemWithIcon>
          <ListItemWithIcon>
            Gained valuable skills on professional software development through code review and peer-programming
          </ListItemWithIcon>
          <ListItemWithIcon>
            Worked full-time the summer of 2022 and part-time during the school year
          </ListItemWithIcon>
        </ListWithHeader>
      </GridBlock>
      <GridBlock header="Education" icon={GradCap}>
        <ListWithHeader header="Cal Poly - San Luis Obispo">
          <ListItemWithIcon>Bachelor of Science in Computer Science</ListItemWithIcon>
          <ListItemWithIcon>August 2020 - December 2023</ListItemWithIcon>
          <ListItemWithIcon>GPA: 3.86</ListItemWithIcon>
          <ListItemWithIcon>Dean's List: All 6 Quarters</ListItemWithIcon>
          <ListItemWithIcon>President's List: All 2 Years</ListItemWithIcon>
        </ListWithHeader>
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
        <Text fontSize="3xl">{name}</Text>
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
    return <Project key={name} name={name} content={content} gitlink={gitlink} schoolProject={schoolProject} />
  });
  return (
    <PageSection mt={4} py={4} px={8} h="auto">
      <Text>{title}</Text>
      <HStack py={4} spacing={10} m="auto" w="100%" overflow="scroll">
        {projectComponents}
      </HStack>
      <Subtitle title={title} />
    </PageSection>
  );
};

export const Website = () => {
  const personalProjects = getPersonalProjects();
  const schoolProjects = getSchoolProjects();

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
