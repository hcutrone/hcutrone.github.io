import {
  SimpleGrid,
  HStack,
  Text,
  Icon,
  Divider,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { GradCap, Experience, Arrow_DownRight } from "../Icons";

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
        <Icon as={icon} boxSize={10} mr={4} />
        <Text>{header}</Text>
      </HStack>
      <Divider mb={4} />
      {children}
    </Flex>
  );
};

const ListWithHeader = ({
  header,
  children,
}: {
  header: string;
  children: any;
}) => {
  return (
    <>
      <Text fontSize="2xl">{header}</Text>
      <List ml={6} mt={2} spacing={2}>
        {children}
      </List>
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

export const AboutMe = () => {
  return (
    <SimpleGrid mt={4} minChildWidth="300px" spacing={4} textAlign="left">
      <GridBlock header="Experience" icon={Experience}>
        <ListWithHeader header="Software Engineering Apprentice @ iFixit">
          <ListItemWithIcon>
            Developed in an Agile environment on full stack applications, using:
            JavaScript, TypeScript, React, SQL, PHP
          </ListItemWithIcon>
          <ListItemWithIcon>
            Improved usability and responsiveness of profile edit page by
            updating from PHP to TypeScript and React
          </ListItemWithIcon>
          <ListItemWithIcon>
            Gained valuable skills on professional software development through
            code review and peer-programming
          </ListItemWithIcon>
          <ListItemWithIcon>
            Worked full-time the summer of 2022 and part-time during the school
            year
          </ListItemWithIcon>
        </ListWithHeader>
      </GridBlock>
      <GridBlock header="Education" icon={GradCap}>
        <ListWithHeader header="Cal Poly - San Luis Obispo">
          <ListItemWithIcon>
            Bachelor of Science in Computer Science
          </ListItemWithIcon>
          <ListItemWithIcon>August 2020 - December 2023</ListItemWithIcon>
          <ListItemWithIcon>GPA: 3.86</ListItemWithIcon>
          <ListItemWithIcon>Dean's List: All 7 Quarters</ListItemWithIcon>
          <ListItemWithIcon>President's List: All 2 Years</ListItemWithIcon>
        </ListWithHeader>
      </GridBlock>
    </SimpleGrid>
  );
};
