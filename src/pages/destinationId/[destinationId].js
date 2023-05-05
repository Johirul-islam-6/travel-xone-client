import { HiLocationMarker, HiUsers } from "react-icons/hi";
import {
  AiFillCaretDown,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineLike,
} from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaShoePrints, FaUserAlt, FaUsers } from "react-icons/fa";
import Link from "next/link";
const SingleDestination = () => {
  const bookingsubmit = (e)=>{
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const countryRegion = e.target.countryRegion.value;
    const duration = e.target.duration.value;
    const date = e.target.date.value;
    const Destinationplace = e.target.Destinationplace.value;
    const GroupSize = e.target.GroupSize.value;
    const notes = e.target.notes.value;
    const bookingInfo = {
      fullname,email,phone,countryRegion,duration,date,Destinationplace,GroupSize,notes
    }
    console.log(bookingInfo);
    
    fetch("", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    }).then(res => res.json()).then(data =>{
      console.log(data);
    })
  }
  return (
    <>
      <section>
        {/* ---------- Header Title Part ---------------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-28 md:pt-32 lg:pt-48 pb-4">
          <div className="pl-10 lg:pl-20">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold text-white">
              Hotel Sarina Dhaka
            </h1>
            <div className="text-slate-300 flex items-center ">
              <HiLocationMarker />
              <h2 className="pl-1 w-10/12">
                17 Plot #27 Road Banani C/A, Dhaka City 1213 Bangladesh
              </h2>
            </div>
            <div className="text-slate-300 flex items-center ">
              <AiFillStar className="text-[#e2a04a]" />
              <h2 className="pl-1 w-10/12">5 (3 reviews)</h2>
            </div>
          </div>
        </div>
        {/* -----------------Package Body Part-------------------- */}
        <div className=" px-0 md:px-10 lg:px-10">
          <div className="block md:flex lg:flex justify-between py-10 px-10 md:px-0 lg:px-0 gap-10">
            {/*------- Single Package Details Start------- */}
            {/* -----------------Carousel Start-------------- */}
            <div className="w-full md:w-[70%] lg:w-[3/4]">
              <div className="carousel w-full ">
                <div
                  id="slide2"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    src="https://i.ibb.co/J3jnrYr/2.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide3"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    src="https://i.ibb.co/vc6nJPw/3.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide1"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    src="https://i.ibb.co/SQzBZfJ/1.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------properties--------------- */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center pt-4 ">
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <AiOutlineClockCircle className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Duration</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      <span className="text-[#627FF4]">3</span> days
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaShoePrints className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Tour Type</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      Wild Life
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaUsers className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Group Size</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      <span className="text-[#627FF4]">12</span> Peoples
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <TbWorld className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md">Languages</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      English | Bangla
                    </h2>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              {/* ----------------Tour Details----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Explore Tours
                </h1>
                <h5 className="text-lg text-slate-500">
                  Eum eu sumo albucius perfecto, commodo torquatos consequuntur
                  pro ut, id posse splendide ius. Cu nisl putent omittantur usu,
                  mutat atomorum ex pro, ius nibh nonumy id. Nam at eius
                  dissentias disputando, molestie mnesarchum complectitur per
                  te. In commune pericula mediocritatem per. Cu audiam dolorum
                  appareat per, id habeo suavitate argumentum vel. Te is eros
                  ludus tibique.Iriure evertitur vix cu, ad has dictas mandamus
                  explicari, ne vocibus consectetuer cum. Ea prima perfecto sed.
                  Summo impedit mentitum cum ut. Verear prompta recteque ex vix.
                  No cum quidam antiopam, numquam equidem eam ea. Eos eu hinc
                  doctus interpretaris, quis mucius et ius
                </h5>
              </div>
              {/* ----------------Tour Amenities----------------- */}
              <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Tour Amenities
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Accepts Credit Cards</li>
                    <li>Outdoor Seating</li>
                    <li>Car Parking</li>
                    <li>Reservations</li>
                    <li>Free Coupons</li>
                    <li>Restaurant</li>
                  </h5>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Included
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Visit 7 Best Places</li>
                    <li>Cruise Dinner & Music Event</li>
                    <li>1 Meal Per Day</li>
                    <li>Pick and Drop Services</li>
                  </h5>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Exclude
                  </h1>
                  <h5 className="text-lg text-slate-500">
                    <li>Additional Services</li>
                    <li>Insurance</li>
                    <li>Food & Drinks</li>
                    <li>Tickets</li>
                  </h5>
                </div>
              </div>
              <div className="divider"></div>
              {/* ----------------Tour Location Map----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Location
                </h1>
                <img src="https://i.ibb.co/SxRXRHg/Rectangle-16.png" />
              </div>
              <div className="divider"></div>
              {/* ----------------Review----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Reviews
                </h1>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      <FaUserAlt className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white " />
                      <div className="pl-5">
                        <p className="text-md md:text-lg lg:text-xl">
                          Rakib Hasan
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder & CEO
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between ">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p>1</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      <FaUserAlt className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white " />
                      <div className="pl-5">
                        <p className="text-md md:text-lg lg:text-xl">
                          Rakib Hasan
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder & CEO
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between ">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p>1</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
                {/* --------------- Single reviews -------------- */}
                <div className="border p-5 my-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                      <FaUserAlt className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white " />
                      <div className="pl-5">
                        <p className="text-md md:text-lg lg:text-xl">
                          Rakib Hasan
                        </p>
                        <h1 className="text-sm text-slate-500">
                          Founder & CEO
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-between ">
                      <AiOutlineLike className="text-[#627FF4] " />
                      <p>1</p>
                    </div>
                  </div>
                  <div className="text-[#e2a04a] flex text-lg pt-4">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h1 className="text-md md:text-lg lg:text-xl pb-3">
                    Quality Services
                  </h1>
                  <h2 className="text-lg text-slate-500">
                    We have been on a couple of cycling trips before and this
                    one was probably the best. Tri our guide was outstanding and
                    all our fellow cyclists were a great bunch of people. We got
                    a real flavour of life in Vietnam. Lots of interesting
                    food.The meals were good and plentiful. Thought we would
                    lose weight but didn't! Good
                  </h2>
                  <div className="flex items-center gap-3 pt-2">
                    <h1 className="text-[#627FF4] text-sm">View More</h1>
                    <AiFillCaretDown />
                  </div>
                </div>
              </div>
              <Link href="/">
                <div className="bg-[#3264FF] inline-block p-2 lg:p-3 text-white text-md lg:text-xl ">
                  <h1>Write a Review</h1>
                </div>
              </Link>
            </div>
            {/* -----------------Carousel End-------------- */}
            {/*------- Single Package Details End------- */}
            {/*------- Side Bar Start------- */}
            <div className="w-full md:w-[30%] lg:w-1/4 mt-10 md:mt-0 lg:mt-0 ">
              <div className="pt-20 pb-5 px-5 shadow-lg relative mb-10">
                <div className="flex justify-between bg-[#3264FF] py-3 px-4 absolute top-0 left-0  w-full">
                  <h1 className="text-slate-100 font-semibold text-2xl">
                    $<span> 149.00</span>
                  </h1>
                  <h1 className="text-slate-100">Dhaka</h1>
                </div>
                <h1 className="font-semibold text-2xl">BOOK TOUR</h1>
                <h2 className="text-xl text-slate-600">
                  Find your dream tour today
                </h2>
                <form onSubmit={bookingsubmit}>
                <div className=" my-3">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className=" my-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className=" my-3">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className=" my-3">
                  <input
                    type="text"
                    name="countryRegion"
                    placeholder="Country Region"
                    className="input input-bordered w-full max-w-xs"
                   
                  />
                </div>
                <div className=" my-3">
                  <input
                    type="text"
                    name="Destinationplace"
                    placeholder="Destination Place"
                    className="input input-bordered w-full max-w-xs"
                    
                  />
                </div>
                <div className=" my-3">
                  <h1 className="text-sm text-slate-600 pl-4">Check In :</h1>
                  <input
                    type="date"
                    name="date"
                    placeholder="Check In"
                    className="input input-bordered w-full max-w-xs text-slate-500"
                  />
                </div>
                <div className=" my-3">
                  <select name="duration" className="select select-bordered w-full max-w-xs text-slate-500">
                    <option disabled selected>
                      SELECT DAYS
                    </option>
                    
                    <option>3 days</option>
                    <option>5 days</option>
                    <option>7 days</option>
                    <option>9 days</option>
                  </select>
                </div>
                <div className=" my-3">
                  <input
                    type="number"
                    name="GroupSize"
                    placeholder="Group Size (people)"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className=" my-3">
                  <textarea
                  name="notes"
                    className="textarea textarea-bordered w-full"
                    placeholder="Notes"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Book Noww
                </button>
                </form>
              </div>
              <div className="w-11/12 p-5 border">
                <h1 className="text-2xl ">Tour Information</h1>
                <div className="flex items-center pt-3">
                  <HiUsers className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Max Guests
                    </p>
                    <h1 className="text-lg ">12</h1>
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <FaUserAlt className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Min Age
                    </p>
                    <h1 className="text-lg ">12+</h1>
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <TbWorld className="text-4xl p-2 text-[#1751E4] " />
                  <div className="pl-5">
                    <p className="text-md md:text-lg lg:text-lg text-slate-600">
                      Languages Support
                    </p>
                    <h1 className="text-lg ">English</h1>
                  </div>
                </div>
              </div>
              <div className="w-11/12 pt-5">
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
        </div>
      </section>
    </>
  );
};

export default SingleDestination;
