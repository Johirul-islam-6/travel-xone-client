import styles from "../../src/styles/home_style/hero.module.css";
import { FaAward, FaPlaneDeparture, FaRegWindowClose, FaWalking } from "react-icons/fa";
import { BiCommentCheck } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
// import { RootContext } from "@/context/RootContext";


const Hero = () => {

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);


  const router = useRouter()

  useEffect(() => {
    Aos.init();
  }, [])






  return (
    <>

      <section className="Section01 text-center">
        {/* The button to open modal */}
        <div
          className={`${styles.heroBg} flex justify-center items-center w-[100vw] h-[100vh] md:h-[95vh]  md:px-10`}
        >
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-2 item-center mt-10">

            <div className="text  items-center pl-5 hidden md:flex">
              <div className="block items-center">
                <h1
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="900"
                  className={`${styles.text_font01} text-xl text-start md:text-3xl lg:text-5xl hidden md:block text-[#ede7e7]  font-bold uppercase`}>
                  Your World of Joy
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                  className={` ${styles.text_font} pt-8 w-10/12  text-[#ffffff] text-start font-sans text-[21px]`}> Travel writers submit pieces for publication in magazines, blogs, travel brands' websites, newsletters, and other print or digital outlets. They may pen feature stories, first-person articles, blog posts, listicles, itineraries, or contribute to ongoing columns.</p>
                <div className="flex mt-8">
                  <Link href={'/blogs'}>  <button
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1300"
                    className="bg-[#026bdc] px-16 py-5">Travel</button> </Link>

                </div>
              </div>
            </div>

            <div className="relative items-center flex justify-center md:mt-5">
              <Image data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-duration="900"
                src="https://i.ibb.co/JBJ90Ky/4-K-Travel-Wallpaper-HD-Free-download.jpg"
                alt="TRAVEL.XONE LOGO"
                width={700}
                height={667}
                loading="lazy"
                className="w-[75%] h-[50vh] rounded-md"
              />
              <div className="absolute h-[65%] w-[45%] bottom-[-30px] right-[20px] border shadow-2xl">
                <Image
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1300"
                  src="https://i.ibb.co/sJ1NSJT/4-K-Travel-Pictures.jpg"
                  alt="TRAVEL.XONE LOGO"
                  width={500}
                  height={600}
                  loading="lazy"
                  className="w-[100%] h-[100%]"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------- Card Section down home------------ */}
      <section className="flex justify-center items-center w-[100%] py-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center w-[70%]">
          {/* -----single card---- */}
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="900"
            className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaWalking className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-[25px] text-[#504f4f] font-mono font-bold">3500+</h2>
              <div className="text-sm font-light text-slate-500">
                Happy Travelars
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="900"
            className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaPlaneDeparture className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl text-[25px] text-[#504f4f] font-mono font-bold">1650+</h2>
              <div className="text-sm font-light text-slate-500">
                Tours success
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="900"
            className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <BiCommentCheck className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl text-[25px] text-[#504f4f] font-mono font-bold">99.5% </h2>
              <div className="text-sm font-light text-slate-500">
                Positive Reviews
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="900"
            className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaAward className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl text-[25px] text-[#504f4f] font-mono font-bold">62k+</h2>
              <div className="text-sm font-light text-slate-500">
                Awards Winning
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
