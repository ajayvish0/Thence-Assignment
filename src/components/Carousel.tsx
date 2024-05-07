// import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Carousel = () => {
  const data: string[] = [
    "Enhance fortune 50 company's insights team researcch capbilities",
    "Enhance fortune 50 company's insights team researcch capbilities",
    "Enhance fortune 50 company's insights team researcch capbilities",
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper   h-[250px] text-left"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="text-4xl font-medium mt">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
