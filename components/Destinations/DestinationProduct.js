import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";



const DestinationProduct = (props) => {
  const singel_location = props?.value?.data
  const [placeId, setPlace] = useState();
  const [loding, setLoding] = useState(true);
  const [hotelAll, sethotelAll] = useState()
  const [hotehotelCetagory, sethotelCetagory] = useState()
  let [cetagoryId, setcetagoryId] = useState('643c2ace24a8114c69217528')
  // '643c2ace24a8114c69217528'


  const DynamicArea = (id) => {
    setcetagoryId(id)

  }

  // ------dynamic area hotel get--------
  useEffect(() => {
    fetch(`https://travel-xone-server.vercel.app/api/v1/hotels?placeID=${cetagoryId}`)
      .then(res => res.json())
      .then(data => {
        sethotelAll(data.data)
        setLoding(false)

      })
  }, [cetagoryId]);

  useEffect(() => {
    fetch(`https://travel-xone-server.vercel.app/api/v1/hotels/`) //?placeID=643c2ace24a8114c69217529
      .then(res => res.json())
      .then(data => {
        sethotelCetagory(data.data)
        setLoding(false)
      })
  }, []);

  // cetagory hotel place name


  if (loding) {
    return <>
      <div className="w-[100%] h-[100vh] justify-center flex items-center">
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-[#0000004d]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-blue-700"></div>
        </div>
      </div>
    </>
  }

  console.log(cetagoryId)

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
                <div onClick={() => DynamicArea('643c2ace24a8114c69217528')} className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>All</div>
                {
                  hotehotelCetagory?.map(place => <div onClick={() => DynamicArea(place?.placeID)} className={`bg-slate-100 text-zinc-500 py-1 px-2 rounded hover:bg-[#627FF4] hover:text-white shadow text-sm my-2 md:my-0 lg:my-0 cursor-pointer`}>{place?.placeName}</div>)
                }
              </div>
              {/*------- Location Button End------- */}
              {/*------- package body Start------- */}
              <section class="py-10 bg-gray-100">
                <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 md:px-0 lg:px-0">
                  {/* <Card value={hotelQuary} /> */}
                  {
                    cetagoryId ? <>
                      {
                        hotelAll?.map(hotel => {
                          return (
                            <article key={hotel?._id} class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                              <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                  <img
                                    src={hotel?.pictures[0]}
                                    alt="Hotel Photo"
                                  />
                                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5 text-yellow-400"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span class="ml-1 text-sm text-slate-400">{hotel?.reviews}</span>
                                  </div>
                                  <div class="absolute bottom-3 right-3 inline-flex items-center text-white scale-75 hover:scale-100 p-2 border border-white rounded-full transition duration-200 ease-linear">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg>
                                  </div>
                                </div>

                                <div class="mt-1 p-2">
                                  <h2 class="text-slate-700">{hotel?.title.slice(0, 25)}</h2>
                                  <p class="mt-1 text-sm text-slate-400">{hotel?.placeName}</p>

                                  <div class="mt-3 flex items-end justify-between">
                                    <p class="text-lg font-bold text-blue-500">TK <span className="text-lg text-[#ce7c00]">{hotel?.price}</span></p>

                                    <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                      </svg>
                                      <Link href={`/destinationId/${hotel?._id}`}>
                                        <button class="text-sm">Book Now</button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </article>
                          )
                        })
                      }
                    </> : <>
                      hello

                    </>
                  }



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
