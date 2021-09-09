import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Carousel() {
    return (
        <Box color="red" maxW="400px" marginX="auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            centeredSlides={true}
            focusableElements="button"
            initialSlide={1}
            slideToClickedSlide={true}
          >
            <SwiperSlide>
              <Image
                src="https://github.com/martinsvinicius.png"
                borderRadius="50%"
                boxSize={40}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                  src="https://github.com/rodrigoeduardo.png"
                  borderRadius="50%"
                  boxSize={40}
                />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://github.com/joaoifrn.png"
                borderRadius="50%"
                boxSize={40}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
    )
}