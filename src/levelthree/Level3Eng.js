import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Grid,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import image_apa_khabar from "../phrasesData/image_apa_khabar.jpg";
import vid_apa_khabar from "../phrasesData/vid_apa_khabar.mp4";
import image_maaf from "../phrasesData/image_maaf.jpg";
import vid_maaf from "../phrasesData/vid_maaf.mp4";
import image_terima_kasih from "../phrasesData/image_terima_kasih.jpg";
import vid_terima_kasih from "../phrasesData/vid_terima_kasih.mp4";
import image_sama_sama from "../phrasesData/image_sama_sama.jpg";
import vid_sama_sama from "../phrasesData/vid_sama_sama.mp4";
import image_ya from "../phrasesData/image_ya.jpg";
import vid_ya from "../phrasesData/vid_ya.mp4";
import image_mahu from "../phrasesData/image_mahu.jpg";
import vid_mahu from "../phrasesData/vid_mahu.mp4";
import image_tidak from "../phrasesData/image_tidak.jpg";
import vid_tidak from "../phrasesData/vid_tidak.mp4";
import image_tidak_boleh from "../phrasesData/image_tidak_boleh.jpg";
import vid_tidak_boleh from "../phrasesData/vid_tidak_boleh.mp4";

const LinkItems = [
  { name: 'General (Umum)', icon: FiHome, subItems: [{label: 'Daily (Harian)', link: '/levelthree'}, { label: 'Numbers (Nombor)', link: '/levelthree/numbers' }, { label: 'Colours (Warna)', link: '/levelthree/colours' }] },
  { name: 'Things (Benda)', icon: FiTrendingUp, subItems: [{ label: 'Objects (Objek)', link: '/levelthree/objects' }, { label: 'Clothing (Pakaian)', link: '/levelthree/clothing' }] },
  { name: 'Places (Tempat)', icon: FiCompass, subItems: [{ label: 'Direction (Arah)', link: '/levelthree/direction' }, { label: 'Transportation (Pengangkutan)', link: '/levelthree/transportation' }] },
];

const SidebarComponent = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Sign Language - Bahasa Isyarat
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} subItems={link.subItems}>
          {link.name}
        </NavItem>
      ))}
      <Link to="/menu">
        <Button mt={10}>
          Return to Main Menu
        </Button>
      </Link>
      <Link to="/menu/my">
        <Button mt={2}>
          Pulang ke Menu Utama
        </Button>
      </Link>
    </Box>
  );
};

const NavItem = ({ icon, children, subItems }) => {
  return (
    <Menu>
      <MenuButton
        as={Flex}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{ bg: 'cyan.400', color: 'white' }}
        textDecoration="none"
        _focus={{ boxShadow: 'none' }}>
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
        <Icon as={FiChevronDown} ml="auto" />
      </MenuButton>
      <MenuList>
        {subItems.map((item) => (
          <MenuItem as={Link} to={item.link} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        MSL Learning
      </Text>
    </Flex>
  );
};

export function Level3Eng() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signs = [
    { id: 1, nameEng: 'How are you', nameMY: 'Apa Khabar', imageUrl: image_apa_khabar, videoUrl: vid_apa_khabar },
    { id: 2, nameEng: "I'm Sorry", nameMY: 'Maafkan Saya', imageUrl: image_maaf, videoUrl: vid_maaf },
    { id: 3, nameEng: 'Thank you', nameMY: 'Terima Kasih', imageUrl: image_terima_kasih, videoUrl: vid_terima_kasih },
    { id: 4, nameEng: "You're Welcome", nameMY: 'Sama-sama', imageUrl: image_sama_sama, videoUrl: vid_sama_sama },
  ];

  const helpingWords = [
    { id: 1, nameEng: 'Yes', nameMY: 'Ya', imageUrl: image_ya, videoUrl: vid_ya },
    { id: 2, nameEng: 'Want', nameMY: 'Hendak, Mahu', imageUrl: image_mahu, videoUrl: vid_mahu },
    { id: 3, nameEng: 'No', nameMY: 'Tidak', imageUrl: image_tidak, videoUrl: vid_tidak },
    { id: 4, nameEng: 'Cannot', nameMY: 'Tidak Boleh', imageUrl: image_tidak_boleh, videoUrl: vid_tidak_boleh },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    onOpen();
  };

  return (
    <>
      <SidebarComponent>

        <Heading textAlign="center" fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }} paddingBottom="1vh" fontFamily="VeniteAdoremusStraight" style={{ letterSpacing: 3 }}>
          Phrase Learning (Belajar Frasa)
        </Heading>

        <Box maxW="99%" mx="auto" backgroundColor="#DFDFDF" borderRadius="1.5em" p={4}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
            {signs.map((sign) => (
              <Box key={sign.id} p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
                <HStack border="1.5px solid black" borderRadius="1em" shadow="lg" alignItems="center" p={4}>
                  <Image src={sign.imageUrl} alt={`Gesture for ${sign.nameEng}`} boxSize="180px" objectFit="contain" />
                  <VStack alignItems="flex-start">
                    <Text mt={2} fontSize="2xl" fontWeight="bold" fontFamily="SF Atarian System" style={{ letterSpacing: 3 }}>
                      {sign.nameEng}
                    </Text>
                    <Text mt={2} fontSize="xl" fontWeight="bold" fontFamily="SF Atarian System" style={{ letterSpacing: 3 }}>
                      ({sign.nameMY})
                    </Text>
                    <Link onClick={() => openModal(sign.videoUrl)} _hover={{ textDecoration: 'underline', color: 'blue' }}>
                      Watch demo / Lihat demo
                    </Link>
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
                  <source src={selectedVideo} type="video/mp4" />
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

        <Heading paddingTop={10} textAlign="center" fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }} fontFamily="VeniteAdoremusStraight" paddingBottom="1vh">
          Helping Words (Kata Bantu)
        </Heading>

        <Box maxW="99%" mx="auto" backgroundColor="#DFDFDF" borderRadius="1.5em" p={4}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
            {helpingWords.map((sign) => (
              <Box key={sign.id} p={5} borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
                <HStack border="1.5px solid black" borderRadius="1em" shadow="lg" alignItems="center" p={4}>
                  <Image src={sign.imageUrl} alt={`Gesture for ${sign.nameEng}`} boxSize="180px" objectFit="contain" />
                  <VStack alignItems="flex-start">
                    <Text mt={2} fontSize="2xl" fontWeight="bold" fontFamily="SF Atarian System" style={{ letterSpacing: 3 }}>
                      {sign.nameEng}
                    </Text>
                    <Text mt={2} fontSize="xl" fontWeight="bold" fontFamily="SF Atarian System" style={{ letterSpacing: 3 }}>
                      ({sign.nameMY})
                    </Text>
                    <Link 
                      onClick={() => openModal(sign.videoUrl)} 
                      _hover={{ textDecoration: 'underline', color: 'blue' }}
                      >
                        Watch demo / Lihat demo
                    </Link>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </Grid>
        </Box>
      </SidebarComponent>
    </>
  );
}