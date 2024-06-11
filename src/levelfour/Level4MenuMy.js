import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";
// import "./leveltwo.css"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Fade,
  useDisclosure,
  ScaleFade
} from '@chakra-ui/react';

export function Level4MenuMy() {
  const { isOpen, onToggle } = useDisclosure();

  React.useEffect(() => {
    onToggle(); // Automatically trigger the animation when the component mounts
  }, [onToggle]);

  return (
     <div className='main'>
          <Container 
               maxW='2xl' 
               centerContent p={8} 
               position="relative"
               >
               <Box 
                    maxW='xl' 
                    textAlign="center" 
                    fontSize="xl" 
                    bg='rgba(40,40,40,.6)' 
                    p={6} 
                    borderRadius={'25px'}
                    >
                    <ScaleFade in={true} delay={0.2}>
                         <Heading 
                         mt={20} 
                         mb={4} 
                         fontSize="4xl" 
                         // color="purple.800"
                         color="#F4EBBE" 
                         fontFamily={"VeniteAdoremusStraight"}>
                         Ujian Frasa
                         </Heading>
                    </ScaleFade>
                    <ScaleFade in={true} delay={0.4}>
                         <Heading 
                              mb={6} 
                              fontSize="xl" 
                              // color="purple.600"
                              color='#CACC90' 
                              fontFamily={"SF Atarian System Extended"}
                              >
                         Sedia untuk uji pengetahuan Bahasa Isyarat Malaysia anda!
                         </Heading>
                    </ScaleFade>
                    <ScaleFade in={true} delay={0.6}>
                         <Text 
                              fontSize="xl" 
                              mb={4} 
                              // color={useColorModeValue('gray.600', 'gray.200')} 
                              color={'#CACC90'}
                              fontFamily={"SF Atarian System Extended"}>
                         Lihat soalan dan pilih jawapan yang betul!
                         </Text>
                    </ScaleFade>
                    <ScaleFade in={true} delay={0.8}>
                         <Link to="/levelfour/myquiz">
                         <Button colorScheme="purple" size="lg" px={8}>
                         Mula Kuiz
                         </Button>
                         </Link>
                    </ScaleFade>
                    <ScaleFade in={true} delay={1.0}>
                         <Link to="/menu/my">
                              <Button m={12} size="md" px={8}>
                                   Pulang ke Menu
                              </Button>
                         </Link>
                    </ScaleFade>
               </Box>
          </Container>
    </div>
  );
}

export default Level4MenuMy;
