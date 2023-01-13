import { VStack, Spacer, Link, Icon, IconProps } from '@chakra-ui/react';
import { Github, Linkedin } from '../Icons';

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

export const Header = () => {
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