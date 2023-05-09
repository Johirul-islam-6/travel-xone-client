import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const Opportunity = () => {

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 5);

  }, [])

  return (
    <>
      <section className="py-20 bg-[url('https://i.ibb.co/wrNvq7n/cement-texture.png')]">
        <div className="container mx-auto">
          {/*----- section header -----*/}
          <div className="text-center pb-6 md:pb-10 lg:pb-10">
            <h5 className="text-[#627FF4] font-bold">ABOUT COMPANY</h5>
            <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl text-[#393838]">
              opportunity for travels
            </h1>
          </div>
          {/*----- section header -----*/}
          {/*----- Opportunity section -----*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-5 pb-10 px-10 lg:px-0">
            <div className="relative">
              <Image data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="900"
                src="https://i.ibb.co/mtjVx84/opportunity.png"
                alt="TRAVEL.XONE LOGO"
                width={1000}
                height={667}
                loading="lazy"
                className="w-[100%] h-[100%]"
              />
              <div className="absolute w-[40%] bottom-[-20px] right-[-20px] border shadow-2xl">
                <Image
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1300"
                  src="https://i.ibb.co/59tgj81/opportunity3.png"
                  alt="TRAVEL.XONE LOGO"
                  width={1000}
                  height={450}
                  loading="lazy"
                  className="w-[100%]"
                />
              </div>
            </div>
            <div>
              <h1
                // data-aos="fade-left"
                // data-aos-easing="ease-in-out"
                // data-aos-duration="900"
                className="font-bold text-xl md:text-2xl lg:text-2xl pb-5 text-slate-500">
                Great opportunity for adventure & travels -
              </h1>
              <div>
                <div className="flex py-3">
                  <Image
                    src="https://i.ibb.co/3YnNq5Z/safety.png"
                    alt="TRAVEL.XONE LOGO"
                    width={1000}
                    height={450}
                    loading="lazy"
                    className="mask mask-circle w-16 h-16 hover:animate-spin"
                  />

                  <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="900"
                    className="pl-5">
                    <h1 className="font-bold text-xl">Safety first always</h1>
                    <h5 className="text-lg text-slate-500">
                      Keep your travel plans, including accommodation details,
                      to yourself. Don't hitch hike. Avoid 'seedier' areas of
                      the cities you visit, especially at night.
                    </h5>
                  </div>
                </div>
                <div className="flex py-3">
                  <Image
                    src="https://i.ibb.co/sCV0tMp/price.png"
                    alt="TRAVEL.XONE LOGO"
                    width={1000}
                    height={450}
                    loading="lazy"
                    className="mask mask-circle w-16 h-16 hover:animate-spin bg-slate-200"
                  />

                  <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="900"
                    className="pl-5">
                    <h1 className="font-bold text-xl">Low price & friendly</h1>
                    <h5 className="text-lg text-slate-500">
                      We provide international and domestic tour packages from
                      bangladesh at low prices including best vacation packages
                      in hotels near bangladesh
                    </h5>
                  </div>
                </div>
                <div className="flex py-3">
                  <Image
                    src="https://i.ibb.co/FVT38Ww/travel.png"
                    alt="TRAVEL.XONE LOGO"
                    width={1000}
                    height={450}
                    loading="lazy"
                    className="mask mask-circle w-16 h-16 hover:animate-spin bg-slate-200"
                  />
                  <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="900"
                    className="pl-5">
                    <h1 className="font-bold text-xl">Trusted travel guide</h1>
                    <h5 className="text-lg text-slate-500">
                      If you have an account with Travel Xone, Proceed to Sign
                      in with the Download a brief user guide here or contact
                      travel@xone.org
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*----- Opportunity section -----*/}
        </div>
      </section>
    </>
  );
};

export default Opportunity;
