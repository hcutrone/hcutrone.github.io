import { Box } from "@chakra-ui/react";
import { getPersonalProjects, getSchoolProjects } from "./projects";
import { Header, LandingBlock, AboutMe, ProjectBlock } from "./components";

export const Website = () => {
  const personalProjects = getPersonalProjects();
  const schoolProjects = getSchoolProjects();

  return (
    <Box
      bgGradient="linear(to-tl, #832cdd, #ce24ad)"
      w="100vw"
      m="auto"
      p={4}
      textAlign="center"
      alignItems="ceGnter"
    >
      <Header />
      <LandingBlock />
      <AboutMe />
      <ProjectBlock title={"Personal Projects"} projects={personalProjects} />
      <ProjectBlock title={"School Projects"} projects={schoolProjects} />
    </Box>
  );
};
