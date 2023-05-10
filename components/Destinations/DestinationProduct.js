import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import HotelCards from "../HotelCards/HotelCards";
import Card from "../RestaurantCard/card";

const DestinationProduct = (props) => {
  const singel_location = props?.value?.data


  // ------dynamic area hotel get--------

  const DynamicArea = (id) => {
    console.log(id)
  }



  return (
    <>
      <section className=" container py-10 mx-auto">
        <div>
          <div>
            <div className="block md:flex lg:flex justify-between gap-5">
              <h2 className="capitalize text-xl md:text-2xl lg:text-3xl text-[#393838]">
                Top Restaurants near tour Location :
              </h2>
              {/* ----------- Search Input ----------- */}
              <div className="form-control pt-3 lg:pt-0 md:pt-0">
                <div className="input-group input-group-sm ">
                  <p className="text-[#393838] text-[20px]">Discound Offer</p>

                </div>
              </div>
            </div>
            <div className="divider my-1"></div>
          </div>
          <div className="bg-gray-100">
            <div className="">
              <h1 className="text-left text-lg md:text-xl lg:text-2xl font-semibold text-[#1751E4] py-2">
                Area : {singel_location?.area}
              </h1>
              {/*------- features property ------- */}
              <div className="hidden md:block xl:block">
                <div className="flex gap-5">
                  <div className="flex items-center ">
                    <GiLoveHowl className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm text-slate-700">
                      We Price Match
                    </p>
                  </div>
                  <div className="flex items-center">
                    <RiHotelBedLine className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm text-slate-700">
                      Hotel Booking Guarantee
                    </p>
                  </div>
                  <div className="flex items-center">
                    <RiHotelLine className="text-sm text-[#627FF4]" />
                    <p className="pl-2 text-sm text-slate-700">
                      Hotel Stay Guarantee
                    </p>
                  </div>
                </div >
              </div >
              {/*------- features property ------- */}
              {/*------- Location Button Start ------- */}
              <div className="flex-wrap md:flex lg:flex gap-5 mt-2">
              
                {
                  singel_location?.places?.map(place => <div className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>{place?.name}</div>)
                }
              </div>
              {/*------- Location Button End------- */}
              {/*------- package body Start------- */}
              <section class="py-10 bg-gray-100">
            <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 md:px-0 lg:px-0">
              <Card/>
            </div>
            </section>
        {/*------- package body End------- */}
              {/* ---------pagination Button---------- */}

            </div >
          </div >
        </div >
      </section >
    </>
  );
};


export default DestinationProduct;