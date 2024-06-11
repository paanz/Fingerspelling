import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../index.css";
import image_apa_khabar from "../phrasesData/image_apa_khabar.jpg"
import vid_apa_khabar from "../phrasesData/vid_apa_khabar.mp4"
import image_maaf from "../phrasesData/image_maaf.jpg"
import vid_maaf from "../phrasesData/vid_maaf.mp4"
import image_terima_kasih from "../phrasesData/image_terima_kasih.jpg"
import vid_terima_kasih from "../phrasesData/vid_terima_kasih.mp4"
import image_sama_sama from "../phrasesData/image_sama_sama.jpg"
import vid_sama_sama from "../phrasesData/vid_sama_sama.mp4"
import image_ya from "../phrasesData/image_ya.jpg"
import vid_ya from "../phrasesData/vid_ya.mp4"
import image_mahu from "../phrasesData/image_mahu.jpg"
import vid_mahu from "../phrasesData/vid_mahu.mp4"
import image_tidak from "../phrasesData/image_tidak.jpg"
import vid_tidak from "../phrasesData/vid_tidak.mp4"
import image_tidak_boleh from "../phrasesData/image_tidak_boleh.jpg"
import vid_tidak_boleh from "../phrasesData/vid_tidak_boleh.mp4"
// import theme from "./theme"
import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Grid,
  Heading,
  HStack,
  VStack
} from '@chakra-ui/react'

export function Level3Eng() {
     const [selectedVideo, setSelectedVideo] = useState('');
     const { isOpen, onOpen, onClose } = useDisclosure();
   
     const signs = [
       { id: 1, nameEng: 'How are you', nameMY: 'Apa Khabar', imageUrl: image_apa_khabar, videoUrl: vid_apa_khabar },
       { id: 2, nameEng: "I'm Sorry", nameMY: 'Maafkan Saya', imageUrl: image_maaf, videoUrl: vid_maaf },
       { id: 3, nameEng: 'Thank you', nameMY: 'Terima Kasih', imageUrl: image_terima_kasih, videoUrl: vid_terima_kasih},
       { id: 4, nameEng: "You're Welcome", nameMY: 'Sama-sama', imageUrl: image_sama_sama, videoUrl: vid_sama_sama},
       // Add more gestures as needed
     ];

     const helpingWords = [
      { id: 1, nameEng: 'Yes', nameMY: 'Ya', imageUrl: image_ya, videoUrl: vid_ya },
      { id: 2, nameEng: "Want", nameMY: 'Hendak, Mahu', imageUrl: image_mahu, videoUrl: vid_mahu },
      { id: 3, nameEng: 'No', nameMY: 'Tidak', imageUrl: image_tidak, videoUrl: vid_tidak},
      { id: 4, nameEng: "Cannot", nameMY: 'Tidak Boleh', imageUrl: image_tidak_boleh, videoUrl: vid_tidak_boleh},
     ];
   
     const openModal = (videoUrl) => {
       setSelectedVideo(videoUrl);
       onOpen();
     };

     return(
      <div>
        <Link to="/menu">
          <Button>
            Return to Main Menu
          </Button>
        </Link>

        <Heading 
          textAlign={'center'}
          fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
          paddingBottom={'1vh'}
          fontFamily={"VeniteAdoremusStraight"}
          style={{ letterSpacing:3 }}>
          Phrase Learning
        </Heading>

        <Box 
          maxW="99%"
          mx="auto"
          backgroundColor={'#DFDFDF'}
          borderTopLeftRadius={'1.5em'}
          borderTopRightRadius={'1.5em'}
          borderBottomLeftRadius={'1.5em'}
          borderBottomRightRadius={'1.5em'}>
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }} 
              gap={6}
              >
                {signs.map(sign => (
                  <Box 
                  key={sign.id} 
                  p={5} 
                  // shadow="md" 
                  // borderWidth="1px" 
                  // borderRadius="lg" 
                  overflow="hidden"
                  p={6}
                  >
                    <HStack 
                      border={'1.5px solid black'}
                      borderRadius={'1em'}
                      shadow="lg"
                      alignItems={'center'}>
                      <Image
                        src={sign.imageUrl} 
                        alt={`Gesture for ${sign.nameEng}`} 
                        boxSize="270px" 
                        p={2}
                        objectFit="contain"
                      />
                      {/* <Box>
                      <Text 
                        mt={2} 
                        fontSize="xl" 
                        fontWeight="bold">{sign.name}
                      </Text>
                      </Box> */}
                      <VStack 
                        // border={'1px solid red'}
                        alignItems={'left'}>
                        <Box>
                          <Text 
                            mt={2} 
                            fontSize="5xl" 
                            fontWeight="bold"
                            fontFamily={"SF Atarian System"}
                            style={{letterSpacing:3}}
                            >{sign.nameEng}
                            
                          </Text>
                        </Box>
                        <Box>
                          <Text
                          mt={2} 
                          fontSize="xl" 
                          fontWeight="bold"
                          paddingBottom={'4em'}
                          fontFamily={"SF Atarian System"}
                          style={{letterSpacing:3}}>
                            ({sign.nameMY})
                        </Text>
                        </Box>
                        <Box>
                        <Link onClick={() => openModal(sign.videoUrl)} _hover={{ textDecoration: 'none' }}>
                          Watch demonstration
                        </Link>
                        </Box>
                      </VStack>
                    </HStack>
                  </Box>
                  ))}
            </Grid>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
              <ModalContent>
                <ModalHeader>Demonstration Video</ModalHeader>
                  <ModalCloseButton />
                    <ModalBody>
                      <video width="100%" controls>
                        <source src={selectedVideo} type="video/mp4"/>
                          Your browser does not support the video tag.
                      </video>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
          </Modal>
        </Box>

        <Heading 
          paddingTop={10}
          textAlign={'center'}
          fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
          paddingBottom={'1vh'}>
          Helping Words
        </Heading>

        <Box 
          maxW="99%"
          mx="auto"
          backgroundColor={'#DFDFDF'}
          borderTopLeftRadius={'1.5em'}
          borderTopRightRadius={'1.5em'}
          borderBottomLeftRadius={'1.5em'}
          borderBottomRightRadius={'1.5em'}>
            <Grid
              templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }} 
              gap={6}
              >
                {helpingWords.map(sign => (
                  <Box 
                  key={sign.id} 
                  p={5} 
                  // shadow="md" 
                  // borderWidth="1px" 
                  // borderRadius="lg" 
                  overflow="hidden"
                  p={6}
                  >
                    <HStack 
                      border={'1.5px solid black'}
                      borderRadius={'1em'}
                      shadow="lg"
                      alignItems={'center'}>
                      <Image
                        src={sign.imageUrl} 
                        alt={`Gesture for ${sign.nameEng}`} 
                        boxSize="270px" 
                        p={2}
                        objectFit="contain"
                      />
                      {/* <Box>
                      <Text 
                        mt={2} 
                        fontSize="xl" 
                        fontWeight="bold">{sign.name}
                      </Text>
                      </Box> */}
                      <VStack alignItems={'left'}>>
                        <Box>
                          <Text 
                            mt={2} 
                            fontSize="5xl" 
                            fontWeight="bold"
                            fontFamily={"SF Atarian System"}
                            style={{letterSpacing:3}}
                            >{sign.nameEng}
                            
                          </Text>
                        </Box>
                        <Box>
                          <Text
                          mt={2} 
                          fontSize="xl" 
                          fontWeight="bold"
                          paddingBottom={'4em'}
                          fontFamily={"SF Atarian System"}
                          style={{letterSpacing:3}}>
                            ({sign.nameMY})
                        </Text>
                        </Box>
                        <Box>
                        <Link onClick={() => openModal(sign.videoUrl)} _hover={{ textDecoration: 'underline', color: 'blue' }}>
                          Click: Watch demonstration
                        </Link>
                        </Box>
                      </VStack>
                    </HStack>
                  </Box>
                  ))}
            </Grid>
            </Box>


{/* End of testing displays. */}
        {/* <Box p={5} maxW="1200px" mx="auto">
        <Grid 
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
          gap={6}>
          {signs.map(sign => (
            <Box 
              key={sign.id} 
              p={5} shadow="md" 
              borderWidth="1px" 
              borderRadius="lg" 
              overflow="hidden">
                <HStack>
                  <Box>
                    <Image
                    src={sign.imageUrl} 
                    alt={`Gesture for ${sign.name}`} 
                    boxSize="300px" 
                    objectFit="cover"/>
                  </Box>
                  <Box>
                    <VStack>

                    </VStack>
                  <Text 
                    mt={2} 
                    fontSize="xl" 
                    fontWeight="bold">{sign.name}
                  </Text>
                  </Box>
                </HStack>
              <Image 
                src={sign.imageUrl} 
                alt={`Gesture for ${sign.name}`} 
                boxSize="300px" 
                objectFit="cover"/>
              <Text 
                mt={2} 
                fontSize="xl" 
                fontWeight="bold">{sign.name}
              </Text>
              <Link onClick={() => openModal(sign.videoUrl)} _hover={{ textDecoration: 'none' }}>
                Watch demonstration
              </Link>
            </Box>
          ))}
        </Grid>
        
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Demonstration Video</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <video width="100%" controls>
                <source src={selectedVideo} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box> */}
      </div>

     );
};