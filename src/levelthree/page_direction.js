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

import above from "../phrasesData/page_direction/above.jpg";
import back from "../phrasesData/page_direction/back.jpg";
import direction from "../phrasesData/page_direction/direction.jpg";
import east from "../phrasesData/page_direction/east.jpg";
import far from "../phrasesData/page_direction/far.jpg";
import front from "../phrasesData/page_direction/front.jpg";
import here from "../phrasesData/page_direction/here.jpg";
import left from "../phrasesData/page_direction/left.jpg";
import near from "../phrasesData/page_direction/near.jpg";
import north from "../phrasesData/page_direction/north.jpg";
import right from "../phrasesData/page_direction/right.jpg";
import side from "../phrasesData/page_direction/side.jpg";
import south from "../phrasesData/page_direction/south.jpg";
import there from "../phrasesData/page_direction/there.jpg";
import under from "../phrasesData/page_direction/under.jpg";
import west from "../phrasesData/page_direction/west.jpg";

import above_vid from "../phrasesData/page_direction/above.mp4";
import back_vid from "../phrasesData/page_direction/back.mp4";
import direction_vid from "../phrasesData/page_direction/direction.mp4";
import east_vid from "../phrasesData/page_direction/east.mp4";
import far_vid from "../phrasesData/page_direction/far.mp4";
import front_vid from "../phrasesData/page_direction/front.mp4";
import here_vid from "../phrasesData/page_direction/here.mp4";
import left_vid from "../phrasesData/page_direction/left.mp4";
import near_vid from "../phrasesData/page_direction/near.mp4";
import north_vid from "../phrasesData/page_direction/north.mp4";
import right_vid from "../phrasesData/page_direction/right.mp4";
import side_vid from "../phrasesData/page_direction/side.mp4";
import south_vid from "../phrasesData/page_direction/south.mp4";
import there_vid from "../phrasesData/page_direction/there.mp4";
import under_vid from "../phrasesData/page_direction/under.mp4";
import west_vid from "../phrasesData/page_direction/west.mp4";

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

export function PageDirection() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signs = [
    { id: 1, nameEng: 'Front', nameMY: 'Depan', imageUrl: front, videoUrl: front_vid },
    { id: 2, nameEng: "Back", nameMY: 'Belakang', imageUrl: back, videoUrl: back_vid },
    { id: 3, nameEng: 'Right', nameMY: 'Kanan', imageUrl: right, videoUrl: right_vid },
    { id: 4, nameEng: "Left", nameMY: 'Kiri', imageUrl: left, videoUrl: left_vid },
    { id: 5, nameEng: "North", nameMY: 'Utara', imageUrl: north, videoUrl: north_vid },
    { id: 6, nameEng: "East", nameMY: 'Timur', imageUrl: east, videoUrl: east_vid },
    { id: 7, nameEng: "West", nameMY: 'Barat', imageUrl: west, videoUrl: west_vid },
    { id: 8, nameEng: "South", nameMY: 'Selatan', imageUrl: south, videoUrl: south_vid },
    { id: 9, nameEng: "Above, On top of", nameMY: 'Atas', imageUrl: above, videoUrl: above_vid },
    { id: 10, nameEng: "Under", nameMY: 'Bawah', imageUrl: under, videoUrl: under_vid },
    { id: 11, nameEng: "Near", nameMY: 'Dekat', imageUrl: near, videoUrl: near_vid },
    { id: 12, nameEng: "Far", nameMY: 'Jauh', imageUrl: far, videoUrl: far_vid },
    { id: 13, nameEng: "Here", nameMY: 'Sini', imageUrl: here, videoUrl: here_vid },
    { id: 14, nameEng: "There", nameMY: 'Sana', imageUrl: there, videoUrl: there_vid },
    { id: 15, nameEng: "Side", nameMY: 'Tepi', imageUrl: side, videoUrl: side_vid },
    { id: 16, nameEng: "Direction", nameMY: 'Arah', imageUrl: direction, videoUrl: direction_vid },
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    onOpen();
  };

  return (
    <>
      <SidebarComponent>

        <Heading textAlign="center" fontSize={    { base: 'xl', sm: '3xl', md: '5xl' }} paddingBottom="1vh" fontFamily="VeniteAdoremusStraight" style={{ letterSpacing: 3 }}>
          Direction (Arah)
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