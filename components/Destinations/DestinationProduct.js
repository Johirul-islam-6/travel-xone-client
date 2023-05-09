import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import HotelCards from "../HotelCards/HotelCards";
import Card from "../RestaurantCard/card";
import { useState } from "react";

const DestinationProduct = (props) => {
  const singel_location = props?.value
  const [placeID ,setPlaceID] = useState(null)

  // ------dynamic area hotel get--------

  const DynamicArea = (id) => {
    setPlaceID(id)
  }



  return (
    <>
      <section className=" container py-10 mx-auto">
        <div>
          <div>
            <div className="block md:flex lg:flex justify-between gap-5">
              <h2 className="capitalize text-xl md:text-2xl lg:text-3xl">
                Top Restaurants near tour Location :
              </h2>
              {/* ----------- Search Input ----------- */}
              <div className="form-control pt-3 lg:pt-0 md:pt-0">
                <div className="input-group input-group-sm ">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
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
                <div onClick={() => DynamicArea(null)} className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>All</div>
                {
                  singel_location?.places?.map(place => <div onClick={() => DynamicArea(`${place._id}`)}  className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>{place?.name}</div>)
                }
              </div>
              {/*------- Location Button End------- */}
              {/*------- package body Start------- */}
              <section class="py-10 bg-gray-100">
            <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 md:px-0 lg:px-0">
              <Card id={placeID}/>
            </div>
            </section>
        {/*------- package body End------- */}
              {/* ---------pagination Button---------- */}
              <div className="w-full text-center">
                <div className="btn-group gap-2">
                  <input
                    type="radio"
                    name="options"
                    data-title="1"
                    className="btn"
                  />
                  <input
                    type="radio"
                    name="options"
                    data-title="2"
                    className="btn"
                  />
                  <input
                    type="radio"
                    name="options"
                    data-title="3"
                    className="btn"
                  />
                  <input
                    type="radio"
                    name="options"
                    data-title="4"
                    className="btn"
                  />
                </div>
              </div>
            </div >
          </div >
        </div >
      </section >
    </>
  );
};


export default DestinationProduct;
