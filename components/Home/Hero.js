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
          <div className=" w-[80%] border-2 border-[#0743c4] md:w-[40%] md:py-5 md:px-3 h-[50vh] md:h-[60vh] bg-[#ffffff] justify-center flex fixed  z-[1000] md:left-[29%] left-[10%] top-[27%] mx-auto">


            <p onClick={CloseModal} className="text-red-700 text-3xl hover:text-red-600 
            font-extrabold pl-3 pt-2"> <FaRegWindowClose className="" /></p>


            <div className="flex-1 flex justify-center relative navbar-center pl-2">
              <div className="block">
                <div className="cursor-pointer flex mx-auto md:w-[60%]">
                  <Image
                    src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                    alt="TRAVEL.XONE LOGO"
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="content text-[#3a3a3a]">
                  <h1 className="text-center text-2xl py-2">WelCome Sir, Our Travel.xone</h1>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae aliquam repellat, pariatur explicabo nesciunt vel consectetur autem sit. Numquam voluptas saepe hic dignissimos eaque officia, labore voluptate vitae quibusdam atque nulla quia sunt repellat. Mollitia ab minus perspiciatis sunt!</p>


                  <div className="flex justify-center pt-10">
                    <button onClick={CloseModal} className="btn border-4 flex justify-center  bg-white border-indigo-200 border-y-indigo-500" >Ok I Agree</button>
                  </div>

                </div>
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
