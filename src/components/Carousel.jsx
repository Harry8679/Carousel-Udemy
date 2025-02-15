import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Images du carousel
const slides = [
  { id: 1, url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww", title: "Champ" },
  { id: 2, url: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww", title: "Forêt" },
  { id: 3, url: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D", title: "Champignon" },
  { id: 4, url: "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww", title: "Montagnes" },
];

const Carousel = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center items-center">
            <div className="relative w-full h-96">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-4 text-lg font-semibold">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;