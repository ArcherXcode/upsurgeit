import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import Div from '../Div';

const partnerLogos = [
  { src: '/images/clientLogo/1.png', alt: 'Partner' },
  { src: '/images/clientLogo/2.png', alt: 'Partner' },
  { src: '/images/clientLogo/3.png', alt: 'Partner' },
  { src: '/images/clientLogo/4.png', alt: 'Partner' },
  { src: '/images/clientLogo/5.png', alt: 'Partner' },
  { src: '/images/clientLogo/6.png', alt: 'Partner' },
  { src: '/images/clientLogo/7.png', alt: 'Partner' },
  { src: '/images/clientLogo/8.png', alt: 'Partner' },
  { src: '/images/clientLogo/9.png', alt: 'Partner' },
  { src: '/images/clientLogo/10.png', alt: 'Partner' },
  { src: '/images/clientLogo/11.png', alt: 'Partner' },
  { src: '/images/clientLogo/12.png', alt: 'Partner' },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5} // Adjust the number of logos visible at a time
        spaceBetween={20} // Space between slides
        autoplay={{
          delay: 1000, // Delay between transitions
          disableOnInteraction: false,
        }}
        loop={true} // Infinite loop
      >
        {partnerLogos.map((partnerLogo, index) => (
          <SwiperSlide key={index}>
            <div className="cs-partner_logo">
              <img src={partnerLogo.src} alt={partnerLogo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
}
