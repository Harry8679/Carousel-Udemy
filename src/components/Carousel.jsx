import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Images du carousel
const slides = [
  { id: 1, url: "https://source.unsplash.com/random/800x600?nature", title: "Nature" },
  { id: 2, url: "https://source.unsplash.com/random/800x600?city", title: "City Life" },
  { id: 3, url: "https://source.unsplash.com/random/800x600?technology", title: "Technology" },
  { id: 4, url: "https://source.unsplash.com/random/800x600?travel", title: "Travel" },
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