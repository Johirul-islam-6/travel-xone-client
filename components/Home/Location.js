import Aos from "aos";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Aos from "aos";


const Location = () => {

  const [locationid, setlocationId] = useState('');
  const id1 = "643c2ace24a8114c69217526"
  const id2 = "643c2b61f7c5a823c7ca6272"
  const id3 = "643c2bce11de3a4be5df416f"
  const id4 = "643c2c61f97a9e7ae141b4a1"
  const id5 = "643c3117e049fd5186b59ae1"

  useEffect(() => {
    Aos.init()
  }, [])

  const overlayClass = classNames(
    "absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500"
  );



  return (
    <>
      <section className="bg-[#F7FAFC] py-20">
        <div className="container mx-auto">
          {/*----- section header -----*/}
          <div className="text-center pb-6 md:pb-10 lg:pb-10">
            <h5 className="text-[#627FF4] font-bold">DESTINATION</h5>
            <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl text-[#393838]">
              go exotic places
            </h1>
          </div>

          {/*----- section header -----*/}
          {/*----- Location Container -----*/}
          <div className="block md:flex lg:flex px-10 lg:px-0">

            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="900"
              className="w-full md:w-[131%] lg:max-w-[33.3%] group relative">

              <Image

                src="https://i.ibb.co/ByXW3K0/location10.png"
                alt="TRAVEL.XONE LOGO"
                width={600}
                height={450}
                loading="lazy"
              />
              <a href={`/destinations/${id1}`}>
                <div className={`${overlayClass}`}>
                  <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded hover:cursor-pointer">
                    North West Region
                  </h1>
                </div>
              </a>
            </div>

            <div>
              <div className="flex">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="900"
                  className="group relative">
                  <Image
                    src="https://i.ibb.co/JnXHGqk/Ahasan-manjill.png"
                    alt="TRAVEL.XONE LOGO"
                    width={600}
                    height={450}
                    loading="lazy"
                  />

                  <Link
                    href={`/destinations/643c2b61f7c5a823c7ca6272`}
                    className="cursor-pointer"
                  >
                    <div className={`${overlayClass}`}>
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        Central Region
                      </h1>
                    </div>
                  </Link>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                  className="group relative">
                  <Image
                    src="https://i.ibb.co/yq1cb38/cox-bazer.png"
                    alt="TRAVEL.XONE LOGO"
                    width={600}
                    height={450}
                    loading="lazy"
                  />

                  <div

                    className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c2bce11de3a4be5df416f`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South East Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  // data-aos="zoom-in-right"
                  // data-aos-easing="ease-in-out"
                  // data-aos-duration="1200"
                  className="group relative">
                  <Image
                    src="https://i.ibb.co/DQz7210/jaflong.png"
                    alt="TRAVEL.XONE LOGO"
                    width={600}
                    height={450}
                    loading="lazy"
                  />

                  <div className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c2c61f97a9e7ae141b4a1`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        North East Region
                      </h1>
                    </Link>
                  </div>
                </div>
                <div
                  // data-aos="fade-left"
                  // data-aos-easing="ease-in-out"
                  // data-aos-duration="1200"
                  className="group relative">
                  <Image
                    src="https://i.ibb.co/zxmNYFc/Sundarban.png"
                    alt="TRAVEL.XONE LOGO"
                    width={600}
                    height={450}
                    loading="lazy"
                  />

                  <div className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c3117e049fd5186b59ae1`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South West Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*----- Location Container -----*/}
        </div>
      </section>
    </>
  );
};




// -------------- Server site API -------------
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
  const data = await res.json();

  return {
    props: {
      post: data
    }
  }
}

export const getStaticPaths = async () => {

  const res = await fetch("https://travel-xone-server.vercel.app/api/v1/location/643c2ace24a8114c69217526");
  const data = await res.json();
  console.log("hello", data);
  const paths = data?.map(post => {
    return {
      params: {
        postId: `${post?.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export default Location;


