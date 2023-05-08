import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    AiFillStar,
    AiOutlineClockCircle,
    AiOutlineUser,
    IconName,
} from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";

const HotelCards = (props) => {

    const [cityArea, setCityArea] = useState()
    const [hotelAll, sethotelAll] = useState()
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        fetch(`https://travel-xone-server.vercel.app/api/v1/hotels/`)
            .then(res => res.json())
            .then(data => {
                sethotelAll(data.data)
                setLoding(false)
            })
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



    return (

        <  >
            {
                hotelAll?.slice(0, 9).map(hotel => {
                    return <>
                        <div key={hotel?.price} className="card bg-base-100 shadow-xl " >
                            <figure>
                                <img loading='lazy'
                                    src={hotel?.pictures[0]}
                                    alt="hotel-Image"
                                    className="scale-100 hover:scale-125 object-fill transition-transform duration-700 ease-in-out h-[25vh] w-[100%]"
                                />
                            </figure>
                            <div className="w-full card-actions items-center justify-between bg-slate-950 pl-2">
                                <h1 className="text-slate-100 text-[20px] font-bold">
                                    TK <span className="text-lg text-[#ce7c00]">{hotel?.price}</span>
                                </h1>
                                <Link href={`/destinationId/${hotel?._id}`}>
                                    <button className={`text-slate-100 bg-[#1751E4] p-2 hover:bg-slate-100 hover:shadow hover:text-[#1751E4]`}>Book Now</button>
                                </Link>
                            </div>
                            <div className="px-3 pt-1 pb-3">
                                <p className=" text-[18px] font-semibold text-[#48484d]">
                                    {hotel?.title.slice(0, 25)}
                                </p>
                                <h2 className=" text-lg text-slate-600 py-1">
                                    {hotel?.descriptions.slice(0, 99)}
                                </h2>
                                <div>
                                    <div className="flex justify-between pt-1">
                                        <div className="flex gap-2 items-center text-sm">
                                            <BiLocationPlus className="hover:text-[#627FF4]" />
                                            <p className="text-slate-500">{hotel?.placeName}</p>
                                        </div>
                                        <div className="flex gap-2 items-center text-sm pr-4">
                                            <AiOutlineClockCircle className="hover:text-[#627FF4]" />
                                            <p className="text-slate-500">
                                                <span className="text-slate-950 font-bold px-1 rounded-full mr-1 bg-amber-600">
                                                    {hotel?.duration}
                                                </span>
                                                Days
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between ml-1">
                                        <div className="flex gap-0 items-center">
                                            <AiFillStar className="text-[#e7b62f] text-md" />
                                            <AiFillStar className="text-[#e7b62f] text-md" />
                                            <AiFillStar className="text-[#e7b62f] text-md" />
                                            <AiFillStar className="text-[#e7b62f] text-md" />
                                            <AiFillStar className="text-[#e7b62f] text-md" />
                                        </div>
                                        <div className="flex gap-2 items-center text-sm">
                                            <AiOutlineUser className="hover:text-[#627FF4]" />
                                            <p className="text-slate-500">
                                                <span className="text-slate-950 font-bold px-1 rounded-full mr-1 bg-white">
                                                    {hotel?.group_size}
                                                </span>
                                                Peoples
                                            </p>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >

                    </>
                })
            }

        </ >
    );
};

export default HotelCards;