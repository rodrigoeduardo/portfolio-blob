import { ChakraProvider } from '@chakra-ui/react';

import '../styles/font.css';
import '../styles/carousel.css';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from '../styles/theme';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        pauseOnHover
        draggable
        closeOnClick
        theme="colored"
        style={{fontSize: "160%"}}
      />
    </ChakraProvider>
  );
}

export default MyApp;
