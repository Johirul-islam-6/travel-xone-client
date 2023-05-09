import styles from "../../src/styles/home_style/hero.module.css";
import { FaAward, FaPlaneDeparture, FaRegWindowClose, FaWalking } from "react-icons/fa";
import { BiCommentCheck } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Aos from "aos";
import { Link } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
// import { RootContext } from "@/context/RootContext";


const Hero = () => {

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const CloseModal = () => {
    setShowMessage(false);
    console.log(showMessage)
  }

  const router = useRouter()

  useEffect(() => {
    Aos.init();
  }, [])




  return (
    <>

      {
        showMessage && <>
          <div className=" w-[80%] border-2 border-[#0743c4] md:w-[40%]  h-[50vh] md:h-[60vh] bg-[#ffffff] justify-center flex fixed  z-[1000] md:left-[29%] left-[10%] top-[27%] mx-auto">


            <p onClick={CloseModal} className="text-red-700 text-3xl bg-gray-800 hover:text-red-600 
            font-extrabold pl-3 pt-2"> <FaRegWindowClose className="" /></p>


            <div class=" bg-gray-800 px-3 md:px-4 py-2 flex flex-col justify-center items-center">

              <h1 class="mt-2 md:mt-0 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800  md:w-9/12 lg:w-7/12 dark:text-white">Welcome to Our Travel.Xone</h1>
              <p class="mt-5 text-base leading-normal text-center text-gray-600 md:w-10/12 lg:w-9/12 dark:text-white">Travel writers submit pieces for publication in magazines, blogs, travel brands' websites, newsletters, and other print or digital outlets. They may pen feature stories, first-person articles, blog posts, listicles, itineraries, or contribute to ongoing columns.</p>
              <div class="mt-5 md:mt-8 w-full flex justify-center">
                <button onClick={CloseModal} class="dark:text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">I Agre</button>
              </div>
            </div>


          </div>


        </>
      }

      <section className="Section01 text-center">
        {/* The button to open modal */}
        <div
          className={`${styles.heroBg} flex justify-center items-center md:h-[95vh] h-[120vh]`}
        >
          <div className="container">

            <h1 className="text-xl md:text-3xl lg:text-5xl hidden md:block text-[#ede7e7]  font-bold uppercase md:mb-60">
              Your World of Joy
            </h1>


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
