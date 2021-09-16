import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#0D0712',
      '900-80': '#0D071280',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '100-50': '#D1D2DC50',
      '50': '#EEEEF2',
    },
    purple: {
      '800': '#15091F',
      '300': '#805AD5',
    }
  },
  fonts: {
    heading: 'Bubbble, Arial, sans-serif',
    body: 'Bubbble, Arial, sans-serif',
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        scrollBehavior: 'smooth'
      },
      body: {
        bg: 'gray.900',
        color: 'gray.100'
      },
    },
  },
});
