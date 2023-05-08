import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/mainService.module.css";
import Head from "next/head";
import Link from "next/link";
import Carousel from "react-grid-carousel";
import { toast } from "react-hot-toast";

const Plain = ({ detailsTransport }) => {
  console.log(detailsTransport)
  const router = useRouter();
  const [loding, setLoding] = useState(true)
  const [transport, setTransport] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/transports/${detailsTransport?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setTransport(data);
        setLoding(false)

      });
  }, []);

  if (loding) {
    return <>
      <div className="w-[100%] h-[100vh] justify-center flex items-center">
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-[#0000004d]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-blue-700"></div>
        </div>
      </div>
    </>
  }

  const BookingNowTransport = () => {
    toast.success("Transport Booking complited")
    router.push('/checkout')
  }

  console.log(detailsTransport)

  return (
    <section>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          Available Transport
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          We provide flexible transport way
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div className="pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">

          <img className="w-[80%] h-[60vh] mx-auto" src={transport?.imageList[0]?.image} alt="transport" lazyLoad={true} />


          <div className="card-body text-black">
            <h2 className="text-left  text-blue-500 font-semibol text-[25px] uppercase font-bold">
              {transport?.transport} : <span className="pl-2 text-[#0aa7eb]">{transport?.title}</span>
            </h2>
            <h2 className="text-left text-lime-500 font-semibol text-[18px] uppercase font-bold">
              Location :    <span className="pl-2 text-[#1acd8f]"> {transport?.location}</span>
            </h2>
            <p className="text-left text-black text-[18px]">{transport?.description?.slice(0, 500)} <span className="text-black">Means of transport are any of the different kinds of transport facilities used to carry people or cargo. They may include vehicles, riding animals, and pack animals. Vehicles may include wagons, automobiles, bicycles, buses, trains, trucks, helicopters, watercraft, spacecraft, and aircraft.</span></p>


            <div className="card-actions justify-between items-center text-black">
              <h1 className="bg-amber-700 p-1 text-white"> Ticket Rates : {transport?.price}</h1>
              <button onClick={BookingNowTransport} className="btn btn-slack-400">
                Booking Now
              </button>
            </div>
          </div>

        </div>
        <div className="block md:gird grid-cols-1 md:grid-cols-3 gap-2 py-10">
          <div className="container">
            <h1 className="text-2xl font-bold text-blue-600 py-5 text-center bg-gray-400 mb-2">Inside Transport Services</h1>
            <Carousel cols={3} rows={1} gap={10} loop className="py-10">

              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[80%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[0]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[60%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[1]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[60%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[2]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>


            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plain;

export const getStaticProps = async (context) => {
  const id = context.params.plain;
  const res = await fetch(
    `http://localhost:5000/api/v1/transports/${id}`
  );
  const data = await res.json();

  return {
    props: {
      detailsTransport: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/transports/"
  );
  const data = await res.json();
  const paths = data?.map((currentLocation) => {
    return {
      params: {
        plain: currentLocation?._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

