import React from "react";
import { Link } from "react-router-dom";
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
  keyframes,
  usePrefersReducedMotion,
  ScaleFade,
  HStack,
  VStack,
  Image
} from '@chakra-ui/react'
import image1 from "./jackky.jpg"
// import leveloneimage from "../images/menuImages/LevelOne.webp";
import leveloneimage from "../images/menuImages/InkscapeLevelOne.png"
import tahapsatuimage from "../images/menuImagesMY/InkscapeTahapSatu.png"
import tahapduaimage from "../images/menuImagesMY/InkscapeTahapDua.png"
import tahaptigaimage from "../images/menuImagesMY/InkscapeTahapTiga.png"
import tahapempatimage from "../images/menuImagesMY/InkscapeTahapEmpat.png"
// import leveltwoimage from "../images/menuImages/LevelTwo.webp";
import leveltwoimage from "../images/menuImages/InkscapeLevelTwo.png"
import levelthreeimage from "../images/menuImages/InkscapeLevelThree.png"
import levelfourimage from "../images/menuImages/InkscapeLevelFour.png"
import PhraseOne from "../images/menuImages/PhraseOne.webp";
import TalkOne from "../images/menuImages/TalkOne.webp";
import "../styles/menuPage.css"
import "../index.css"

// Animation keyframes
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export function MenuMy() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return(
    <div 
     className='main'
     style={{
          height: '100vh',
          overflow: 'scroll',
     }}>
          <Container 
               centerContent 
               py={8} 
               maxW='4xl'
               position="relative"
               >
               <Box textAlign="center" fontSize="xl" mb={10}>
               <Heading 
                    mb={6} 
                    fontSize="4xl" 
                    bgClip="text" 
                    // bgGradient="radial-gradient(circle, rgba(225,225,251,1) 72%, rgba(165,165,255,1) 100%)"
                    color={'white'}
                    fontFamily={"SF Atarian System Extended Bold"}
                    >
                    Selamat Datang ke Portal Pembelajaran Bahasa Isyarat
               </Heading>
               <Text 
                    fontSize="xl" 
                    // color={useColorModeValue('gray.600', 'gray.200')}
                    color={'white'}
                    font-weight={'Bold'}
                    fontFamily={'SF Atarian System Extended'}
                    >
                    Pilih tahap permainan untuk mula belajar atau menguji kemahiran anda!
               </Text>
               </Box>
               <VStack /*class="hover14 column"*/ spacing={5}>
                    <HStack spacing={6}>
                    <ScaleFade in={true} delay={0.2}>
                    <Link to='/levelone'>
                         <Image 
                         src={tahapsatuimage}
                         objectFit='cover'
                         alt='Level 1: Learn Fingerspelling'
                         border-radius='50%'
                         boxShadow='3px 3px #A9A9A9'
                         />
                    </Link>
                    </ScaleFade>
                    <ScaleFade in={true} delay={0.4}>
                    <Link to='/leveltwo/my'>
                         <Image 
                         src={tahapduaimage}
                         height='100%'
                         width='100%'
                         objectFit='cover'
                         alt='Level 2: Fingerspelling Test' 
                         boxShadow='3px 3px #A9A9A9'
                         />
                    </Link>
                    </ScaleFade>
                    </HStack>
                    <HStack spacing={6}>
                    <ScaleFade in={true} delay={0.6}>
                    <Link to='/levelthree'>
                         <Image
                         src={tahaptigaimage}
                         height="100%"
                         objectFit='cover'
                         alt='Level Three Image'
                         boxShadow='3px 3px #A9A9A9'
                         />
                    </Link>
                    </ScaleFade>
                    <ScaleFade in={true} delay={0.8}>
                    <Link to='/levelfour/my'>
                         <Image
                         src={tahapempatimage}
                         // boxSize='200px'
                         objectFit='cover'
                         alt='Talk One'
                         boxShadow='3px 3px #A9A9A9'
                         />
                         </Link>
                    </ScaleFade>
                    </HStack>
               </VStack>
               <ScaleFade in={true} delay={1.0}>
                    <Link to="/my">
                    <Button 
                    mt={12} 
                    size="md"
                    fontFamily={'SF Atarian System Extended'}
                    style={{ letterSpacing: 2 }}>
                    Kembali ke Laman Utama
                    </Button>
                    </Link>
               </ScaleFade>
          </Container>
     </div>
  );
}

export default MenuMy;
