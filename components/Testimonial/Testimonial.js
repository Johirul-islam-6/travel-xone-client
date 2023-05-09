import React from "react";
import first from "../../components/Images/adventure_image/first.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import img from "../../components/Images/adventure_image/339351546_895936248174932_5406107033861634028_n.png";
import user from "../../components/Images/adventure_image/avatarimg.png";
import user1 from "../../components/Images/adventure_image/avatarimg2.png";
import user2 from "../../components/Images/adventure_image/avatarimg3.png";

const Testimonial = () => {
  return (
    <div className="sticky grid grid-cols-1 md:grid-cols-2 max-w-screen-xl m-auto py-20 items-center">
      <div>
        <Image className="w-[80%] mx-auto" src={img} alt="image" />
      </div>
      <div>
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
          <SwiperSlide>
            <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-2 lg:gap-3">
              <div className="text-sky-500 font-bold text-4xl md:text-5xl lg:text-6xl text-end">99</div>
              <div className="col-span-4">
                <h1 className="text-justify text-black font-semibold text-xl lg:text-2xl mt-4">
                  Excellent Service and Experience
                </h1>
                <div className="flex">
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                </div>
                <p className="text-justify text-slate-600 font-normal text-lg font-sans mt-3 divide-y mb-4">
                  I had an amazing experience with Journey Perfect. The quality
                  of service provided was exceptional. The team went above and
                  beyond to ensure my trip was enjoyable and hassle-free. They
                  took care of all the details and made sure I had a memorable
                  journey.
                </p>
                <span className="text-black">
                  <hr />
                </span>
                <div className="mt-4 text-start flex items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image width={60} height={60} src={user} alt="user" />
                    </div>
                  </div>
                  <div className="text-start ml-3">
                    <h3 className="text-black text-lg text-start font-bold">
                     Nazmul Islam
                    </h3>
                    <h3 className="text-slate-400 text-lg text-start font-semibold">
                      Frequent Traveler
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-2 lg:gap-3">
              <div className="text-sky-500 font-bold text-4xl md:text-5xl lg:text-6xl text-end">99</div>
              <div className="col-span-4">
                <h1 className="text-justify text-black font-semibold text-xl lg:text-2xl mt-4">
                Unforgettable Vacation
                </h1>
                <div className="flex">
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                </div>
                <p className="text-justify text-slate-600 font-normal text-lg font-sans mt-3 divide-y mb-4">
                My vacation with Journey Perfect was absolutely incredible. The services provided were of top-notch quality, and I couldn't have asked for a better experience. The attention to detail and personalized touch made the trip truly unforgettable.
                </p>
                <span className="text-black">
                  <hr />
                </span>
                <div className="mt-4 text-start flex items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image width={60} height={60} src={user1} alt="user" />
                    </div>
                  </div>
                  <div className=" text-start ml-3">
                    <h3 className="text-black text-lg text-start font-bold">
                    Sumit Roy
                    </h3>
                    <h3 className=" text-slate-400 text-lg text-start font-semibold">
                    Adventurer & Travel Enthusiast
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-2 lg:gap-3">
              <div className="text-sky-500 font-bold text-4xl md:text-5xl lg:text-6xl text-end">99</div>
              <div className="col-span-4">
                <h1 className="text-justify text-black font-semibold text-xl lg:text-2xl mt-4">
                Exceptional Customer Service
                </h1>
                <div className="flex">
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">
                    <AiFillStar />
                  </span>
                </div>
                <p className="text-justify text-slate-600 font-normal text-lg font-sans mt-3 divide-y mb-4">
                I had an incredible experience with Journey Perfect. The quality of their services was outstanding, and the customer service provided was truly exceptional. I highly recommend Journey Perfect for anyone seeking a memorable and hassle-free travel experience.
                </p>
                <span className="text-black">
                  <hr />
                </span>
                <div className="mt-4 text-start flex items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image width={60} height={60} src={user2} alt="user" />
                    </div>
                  </div>
                  <div className=" text-start ml-3">
                    <h3 className="text-black text-lg text-start font-bold">
                      Rana Talukdar
                    </h3>
                    <h3 className=" text-slate-400 text-lg text-start font-semibold">
                    Travel Enthusiast
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
