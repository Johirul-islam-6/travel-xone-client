import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

const Transport = () => {
  const [transport, setTransport] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-ridoymia.vercel.app/transports`)
      .then((res) => res.json())
      .then((data) => {
        setTransport(data);
      });
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
                <figure>
                  <img src={t?.images[0]} alt="Shoes" lazyLoad={true}/>
                </figure>
                <div className="card-body">
                  <h2 className="text-left text-xl text-primary-focus font-semibold">
                    {t?.Destinations}
                  </h2>
                  <p className="text-left">{t?.Descriptions.slice(0, 60)}...</p>

                  <div className="card-actions justify-between items-center">
                    <h1>Price is : {t?.Price}</h1>
                    <button className="btn btn-slack-400">
                      <Link href={`/transport/${t?.id}`}>Book Now</Link>
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
