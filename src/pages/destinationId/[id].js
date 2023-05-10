import { HiLocationMarker, HiUsers } from "react-icons/hi";
import {
  AiFillCaretDown,
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineLike,
} from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FaCaretLeft, FaCaretRight, FaShoePrints, FaUserAlt, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Aos from "aos";


const detailsHostel01 = ({ detailsHotel }) => {
  const { user } = useContext(AuthContext)
  const [singleRevie, setSingleRevie] = useState([])
  const router = useRouter();
  // console.log(detailsHotel.data[0], "This is single data");
  const singelsHotels = detailsHotel?.data[0];

  // console.log("details hotels", detailsHotel.data);
  const pageid = singelsHotels?._id;

  useEffect(() => {
    Aos.init();
  }, [])


  let Review = {}
  if (pageid) {
    useEffect(() => {
      fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/review?id=${pageid}`)
        .then(res => res.json())
        .then(data => {
          if (data) {
            setSingleRevie(data?.data)
            console.log(data, 'pageid')
          }
        })
    }, [pageid])
  }

  const review = (id) => {
    fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/review?id=${id}`)
      .then(res => res.json())
      .then(data => {
        // setReviews(data)
        // console.log(data, 'id')
      })
  }

  const SubmitReview = () => {
    toast.success("user Review successfull")
  }
  const HotelBooking = () => {
    router.push('/dashboard/booking/restaurant')
  }
  // review(pageid);
  const bookingsubmit = (e) => {
    e.preventDefault();
    // console.log(singelsHotels,'hotel');
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const date = e.target.date.value;
    const duration = e.target.duration.value;
    const GroupSize = parseInt(e.target.GroupSize.value);
    const notes = e.target.notes.value;

    const id = singelsHotels?._id;
    const descriptions = singelsHotels?.descriptions;
    const district = singelsHotels?.district;

    const title = singelsHotels?.title;
    const price = singelsHotels?.price;
    const placeID = singelsHotels?.placeID;
    const reviews = singelsHotels?.reviews;
    const tourType = singelsHotels?.tourType;
    const pictureOne = singelsHotels?.pictures[0];
    const pictureTwo = singelsHotels?.pictures[1];
    const pictureThree = singelsHotels?.pictures[2];

    const bookingInfo = {
      fullname,
      email,
      phone,

      duration,
      date,

      GroupSize,
      notes,
      id,
      descriptions,
      district,
      title,
      price,
      placeID,
      reviews,
      tourType,
      pictureOne,
      pictureTwo,
      pictureThree

    };


    fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/bookings`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("user Booking Hotel successfull");
        router.push(`dashboard/booking/restaurant`);

      });
  };
  const handleReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const designation = e.target.designation.value;
    const title = e.target.title.value;
    const message = e.target.message.value;
    const id = singelsHotels?._id;
    const email = e.target.email.value;
    console.log(name, designation, title, message, id);
    const reviewInfo = {
      name, designation, title, message, id, rating: 5, email
    }

    fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/review`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }



  return (

    <>

      <section>
        {/* ---------- Header Title Part ---------------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-28 md:pt-32 lg:pt-48 pb-4">
          <div className="pl-10 lg:pl-20">
            <h1
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              className="text-xl md:text-2xl lg:text-3xl  font-bold text-white">
              Hotel {singelsHotels?.placeName} Dhaka
            </h1>
            <div className="text-slate-300 flex items-center ">
              <HiLocationMarker />
              <h2 className="pl-1 w-10/12">{singelsHotels?.district}</h2>
            </div>
            <div className="text-slate-300 flex items-center ">
              <AiFillStar className="text-[#e2a04a]" />
              <h2 className="pl-1 w-10/12">
                5 ({singelsHotels?.reviews} reviews)
              </h2>
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
                  id="slide1"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[2]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle text-white bg-slate-700">
                      <FaCaretLeft />
                    </a>
                    <a href="#slide2" className="btn btn-circle text-white bg-slate-700">
                      <FaCaretRight />
                    </a>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[0]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      â®
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      â¯
                    </a>
                  </div>
                </div>
                <div
                  id="slide3"
                  className="carousel-item relative w-full h-full md:h-[30%] lg:h-[50%]"
                >
                  <img
                    loading="lazy"
                    src={singelsHotels?.pictures[1]}
                    className="w-full h-[40vh] md:h-[65vh]"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      â®
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      â¯
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
                    <h1 className="text-sm lg:text-md dark:text-black">Duration</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      <span className="text-[#627FF4]">
                        {singelsHotels?.duration}
                      </span>{" "}
                      days
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaShoePrints className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md dark:text-black">Tour Type</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      {singelsHotels?.tourType}
                    </h2>
                  </div>
                </div>
                {/* -----single card---- */}
                <div className=" flex mx-auto rounded items-center">
                  <div className="hover:shadow-lg">
                    <FaUsers className="border text-3xl lg:text-5xl p-1 lg:p-3 text-slate-600" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-sm lg:text-md dark:text-black">Group Size</h1>
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
                    <h1 className="text-sm lg:text-md dark:text-black">Languages</h1>
                    <h2 className="text-md lg:text-lg font-light text-slate-500">
                      {singelsHotels?.language}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              {/* ----------------Tour Details----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  {singelsHotels?.title}
                </h1>
                <h5 className="text-lg text-slate-500">
                  {singelsHotels?.descriptions}
                </h5>
              </div>
              {/* ----------------Tour Amenities----------------- */}
              <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                    Highlights
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
                <img
                  loading="lazy"
                  src="https://i.ibb.co/SxRXRHg/Rectangle-16.png"
                />
              </div>
              <div className="divider"></div>
              {/* ----------------Review----------------- */}
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 pb-2">
                  Reviews
                </h1>
                {/* --------------- Single reviews -------------- */}
                {
                  singleRevie?.map(review => {
                    return (
                      <div key={review._id} className="border p-5 my-7">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-between">
                            {/* <FaUserAlt className=" " /> */}
                            <img
                              loading="lazy"
                              className="rounded-full bg-[#3D3D3D] text-6xl p-2 text-white w-20 h-20"
                              src="https://media.licdn.com/dms/image/D5603AQFAv-ZfyGJC6A/profile-displayphoto-shrink_400_400/0/1680587786974?e=1687996800&v=beta&t=Q7DRuXsOW-EXKMx1-eOOP3dE-vOuWz8gBkh_jba7lhE"
                              alt=""
                            />
                            <div className="pl-5">
                              <p className="text-md md:text-md lg:text-xl text-black">
                                {review.name}
                              </p>
                              <h1 className="text-sm text-slate-500">
                                {review.designation}
                              </h1>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center justify-between cursor-pointer">
                            <AiOutlineLike className="text-[#627FF4] " />
                            <p className="text-[#627FF4] ">10.5k</p>
                          </div>
                        </div>
                        <div className="text-[#e2a04a] flex text-lg pt-4">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <h1 className="text-md md:text-lg lg:text-xl pb-3 dark:text-black">
                          {review.title}
                        </h1>
                        <h2 className="text-lg text-slate-500">
                          {review.message}
                        </h2>
                      </div>
                    )
                  })
                }
              </div>
              <label htmlFor="my-modal-3" className="btn">Write Your Review</label>

              {/* ---------------------------------Modal for Review--------------------------- */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
                  <form onSubmit={handleReview}>
                    <div className="p-5 md:p-16 lg:p-16">
                      <div className="form-control py-1 ">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered text-start text-md text-md"
                          required
                        />
                      </div>
                      <div className="form-control py-1 ">
                        <input
                          type="email"
                          name="email"
                          value={user?.email}
                          placeholder="email"
                          className="input input-bordered text-start text-md text-md"
                        />
                      </div>
                      <div className="form-control py-1 ">
                        <input
                          type="text"
                          name="designation"
                          placeholder="Designation"
                          className="input input-bordered text-start text-md"
                          value={singelsHotels?.title}
                          disabled
                        />
                      </div>

                      <div className="form-control py-1 ">
                        <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          className="input input-bordered text-start text-md"
                          required
                        />
                      </div>
                      <div className="form-control py-1  border rounded-lg mt-3">
                        <textarea
                          name="message"
                          className="textarea text-start text-md"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <h2 className="text-start text-md font-semibold text-sky-500 text-xl mt-5">
                        Provide Ratings
                      </h2>
                      <div className="rating my-4 block text-start text-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <div className="form-control py-1  mt-6">
                        <input onClick={SubmitReview}
                          className="btn border-none text-white font-semibold"
                          type="submit"
                          value="SUBMIT"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* -----------------Carousel End-------------- */}
            {/*------- Single Package Details End------- */}
            {/*------- Side Bar Start------- */}
            <div
              className="w-full md:w-[30%] lg:w-1/4 mt-10 md:mt-0 lg:mt-0 ">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="900"
                className="pt-20 pb-5 px-5 shadow-lg relative mb-10">
                <div className="flex justify-between bg-[#3264FF] py-3 px-4 absolute top-0 left-0  w-full">
                  <h1 className="text-slate-100 font-semibold text-2xl">
                    $<span> 149.00</span>
                  </h1>
                  <h1 className="text-slate-100">Dhaka</h1>
                </div>
                <h1 className="font-semibold text-2xl dark:text-black">BOOK TOUR</h1>
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
                      value={user?.email}
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
                    <h1 className="text-sm text-slate-600 pl-4">Check In :</h1>
                    <input
                      type="date"
                      name="date"
                      placeholder="Check In"
                      className="input input-bordered w-full max-w-xs text-slate-500"
                    />
                  </div>
                  <div className=" my-3">
                    <select
                      name="duration"
                      className="select select-bordered w-full max-w-xs text-slate-500"
                    >
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
                  <button onClick={HotelBooking}
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Book Now
                  </button>
                </form>
              </div>
              <div className="w-11/12 p-5 border">
                <h1 className="text-2xl dark:text-black">Tour Information</h1>
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
                      loading="lazy"
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
        {
          Review?.s ? <button>ami</button> : 'nai'
        }
      </section>
    </>
  );
};

export default detailsHostel01;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://travel-xone-server.vercel.app/api/v1/hotels?_id=${id}`
  );
  const data = await res.json();

  return {
    props: {
      detailsHotel: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://travel-xone-server.vercel.app/api/v1/hotels/"
  );
  const data = await res.json();
  const paths = data?.data?.map((currentLocation) => {
    return {
      params: {
        id: currentLocation?._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
