import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from './SliderItem';

export function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      slideToClickedSlide={true}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <SliderItem
            isActive={isActive}
            title="WEBSITE IBRA"
            description="Desenvolvido com as tecnologias mais atuais do mercado."
            imgSrc="assets/images/portfolio/mockup-ibra.svg"
          />
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <SliderItem
            isActive={isActive}
            title="WEBSITE IBRA"
            description="Desenvolvido com as tecnologias mais atuais do mercado."
            imgSrc="https://github.com/rodrigoeduardo.png"
          />
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <SliderItem
            isActive={isActive}
            title="WEBSITE IBRA"
            description="Desenvolvido com as tecnologias mais atuais do mercado."
            imgSrc="https://github.com/rodrigoeduardo.png"
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
}
