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
import user from "../../components/Images/adventure_image/tutor-8-3.jpg";

const Testimonial = () => {
  return (
    <section className="bg-[#F7FAFC] py-20 px-2 md:px-20 lg:px-20">
      <div className="container mx-auto">
        {/*----- section header -----*/}
        <div className="text-center pb-12 md:pb-10 lg:pb-10">
          <h5 className="text-[#627FF4] font-bold">OUR TESTIMONIALS</h5>
          <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
          <h1 className="font-bold text-2xl md:text-4xl text-[#01061b] lg:text-4xl">
            customers feedback
          </h1>
        </div>
        {/*----- section header -----*/}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto sticky-top items-center">
          <div>
            <img
              className="w-[70%] mx-auto"
              src="https://i.ibb.co/jHTWrKm/Rectangle-35.png"
              alt="Testimonial image"
            />
          </div>
          <div className="shadow-xl">
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
                  <div className="text-[#627FF4] font-bold text-5xl text-end ">
                    99
                  </div>
                  <div className="col-span-4">
                    <h1 className="text-justify text-black font-semibold text-xl mt-4">
                      Absolutely Amazing
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
                    <h5 className="text-justify text-slate-600 font-normal text-md font-sans mt-3 divide-y mb-4">
                      Sundarbans is awesome forest. My favorite tour place. Few
                      years ago, I have visited Sundarbans with my full family.
                    </h5>
                    <span className="text-black">
                      <hr />
                    </span>
                    <div className="mt-4 text-start flex items-center">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src="https://i.ibb.co/ZVmL1Tf/photo-1557862921-37829c790f19.jpg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className=" text-start ml-3">
                        <h3 className="text-black text-lg text-start ">
                          Md.Rakibul Islam
                        </h3>
                        <p className=" text-slate-400 text-sm text-start ">
                          Founder & CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">
                  <div className="text-[#627FF4] font-bold text-5xl text-end ">
                    99
                  </div>
                  <div className="col-span-4">
                    <h1 className="text-justify text-black font-semibold text-xl mt-4">
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
                    <h5 className="text-justify text-slate-600 font-normal text-md font-sans mt-3 divide-y mb-4">
                      Really charming place, enjoy the food and local people
                      culture, and more. Your are welcome to Dhaka, Bangladesh.
                      Lets Share Trip
                    </h5>
                    <span className="text-black">
                      <hr />
                    </span>
                    <div className="mt-4 text-start flex items-center">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src="https://i.ibb.co/HB7Q1FD/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className=" text-start ml-3">
                        <h3 className="text-black text-lg text-start ">
                          Md.Minhaz Rahman
                        </h3>
                        <p className=" text-slate-400 text-sm text-start ">
                          Senior Executive
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
