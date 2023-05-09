import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

const Transport = () => {
  const [transport, setTransport] = useState();
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/v1/transports/`)
        .then((res) => res.json())
        .then((data) => {
          setTransport(data);
          setLoding(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <Head>
        <title>Transport Page</title>
      </Head>

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
      <div className="container mx-auto py-10 ">
        <Carousel cols={3} rows={1} gap={10} loop className="py-10">
          {transport?.map((t) => (
            <Carousel.Item>
              <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                <figure className="w-[100%] h-[60%]">
                  <img
                    className="w-[100%] h-[37vh]"
                    src={t?.img}
                    alt="transport"
                    lazyLoad={true}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-left text-xl text-blue-500 font-semibold ">
                    {t?.transport}{" "}
                    <span className="pl-2 text-[#1acd8f]">{t?.location}</span>
                  </h2>
                  <p className="text-left">
                    {t?.description?.slice(0, 110)}...
                  </p>

                  <div className="card-actions justify-between items-center">
                    <h1>Price is : {t?.price}</h1>
                    <button className="btn btn-slack-400">
                      <Link href={`/transports/${t?._id}`}>view Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Transport;
