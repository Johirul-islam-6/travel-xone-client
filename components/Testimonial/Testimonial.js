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
import user from '../../components/Images/adventure_image/tutor-8-3.jpg'


const Testimonial = () => {
  return (
    <div className="sticky grid grid-cols-1 md:grid-cols-2 max-w-screen-xl m-auto py-20 gap-8">
      <div>
        <Image className="w-full" src={img} alt="image" />
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
            <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">
              <div className="text-sky-500 font-bold text-6xl text-end ">
                99
              </div>
              <div className="col-span-4">
                <h1 className="text-justify text-black font-semibold text-2xl mt-4">
                  Your name
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam possimus maiores, commodi autem optio quidem!
                </p>
                <span className="text-black">
                  <hr />
                </span>
                <div className="mt-4 text-start flex items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image width={60} height={60} src={first} alt="user" />
                    </div>
                  </div>
                  <div className=" text-start ml-3">
                    <h3 className="text-black text-lg text-start font-bold">Jhon Doe</h3>
                    <h3 className=" text-slate-400 text-lg text-start font-semibold">Founder & CEO</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">
              <div className="text-sky-500 font-bold text-6xl text-end ">
                99
              </div>
              <div className="col-span-4">
                <h1 className="text-justify text-black font-semibold text-2xl mt-4">
                Quality Services
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam possimus maiores, commodi autem optio quidem!
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
                  <div className=" text-start ml-3">
                    <h3 className="text-black text-lg text-start font-bold">Jhon Doe</h3>
                    <h3 className=" text-slate-400 text-lg text-start font-semibold">Founder & CEO</h3>
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
