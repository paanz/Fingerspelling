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

import backpack from "../phrasesData/page_objects/backpack.jpg";
import bag from "../phrasesData/page_objects/bag.jpg";
import ball from "../phrasesData/page_objects/ball.jpg";
import basket1 from "../phrasesData/page_objects/basket1.jpg";
import basket2 from "../phrasesData/page_objects/basket2.jpg";
import book from "../phrasesData/page_objects/book.jpg";
import bottle from "../phrasesData/page_objects/bottle.jpg";
import cup from "../phrasesData/page_objects/cup.jpg";
import cupboard from "../phrasesData/page_objects/cupboard.jpg";
import flag from "../phrasesData/page_objects/flag.jpg";
import hoe from "../phrasesData/page_objects/hoe.jpg";
import mirror from "../phrasesData/page_objects/mirror.jpg";
import pail from "../phrasesData/page_objects/pail.jpg";
import pillow from "../phrasesData/page_objects/pillow.jpg";
import thing from "../phrasesData/page_objects/thing.jpg";
import thread from "../phrasesData/page_objects/thread.jpg";

import backpack_vid from "../phrasesData/page_objects/backpack.mp4";
import bag_vid from "../phrasesData/page_objects/bag.mp4";
import ball_vid from "../phrasesData/page_objects/ball.mp4";
import basket1_vid from "../phrasesData/page_objects/basket1.mp4";
import basket2_vid from "../phrasesData/page_objects/basket2.mp4";
import book_vid from "../phrasesData/page_objects/book.mp4";
import bottle_vid from "../phrasesData/page_objects/bottle.mp4";
import cup_vid from "../phrasesData/page_objects/cup.mp4";
import cupboard_vid from "../phrasesData/page_objects/cupboard.mp4";
import flag_vid from "../phrasesData/page_objects/flag.mp4";
import hoe_vid from "../phrasesData/page_objects/hoe.mp4";
import mirror_vid from "../phrasesData/page_objects/mirror.mp4";
import pail_vid from "../phrasesData/page_objects/pail.mp4";
import pillow_vid from "../phrasesData/page_objects/pillow.mp4";
import thing_vid from "../phrasesData/page_objects/thing.mp4";
import thread_vid from "../phrasesData/page_objects/thread.mp4";

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
        Logo
      </Text>
    </Flex>
  );
};

export function PageObjects() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signs = [
    { id: 1, nameEng: 'Backpack', nameMY: 'Beg Galas', imageUrl: backpack, videoUrl: backpack_vid },
    { id: 2, nameEng: "Bag", nameMY: 'Beg', imageUrl: bag, videoUrl: bag_vid },
    { id: 3, nameEng: 'Ball', nameMY: 'Bola', imageUrl: ball, videoUrl: ball_vid },
    { id: 4, nameEng: "Basket (1)", nameMY: 'Bakul (1)', imageUrl: basket1, videoUrl: basket1_vid },
    { id: 5, nameEng: "Basket (2)", nameMY: 'Bakul (2)', imageUrl: basket2, videoUrl: basket2_vid },
    { id: 6, nameEng: "Book", nameMY: 'Buku', imageUrl: book, videoUrl: book_vid },
    { id: 7, nameEng: "Bottle", nameMY: 'Botol', imageUrl: bottle, videoUrl: bottle_vid },
    { id: 8, nameEng: "Cup", nameMY: 'Cawan', imageUrl: cup, videoUrl: cup_vid },
    { id: 9, nameEng: "Cupboard", nameMY: 'Almari', imageUrl: cupboard, videoUrl: cupboard_vid },
    { id: 10, nameEng: "Flag", nameMY: 'Bendera', imageUrl: flag, videoUrl: flag_vid },
    { id: 11, nameEng: "Hoe", nameMY: 'Cangkul', imageUrl: hoe, videoUrl: hoe_vid },
    { id: 12, nameEng: "Mirror", nameMY: 'Cermin', imageUrl: mirror, videoUrl: mirror_vid },
    { id: 13, nameEng: "Pail", nameMY: 'Baldi', imageUrl: pail, videoUrl: pail_vid },
    { id: 14, nameEng: "Pillow", nameMY: 'Bantal', imageUrl: pillow, videoUrl: pillow_vid },
    { id: 15, nameEng: "Thing", nameMY: 'Benda', imageUrl: thing, videoUrl: thing_vid },
    { id: 16, nameEng: "Thread", nameMY: 'Benang', imageUrl: thread, videoUrl: thread_vid },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    onOpen();
  };

  return (
    <>
      <SidebarComponent>

        <Heading textAlign="center" fontSize={    { base: 'xl', sm: '3xl', md: '5xl' }} paddingBottom="1vh" fontFamily="VeniteAdoremusStraight" style={{ letterSpacing: 3 }}>
          Object (Objek)
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
      </SidebarComponent>
    </>
  );
}