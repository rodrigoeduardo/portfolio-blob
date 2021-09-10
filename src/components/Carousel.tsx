import { Box, Image } from "@chakra-ui/react";

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
                boxSize={400}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="https://github.com/martinsvinicius.png"
                borderRadius="5rem"
                boxSize={400}
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image
                src="https://github.com/joaoifrn.png"
                borderRadius="5rem"
                boxSize={400}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
    )
}