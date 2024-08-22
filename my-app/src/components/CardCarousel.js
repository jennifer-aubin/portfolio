import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import des styles principaux de Swiper
import 'swiper/css/effect-coverflow'; // Styles pour Coverflow
import 'swiper/css/pagination'; // Styles pour Pagination
import 'swiper/css/navigation'; // Styles pour Navigation

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Cardcard({ title, description, color }) {
  return (
    <div className="cardstyle" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

const CardCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 1000,
        depth: 2,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <Cardcard title="Front-End" description="Skills in React, Vue, CSS, etc." color="#ffadad" />
      </SwiperSlide>
      <SwiperSlide>
        <Cardcard title="Back-End" description="Skills in Node.js, Django, Databases, etc." color="#ffd6a5" />
      </SwiperSlide>
      <SwiperSlide>
        <Cardcard title="DevOps" description="Skills in Docker, CI/CD, Cloud, etc." color="#fdffb6" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;
