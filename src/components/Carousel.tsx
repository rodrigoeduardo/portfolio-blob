import { Box, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Carousel() {
    return (
        <Box align="center">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            slideToClickedSlide={true}
          >
            <SwiperSlide>
              <Image
                src="https://github.com/rodrigoeduardo.png"
                borderRadius="5rem"
                boxSize={350}
              />
              <Text color="gray.900" fontSize="4.8rem" fontWeight="extrabold">
                WEBSITE IBRA
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="normal">
                Desenvolvido com as tecnologias <br /> mais atuais do mercado.
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="semibold">
                https://ibra.vercel.app
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="https://github.com/martinsvinicius.png"
                borderRadius="5rem"
                boxSize={350}
              />
              <Text color="gray.900" fontSize="4.8rem" fontWeight="extrabold">
                WEBSITE IBRA
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="normal">
                Desenvolvido com as tecnologias <br /> mais atuais do mercado.
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="semibold">
                https://ibra.vercel.app
              </Text>
            </SwiperSlide>
            
            <SwiperSlide>
              <Image
                src="https://github.com/joaoifrn.png"
                borderRadius="5rem"
                boxSize={350}
              />
              <Text color="gray.900" fontSize="4.8rem" fontWeight="extrabold">
                WEBSITE IBRA
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="normal">
                Desenvolvido com as tecnologias <br /> mais atuais do mercado.
              </Text>
              <Text color="gray.900" fontSize="1.8rem" fontWeight="semibold">
                https://ibra.vercel.app
              </Text>
            </SwiperSlide>
          </Swiper>
        </Box>
    )
}