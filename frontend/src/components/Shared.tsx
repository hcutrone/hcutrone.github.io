import { Flex, FlexProps } from "@chakra-ui/react";

type PageSectionProps = {
  children: React.ReactNode | React.ReactNode[] | undefined;
};

export const PageSection = ({
  children,
  ...flexProps
}: PageSectionProps & FlexProps) => {
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
