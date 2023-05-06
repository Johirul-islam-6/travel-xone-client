import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import HotelCards from "../HotelCards/HotelCards";

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
            <div className="block md:flex lg:flex justify-between gap-5 px-5 md:px-10 lg:px-10">
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
          <div className="bg-[#F7FAFC] bg-[url('https://i.ibb.co/VS7dF4B/bg-1.png')] bg-auto bg-no-repeat bg-right-top">
            <div className="p-5 md:p-10 lg:p-10">
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
                <div onClick={() => DynamicArea(`${place._id}`)} className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>All</div>
                {
                  singel_location?.places?.map(place => <div className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>{place?.name}</div>)
                }
              </div>
              {/*------- Location Button End------- */}
              {/*------- package body Start------- */}
              <div className="block md:flex lg:flex justify-between py-10 px-10 md:px-0 lg:px-0 gap-8">
                {/*------- Packages Start------- */}
                <div className="grid gap-8 grid-clos-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-8/12 lg:w-9/12">
                  {/*------- card hotel package Start------- */}

                  <HotelCards />


                  {/*------- card hotel package End------- */}
                </div >
                {/*------- Packages End------- */}
                {/*------- Side Bar Start------- */}
                <div className="w-full md:w-[30%] lg:w-1/4 mt-10 md:mt-0 lg:mt-0 ">
                  <div className="bg-[#777676] p-5 rounded-md">
                    <h1 className="text-slate-100 font-semibold text-2xl">
                      Sort By Filter
                    </h1>
                    <h2 className="text-slate-100">
                      Find your dream tour today
                    </h2>
                    <div className=" my-3">
                      <select className="select select-bordered w-full max-w-xs text-[#4b4a4a]">
                        <option disabled selected>
                          SELECT DESTINATION
                        </option>
                        <option>Dhaka City</option>
                        <option>Lalbagh Fort</option>
                        <option>Ahasan Manzil</option>
                        <option>Panamnagar</option>
                        <option>Sonargaon</option>
                        <option>Shalban Vihara</option>
                      </select>
                    </div>
                    <div className=" my-3">
                      <select className="select select-bordered w-full max-w-xs text-[#4b4a4a]">
                        <option disabled selected>
                          SELECT DAYS
                        </option>
                        <option>All</option>
                        <option>3 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                        <option>9 days</option>
                      </select>
                    </div>
                    <div className=" my-3">
                      <select className="select select-bordered w-full max-w-xs text-[#4b4a4a]">
                        <option disabled selected>
                          SELECT RATINGS
                        </option>
                        <option>1 Star</option>
                        <option>2 Star</option>
                        <option>3 Star</option>
                        <option>4 Star</option>
                        <option>5 Star</option>
                      </select>
                    </div>
                    <div className=" my-3">
                      <select className="select select-bordered w-full max-w-xs text-[#4b4a4a]">
                        <option disabled selected>
                          SELECT FACILITY
                        </option>
                        <option>Accepts Credit Cards</option>
                        <option>Free Coupons</option>
                        <option>Private Tour</option>
                        <option>Free Wifi</option>
                        <option>Parking</option>
                        <option>Reservation</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center w-11/12 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold">
                      Free cancellation
                    </h1>
                    <h5 className="text-xl text-[#48484d]">
                      You'll receive a full refund if you cancel at least 24
                      hours in advance of most experiences.
                    </h5>
                  </div>
                  <div className="w-11/12 mx-auto">
                    <h1 className="text-2xl font-semibold text-center">
                      Top Destinations
                    </h1>
                    <div className="bg-base-100 pt-3">
                      <figure>
                        <img
                          src="https://i.ibb.co/hKv86BY/New-Project-4.png"
                          alt="Shoes"
                        />
                      </figure>
                      <h2 className="text-center py-1">SUNDERBANS</h2>
                    </div>
                    <div className="bg-base-100 pt-3">
                      <figure>
                        <img
                          src="https://i.ibb.co/x3h8Fhf/New-Project-5.png"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="">
                        <h2 className="text-center py-1">KUAKATA SEA BEATCH</h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/*------- Side Bar End------- */}
              </div>
              {/*------- package body End------- */}
              {/* ---------pagination Button---------- */}
              <div className="w-full text-center lg:w-[73%] ">
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
