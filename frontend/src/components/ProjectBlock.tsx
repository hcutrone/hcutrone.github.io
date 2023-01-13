import { Box, Code, HStack, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import { PageSection } from './Shared';

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
 
 export const ProjectBlock = ({ title, projects }: { title: string; projects: ProjectProps[] }) => {
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