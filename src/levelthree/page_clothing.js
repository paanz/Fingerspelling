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

import bajumelayu from "../phrasesData/page_clothing/baju_melayu.jpg";
import batik from "../phrasesData/page_clothing/batik.jpg";
import belt from "../phrasesData/page_clothing/belt.jpg";
import blouse from "../phrasesData/page_clothing/blouse.jpg"; 
import bra1 from "../phrasesData/page_clothing/bra1.jpg";
import bra2 from "../phrasesData/page_clothing/bra2.jpg";
import button from "../phrasesData/page_clothing/button.jpg";
import cap from "../phrasesData/page_clothing/cap.jpg";
import cheongsam from "../phrasesData/page_clothing/cheong_sam.jpg";
import clothes from "../phrasesData/page_clothing/clothes.jpg";
import comb from "../phrasesData/page_clothing/comb.jpg";
import hairclip from "../phrasesData/page_clothing/hair_clip.jpg";
import hairband from "../phrasesData/page_clothing/hairband.jpg";
import handkerchief from "../phrasesData/page_clothing/handkerchief.jpg";
import jeans from "../phrasesData/page_clothing/jeans.jpg";
import kebaya from "../phrasesData/page_clothing/kebaya.jpg";
import kurung from "../phrasesData/page_clothing/kurung.jpg";
import necktie from "../phrasesData/page_clothing/neck_tie.jpg";
import pants from "../phrasesData/page_clothing/pants.jpg";
import ring from "../phrasesData/page_clothing/ring.jpg";
import shirt from "../phrasesData/page_clothing/shirt.jpg";
import shirt2 from "../phrasesData/page_clothing/shirt2.jpg";
import shoes from "../phrasesData/page_clothing/shoes.jpg";
import shorts from "../phrasesData/page_clothing/shorts.jpg"; 
import singlet from "../phrasesData/page_clothing/singlet.jpg";
import slippers from "../phrasesData/page_clothing/slippers.jpg";
import tshirt from "../phrasesData/page_clothing/t_shirt.jpg";
import tracktop from "../phrasesData/page_clothing/track_top.jpg";
import tudung from "../phrasesData/page_clothing/tudung.jpg";
import underwear from "../phrasesData/page_clothing/underwear.jpg";
import wearshirt from "../phrasesData/page_clothing/wear_shirt.jpg";
import weartrousers from "../phrasesData/page_clothing/wear_trousers.jpg";

import bajumelayu_vid from "../phrasesData/page_clothing/baju_melayu.mp4";
import batik_vid from "../phrasesData/page_clothing/batik.mp4";
import belt_vid from "../phrasesData/page_clothing/belt.mp4";
//import blouse_vid from "../phrasesData/page_clothing/blouse.mp4"; //x
import bra1_vid from "../phrasesData/page_clothing/bra1.mp4";
import bra2_vid from "../phrasesData/page_clothing/bra2.mp4";
import button_vid from "../phrasesData/page_clothing/button.mp4";
import cap_vid from "../phrasesData/page_clothing/cap.mp4";
import cheongsam_vid from "../phrasesData/page_clothing/cheong_sam.mp4";
import clothes_vid from "../phrasesData/page_clothing/clothes.mp4";
import comb_vid from "../phrasesData/page_clothing/comb.mp4";
import hairclip_vid from "../phrasesData/page_clothing/hair_clip.mp4";
import hairband_vid from "../phrasesData/page_clothing/hairband.mp4";
import handkerchief_vid from "../phrasesData/page_clothing/handkerchief.mp4";
import jeans_vid from "../phrasesData/page_clothing/jeans.mp4";
import kebaya_vid from "../phrasesData/page_clothing/kebaya.mp4";
import kurung_vid from "../phrasesData/page_clothing/kurung.mp4";
import necktie_vid from "../phrasesData/page_clothing/neck_tie.mp4";
import pants_vid from "../phrasesData/page_clothing/pants.mp4";
import ring_vid from "../phrasesData/page_clothing/ring.mp4";
import shirt_vid from "../phrasesData/page_clothing/shirt.mp4";
import shirt2_vid from "../phrasesData/page_clothing/shirt2.mp4";
import shoes_vid from "../phrasesData/page_clothing/shoes.mp4";
//import shorts_vid from "../phrasesData/page_clothing/shorts.mp4"; //x
import singlet_vid from "../phrasesData/page_clothing/singlet.mp4";
import slippers_vid from "../phrasesData/page_clothing/slippers.mp4";
import tshirt_vid from "../phrasesData/page_clothing/t_shirt.mp4";
import tracktop_vid from "../phrasesData/page_clothing/track_top.mp4";
import tudung_vid from "../phrasesData/page_clothing/tudung.mp4";
import underwear_vid from "../phrasesData/page_clothing/underwear.mp4";
import wearshirt_vid from "../phrasesData/page_clothing/wear_shirt.mp4";
import weartrousers_vid from "../phrasesData/page_clothing/wear_trousers.mp4";

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

export function PageClothing() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signs = [
    { id: 1, nameEng: 'Baju Melayu', nameMY: 'Baju Melayu', imageUrl: bajumelayu, videoUrl: bajumelayu_vid },
    { id: 2, nameEng: "Batik", nameMY: 'Batik', imageUrl: batik, videoUrl: batik_vid },
    { id: 3, nameEng: 'Belt', nameMY: 'Tali Pinggang', imageUrl: belt, videoUrl: belt_vid },
    { id: 4, nameEng: "Bra (1)", nameMY: 'Coli (1)', imageUrl: bra1, videoUrl: bra1_vid },
    { id: 5, nameEng: "Bra (2)", nameMY: 'Coli (2)', imageUrl: bra2, videoUrl: bra2_vid },
    { id: 6, nameEng: "Button", nameMY: 'Butang', imageUrl: button, videoUrl: button_vid },
    { id: 7, nameEng: "Cap", nameMY: 'Topi', imageUrl: cap, videoUrl: cap_vid },
    { id: 8, nameEng: "Cheongsam", nameMY: 'Cheongsam', imageUrl: cheongsam, videoUrl: cheongsam_vid },
    { id: 9, nameEng: "Clothes", nameMY: 'Pakaian', imageUrl: clothes, videoUrl: clothes_vid },
    { id: 10, nameEng: "Comb", nameMY: 'Sikat', imageUrl: comb, videoUrl: comb_vid },
    { id: 11, nameEng: "Hair Clip", nameMY: 'Klip Rambut', imageUrl: hairclip, videoUrl: hairclip_vid },
    { id: 12, nameEng: "Hairband", nameMY: 'Cekak Rambut', imageUrl: hairband, videoUrl: hairband_vid },
    { id: 13, nameEng: "Handkerchief", nameMY: 'Sarung Tangan', imageUrl: handkerchief, videoUrl: handkerchief_vid },
    { id: 14, nameEng: "Jeans", nameMY: 'Jeans', imageUrl: jeans, videoUrl: jeans_vid },
    { id: 15, nameEng: "Baju Kebaya", nameMY: 'Kebaya', imageUrl: kebaya, videoUrl: kebaya_vid },
    { id: 16, nameEng: "Baju Kurung", nameMY: 'Kurung', imageUrl: kurung, videoUrl: kurung_vid },
    { id: 17, nameEng: "Neck Tie", nameMY: 'Tali Leher', imageUrl: necktie, videoUrl: necktie_vid },
    { id: 18, nameEng: "Pants", nameMY: 'Seluar Panjang', imageUrl: pants, videoUrl: pants_vid },
    { id: 19, nameEng: "Ring", nameMY: 'Cincin', imageUrl: ring, videoUrl: ring_vid },
    { id: 20, nameEng: "Shirt (1)", nameMY: 'Baju', imageUrl: shirt, videoUrl: shirt_vid },
    { id: 21, nameEng: "Shirt (2)", nameMY: 'Kemeja', imageUrl: shirt2, videoUrl: shirt2_vid },
    { id: 22, nameEng: "Shoes", nameMY: 'Kasut', imageUrl: shoes, videoUrl: shoes_vid },
    { id: 23, nameEng: "Singlet, Tank Top", nameMY: 'Singlet', imageUrl: singlet, videoUrl: singlet_vid },
    { id: 24, nameEng: "Slippers", nameMY: 'Selipar', imageUrl: slippers, videoUrl: slippers_vid },
    { id: 25, nameEng: "T-Shirt", nameMY: 'Baju T-Shirt', imageUrl: tshirt, videoUrl: tshirt_vid },
    { id: 26, nameEng: "Track Top", nameMY: 'Baju Trek', imageUrl: tracktop, videoUrl: tracktop_vid },
    { id: 27, nameEng: "Tudung", nameMY: 'Tudung', imageUrl: tudung, videoUrl: tudung_vid },
    { id: 28, nameEng: "Underwear, Briefs", nameMY: 'Seluar Dalam', imageUrl: underwear, videoUrl: underwear_vid },
    { id: 29, nameEng: "Wear (Shirt)", nameMY: 'Pakai (Baju)', imageUrl: wearshirt, videoUrl: wearshirt_vid },
    { id: 30, nameEng: "Wear (Pants)", nameMY: 'Pakai (Seluar)', imageUrl: weartrousers, videoUrl: weartrousers_vid },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    onOpen();
  };

  return (
    <>
      <SidebarComponent>

        <Heading textAlign="center" fontSize={    { base: 'xl', sm: '3xl', md: '5xl' }} paddingBottom="1vh" fontFamily="VeniteAdoremusStraight" style={{ letterSpacing: 3 }}>
          Clothing (Pakaian)
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