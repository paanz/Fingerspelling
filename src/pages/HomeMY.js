import React, { useState } from 'react';
import { Link } from "react-router-dom"
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
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  ModalFooter 
} from '@chakra-ui/react'
import "../index.css"
import "../styles/homePage.css"

export function HomeMY() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
    <div className='main'
                style={{
                  height: '100vh',
                  overflow: 'scroll'
                }}>
        {/* <video className='homeBg' src={BgVideo} autoPlay loop muted /> */}
        {/* <div className='overlay'></div> */}
          <Container className='homeContainer' maxW={'5xl'} rounded={'90px'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}>
              <Heading
                fontFamily={"VeniteAdoremusItalic"}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                <Text as={'span'} color={'blue.300'} >
                  F I N G E R S P E L L I N G !
                </Text>
              </Heading>
              <Text color={'gray.100'} className='descText' fontFamily={"SF Atarian System Extended"}>
                Belajar <Text as={'span'} color='yellow.200'>Bahasa Isyarat</Text> dengan pembelajaran mesin!
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={10} align={'center'}
                alignSelf={'center'}>
                    <Link to="/menu/my">
                <Button
                  fontFamily={'SF Atarian System Extended Italic'}
                  rounded={'full'}
                  px={12}
                  fontSize={{ base: '2xl', sm: '4lg', md: '6lg' }}
                  colorScheme={'orange'}
                  bg={'yellow.500'}
                  _hover={{ bg: 'yellow.700' }}>
                  Mula !
                </Button>
                </Link>
              </Stack>
              <Text color={'gray.100'} fontSize={'larger'} fontFamily={'SF Atarian System Extended'}>
                  Choose language / Pilih bahasa:
                </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={10} align={'center'}
                alignSelf={'center'}
                position={'relative'}
                >
               <Link to="/">
                <Button
                fontFamily={'SF Atarian System Extended Italic'}
                rounded={'full'}>
                    English
                </Button>
               </Link>
                <Button  
                fontFamily={'SF Atarian System Extended Italic'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{bg: 'blue.500'}}>
                    Malay
               </Button>
              </Stack>
            </Stack>
          </Container>
          <Button position="fixed" bottom="10px" left="10px" onClick={onOpen} colorScheme="gray" variant="solid">
          Kredit
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kredit</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add your credits text here */}
              <Text>This web application was develop by Farhan Bin Zurafuddin, a Bachelor of Computer Science (Software Engineering) student for his Final Year Project (FYP) in Universiti Malaysia Sarawak (UNIMAS), 2024.</Text>
              < br/>
              <Text>Aplikasi web ini dibangunkan oleh Farhan Bin Zurafuddin, seorang pelajar Ijazah Sarjana Muda Sains Komputer (Kejuruteraan Perisian) untuk Projek Tahun Akhir (FYP) beliau di Universiti Malaysia Sarawak (UNIMAS), 2024.</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

    </>
  )
}