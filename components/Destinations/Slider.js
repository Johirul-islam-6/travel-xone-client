import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Slider = () => {
  return (
    <>
      <section className="pt-24">
        <div className="container mx-auto">
          <div className="">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              <div className="">
                <SwiperSlide>
                  <div>
                    <img
                      src="https://i.ibb.co/qnw7Tf0/slider3.png"
                      alt="slider"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img
                      src="https://i.ibb.co/Fg7v0dC/slider2.png"
                      alt="slider"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img
                      src="https://i.ibb.co/4VN8XqF/slider1.png"
                      alt="slider"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
