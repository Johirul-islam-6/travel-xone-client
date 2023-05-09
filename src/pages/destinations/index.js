import React, { useState } from 'react';
import classNames from "classnames";
import Link from 'next/link';
import axios from '../../../hooks/hook.axios'

const Destinations = ({ location }) => {
    
    let locations = [...location?.data]
    locations.shift()
    
    const overlayClass = classNames("absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500");
    return (
        <>
            
            <section className="bg-[#F7FAFC] py-20">
                <div className="container mx-auto">
                    {/*----- section header -----*/}
                    <div className="text-center pb-6 md:pb-10 lg:pb-10">
                        <h5 className="text-[#627FF4] font-bold">DESTINATION</h5>
                        <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
                            go exotic places
                        </h1>
                    </div>
                    {/*----- section header -----*/}
                    {/*----- Location Container -----*/}
                    <div className="block md:flex lg:flex px-10 lg:px-0">

                        
                        <div  className="w-full md:w-[131%] lg:max-w-[33.3%] group relative">
                            <img src="https://i.ibb.co/ByXW3K0/location10.png" />
                            <div className={`${overlayClass}`}>
                                <Link href={`/destinations/${locations[0]._id}`}  className="cursor-pointer" >
                                    <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                    {location.data[0].area}
                                    </h1>
                                </Link>
                            </div>
                        </div>

                        <div>
                        <div className="grid grid-cols-2">
                            {locations.map(item=>{
                                return( 
                                    
                                    <div  key={item._id} className="group relative">
                                        <img src={item.img} />
                                        <Link href={`/destinations/${item._id}`}   className="cursor-pointer" >
                                            <div className={`${overlayClass}`}>
                                                <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                   {item.area}
                                                </h1>
                                            </div>
                                        </Link>
                                    </div>
                                

                                )}) 
                            }
                            </div>
                        </div>
                    </div>
                    {/*----- Location Container -----*/}
                </div>
            </section>
        </>
    );
};

export default Destinations;

export const getServerSideProps = async () => {
    const res = await axios.get('/api/v1/locations');
   
    return {
        props: {
            location: res.data
        }
    }
}