// theme.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'lg', // rounded corners
    },
    variants: {
      solid: (props) => ({
        bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.500',
        color: 'white',
      }),
    },
  },
  Link: {
    baseStyle: {
      color: 'teal.500',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
};

export default extendTheme({ colors, components });
