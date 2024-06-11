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

import black from "../phrasesData/page_colours/black.jpg";
import blue from "../phrasesData/page_colours/blue.jpg";
import brown from "../phrasesData/page_colours/brown.jpg";
import colour from "../phrasesData/page_colours/colour.jpg";
import gray from "../phrasesData/page_colours/gray.jpg";
import green from "../phrasesData/page_colours/green.jpg";
import orange from "../phrasesData/page_colours/orange.jpg";
import pink from "../phrasesData/page_colours/pink.jpg";
import purple from "../phrasesData/page_colours/purple.jpg";
import red from "../phrasesData/page_colours/red.jpg";
import white from "../phrasesData/page_colours/white.jpg";
import yellow from "../phrasesData/page_colours/yellow.jpg";

import black_vid from "../phrasesData/page_colours/black.mp4";
import blue_vid from "../phrasesData/page_colours/blue.mp4";
import brown_vid from "../phrasesData/page_colours/brown.mp4";
import colour_vid from "../phrasesData/page_colours/colour.mp4";
import gray_vid from "../phrasesData/page_colours/gray.mp4";
import green_vid from "../phrasesData/page_colours/green.mp4";
import orange_vid from "../phrasesData/page_colours/orange.mp4";
import pink_vid from "../phrasesData/page_colours/pink.mp4";
import purple_vid from "../phrasesData/page_colours/purple.mp4";
import red_vid from "../phrasesData/page_colours/red.mp4";
import white_vid from "../phrasesData/page_colours/white.mp4";
import yellow_vid from "../phrasesData/page_colours/yellow.mp4";

const LinkItems = [
  { name: 'General', icon: FiHome, subItems: [{ label: 'Numbers', link: '/levelthree/numbers' }, { label: 'Colours', link: '/levelthree/colours' }] },
  { name: 'Things', icon: FiTrendingUp, subItems: [{ label: 'Objects', link: '/levelthree/objects' }, { label: 'Clothing', link: '/levelthree/clothing' }] },
  { name: 'Places', icon: FiCompass, subItems: [{ label: 'Direction', link: '/levelthree/direction' }, { label: 'Transportation', link: '/levelthree/transportation' }] },
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
      <Link to="/menu">
          <Button style={{
            position: "fixed",
            zIndex: "9"
          }}>
            Return to Main Menu
          </Button>
        </Link>
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
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
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
        Logo
      </Text>
    </Flex>
  );
};

export function PageColours() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signs = [
    { id: 1, nameEng: 'Black', nameMY: 'Hitam', imageUrl: black, videoUrl: black_vid },
    { id: 2, nameEng: "Blue", nameMY: 'Biru', imageUrl: blue, videoUrl: blue_vid },
    { id: 3, nameEng: 'Brown', nameMY: 'Coklat', imageUrl: brown, videoUrl: brown_vid },
    { id: 4, nameEng: "Gray", nameMY: 'Kelabu', imageUrl: gray, videoUrl: gray_vid },
    { id: 5, nameEng: "Green", nameMY: 'Hijau', imageUrl: green, videoUrl: green_vid },
    { id: 6, nameEng: "Orange", nameMY: 'Oren', imageUrl: orange, videoUrl: orange_vid },
    { id: 7, nameEng: "Pink", nameMY: 'Merah jambu', imageUrl: pink, videoUrl: pink_vid },
    { id: 8, nameEng: "Purple", nameMY: 'Ungu', imageUrl: purple, videoUrl: purple_vid },
    { id: 9, nameEng: "Red", nameMY: 'Merah', imageUrl: red, videoUrl: red_vid },
    { id: 10, nameEng: "White", nameMY: 'Putih', imageUrl: white, videoUrl: white_vid },
    { id: 11, nameEng: "Yellow", nameMY: 'Kuning', imageUrl: yellow, videoUrl: yellow_vid },
    { id: 12, nameEng: "Colour", nameMY: 'Warna', imageUrl: colour, videoUrl: colour_vid },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    onOpen();
  };

  return (
    <>
      <SidebarComponent>

        <Heading textAlign="center" fontSize={    { base: 'xl', sm: '3xl', md: '5xl' }} paddingBottom="1vh" fontFamily="VeniteAdoremusStraight" style={{ letterSpacing: 3 }}>
          Colours
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
                      Watch demonstration
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
      </SidebarComponent>
    </>
  );
}