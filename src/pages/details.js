import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineWatchLater, MdGroups2 } from "react-icons/md";
import { FaHandHoldingMedical, FaShoePrints } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiChatDownloadFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import styles from '../styles/mainService.module.css';


const details = () => {
    const [data, setData] = useState({});
    let ami;
    useEffect(() => {
        fetch('single.json').then(res => res.json()).then(data => {
            setData(data)
            ami = data?.pictures[0]
        })
    }, [])
    return (
        <section className="px-7 py-5 bg-base-100">
            <div className="px-8">
                <div className="text-left">
                    <h2 className="text-left text-2xl font-bold">{data?.name}</h2>
                    <div className="flex items-center py-5">
                        <p className="flex items-center"><  AiFillStar className="text-yellow-300 text-xl" /> 5  <span className="text-blue-600 px-3 text-sm">{data?.revies}</span></p>
                        <p className="pl-5">{data?.district}</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 ">
                    <div>
                        <img className={styles.MainImg} src={data?.pictures} loading="lazy"/>
                    </div>
                    <div>
                        <img className="w-70 h-30 mb-3" src={data?.pictures} loading="lazy" />
                        <img className="w-70 h-30" src={data?.pictures} loading="lazy"/>
                    </div>
                    <div>
                        <img className="w-70 h-30 mb-3" src={data?.pictures} loading="lazy"/>
                        <img className="w-70 h-30" src={data?.pictures} loading="lazy"/>
                    </div>
                </div>
                {/* // text section */}
                <div className="grid sm:grid-cols-3 md:grid-cols-4">
                    <div className="col-span-3">
                        <div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 py-5 gap-4">


                                <div className="flex rounded-lg py-3 px-3 justify-evenly items-center bg-gray-400 drop-shadow-lg">
                                    <div className="border border-indigo-600 py-3 px-3">
                                        <MdOutlineWatchLater className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h2 className="font-bold">Duration</h2>
                                        <p>{data?.duration}</p>
                                    </div>
                                </div>
                                <div className="flex rounded-lg py-3 px-3 justify-evenly items-center bg-gray-400 drop-shadow-lg">
                                    <div className="border border-indigo-600 py-3 px-3">
                                        <FaShoePrints className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h2 className="font-bold">Tour Type</h2>
                                        <p>{data?.duration}</p>
                                    </div>
                                </div>
                                <div className="flex rounded-lg py-3 px-3 justify-evenly items-center bg-gray-400 drop-shadow-lg">
                                    <div className="border border-indigo-600 py-3 px-3">
                                        <MdGroups2 className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h2 className="font-bold">Group Size</h2>
                                        <p>{data?.duration}</p>
                                    </div>
                                </div>
                                <div className="flex rounded-lg py-3 px-3 justify-evenly items-center bg-gray-400 drop-shadow-lg">
                                    <div className="border border-indigo-600 py-3 px-3">
                                        <GrLanguage className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h2 className="font-bold">Language</h2>
                                        <p>{data?.duration}</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h2 className="text-left font-semibold text-2xl py-5">About this tour</h2>
                            <p className="pb-5 mb-5 text-left">{data?.description}</p>
                            <h2 className="text-left font-semibold text-2xl">Highlights</h2>
                            <div className="flex items-center pl-20 py-1">
                                <MdVerified className="text-blue-800" />
                                <p>Visit eight villages showcasing Polynesian culture</p>
                            </div>
                            <div className="flex items-center pl-20 py-1">
                                <MdVerified className="text-blue-800" />
                                <p>Visit eight villages showcasing Polynesian culture</p>
                            </div>
                            <div className="flex items-center pl-20 py-1">
                                <MdVerified className="text-blue-800" />
                                <p>Visit eight villages showcasing Polynesian culture</p>
                            </div>
                            <div className="flex items-center pl-20 py-1 pb-8">
                                <MdVerified className="text-blue-800" />
                                <p>Visit eight villages showcasing Polynesian culture</p>
                            </div>
                            <hr ></hr>
                            <h2 className="text-left font-semibold text-2xl py-5">Included/Excluded</h2>
                            <div className="flex items-center">
                                <div>
                                    <div className="flex items-center pl-20 py-1 ">
                                        <MdVerified className="text-blue-800" />
                                        <p>Visit eight villages showcasing Polynesian culture</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1 ">
                                        <MdVerified className="text-blue-800" />
                                        <p>Visit eight villages showcasing Polynesian culture</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1 ">
                                        <MdVerified className="text-blue-800" />
                                        <p>Visit eight villages showcasing Polynesian culture</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1 pb-8">
                                        <MdVerified className="text-blue-800" />
                                        <p>Visit eight villages showcasing Polynesian culture</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pl-20 py-1 ">
                                        <RxCross1 className="text-red-800 font-semibold" />
                                        <p>Additional Services</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1">
                                        <RxCross1 className="text-red-800 font-semibold" />
                                        <p>Insurance</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1 ">
                                        <RxCross1 className="text-red-800 font-semibold" />
                                        <p>Drink</p>
                                    </div>
                                    <div className="flex items-center pl-20 py-1 pb-8">
                                        <RxCross1 className="text-red-800 font-semibold" />
                                        <p>Tickets</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-left font-semibold text-2xl py-5">Duration</h2>
                            <div className="flex justify-left items-center">
                                <div className="flex items-center pl-20 py-1 pb-8">
                                    <MdOutlineWatchLater className="text-red-800 font-semibold" />
                                    <p>3-5 hours</p>
                                </div>
                                <div className="flex items-center  py-1 pb-8 px-12">
                                    <MdOutlineWatchLater className="text-red-800 font-semibold" />
                                    <p>5-7 hours</p>
                                </div>
                                <div className="flex items-center  py-1 pb-8">
                                    <MdOutlineWatchLater className="text-red-800 font-semibold" />
                                    <p>Multi days</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-left font-semibold text-2xl py-5">Language</h2>
                            <div className="flex justify-left items-center">
                                <div className="flex items-center pl-20 py-1 pb-8">
                                    <GrLanguage className="text-red-800 font-semibold" />
                                    <p className="px-3">English</p>
                                </div>
                                <div className="flex items-center  py-1 pb-8 px-12">
                                    <GrLanguage className="text-red-800 font-semibold" />
                                    <p className="px-3">Bangla</p>
                                </div>

                            </div>
                        </div>
                        <hr></hr>
                        <h2 className="text-left font-semibold text-2xl py-5">Frequently asked questions</h2>
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium text-left flex items-center">
                                        <RiChatDownloadFill /> Focus me to see content
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-left">tabIndex={0} attribute is necessary to make the div focusable</p>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse my-2 collapse-plus border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium text-left flex items-center">
                                        <RiChatDownloadFill />  Focus me to see content
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-left">tabIndex={0} attribute is necessary to make the div focusable</p>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium text-left flex items-center">
                                        <RiChatDownloadFill />  Focus me to see content
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-left">tabIndex={0} attribute is necessary to make the div focusable</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" mx-5 mt-8 drop-shadow-lg bg-gray-300">
                            <div className="flex justify-between items-center bg-blue-800 px-5 py-3">
                                <h2 className="text-3xl text-base-200">${data?.price}</h2>
                                <p className="text-2xl text-base-200">{data?.PlaceName}</p>
                            </div>
                            <div className="px-5">
                                <h1 className="text-2xl text-left pt-2">BOOK TOUR</h1>
                                <p className="text-left pb-2">find your dream today</p>
                                <form className="py-5">
                                    <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                    <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                    <input type="text" placeholder="Country" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                    <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                   <div className="flex justify-between items-center">
                                   <input type="text" placeholder="Check in" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                    <input type="text" placeholder="Check out" className="input input-bordered w-full max-w-xs mb-1 text-left" />
                                   </div>
                                    <select className="select select-bordered w-full max-w-xs mb-1">
                                        <option disabled selected>Group size</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                    </select>
                                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Notes"></textarea>
                                    <button className="bg-blue-800 w-full py-3 text-base-200 rounded-xl" type="submit">Book now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default details;

