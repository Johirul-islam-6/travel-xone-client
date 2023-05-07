import styles from "../../src/styles/home_style/hero.module.css";
import { FaAward, FaPlaneDeparture, FaWalking } from "react-icons/fa";
import { BiCommentCheck } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { RootContext } from "@/context/RootContext";
import Link from "next/link";


const Hero = () => {
  const { user } = useContext(RootContext)
  const [singelServeics, setServices] = useState("Toure");
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBooking] = useState();
  const [singelUser, setUser] = useState({
    name: "Rasel",
    email: "rasel@gmail.com"
  });

  const router = useRouter()

  // input value resive state
  const [location, setLocation] = useState('')
  const [TO, setTO] = useState('')
  const [JDate, setJDate] = useState('')
  const [RDate, setRDate] = useState('')
  const [Member, setMember] = useState('')
  const [hotelLocation, setHotelLocation] = useState('')
  const [HotelName, setHotelName] = useState('')
  const [Flight, setFlight] = useState('')
  const [FlightDate, setFlightDate] = useState('')



  const [hotels, setHotels] = useState('');


  const HomeServecesClick = (value) => {
    setServices(value)
  }

  // --------------post data serversite tourist data---------

  const handelLocation = (e) => {
    const field = e?.target?.value
    setLocation(field)
  }
  const handelTO = (e) => {
    const field = e?.target?.value
    setTO(field)
  }
  const handelJDate = (e) => {
    const field = e?.target?.value
    setJDate(field)
  }
  const handelRDate = (e) => {
    const field = e?.target?.value
    setRDate(field)
  }
  const handelHotelLocation = (e) => {
    const field = e?.target?.value
    setHotelLocation(field)
  }
  const handelMember = (e) => {
    const field = e?.target?.value
    setMember(field)
  }
  const handelHoteName = (e) => {
    const field = e?.target?.value
    setHotelName(field)
  }
  const handelFlight = (e) => {
    const field = e?.target?.value
    setFlight(field)
  }
  const handelFlightDate = (e) => {
    const field = e?.target?.value
    setFlightDate(field)
  }

  // ------------hotel data----------

  useEffect(() => {
    fetch(`https://travel-xone-server.vercel.app/api/v1/hotels/`)
      .then(res => res.json())
      .then(data => setHotels(data))

  }, [])



  const SubmitTourestData = event => {

    setShowModal(true)

    const bookingMember = {
      name: "Rasel Khan",
      email: "rasel@gmail.com",
      phone: "018282312",
      FromLocation: location,
      ToLocation: TO,
      JarnyDate: JDate,
      ReturnDate: RDate,
      Member: Member,
      HotelName: HotelName,
      HotelPlaces: hotelLocation,
      Flight: Flight,
      FlightDate: FlightDate,
    }
    setBooking(bookingMember)
    console.log(bookingMember)


  }

  // ----confirm booking ----
  const confirmBooking = (e) => {

    e.preventDefault();
    const targetValue = e?.target;
    const names = targetValue?.name?.value;
    const email = targetValue?.email?.value;
    const formLocation = targetValue?.fLocation?.value;
    const tolocations = targetValue?.tLocation?.value;
    const JarnyDate = targetValue?.jdate?.value;
    const ReturnDate = targetValue?.rdate?.value;
    const Members = parseFloat(targetValue?.member?.value);
    const phone = parseFloat(targetValue?.phone?.value);
    const FlightL = targetValue?.flight?.value;
    const FJDT = targetValue?.fjd?.value;
    const HotelN = targetValue?.hotelname?.value;
    const HotelL = targetValue?.hotellocation?.value;

    const bookingMember = {
      name: names,
      email: email,
      phone: phone,
      FromLocation: formLocation,
      ToLocation: tolocations,
      JarnyDate: JarnyDate,
      ReturnDate: ReturnDate,
      Member: Members,
      HotelName: HotelN,
      HotelPlace: HotelL,
      Flight: FlightL,
      FlightJurnyDate: FJDT
    }
    console.log("show booking", bookingMember)

    try {
      fetch('http://localhost:5000/api/v1/sbooking', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(bookingMember)
      })
        .then(result => result.json())
        .then(data => {
          console.log(data)
          if (data) {
            toast.success('Your Booking successfuly ')
            targetValue.reset()
            setShowModal(false)
          } else {
            console.log(data)
            toast.error(error)
          }

        })
    } catch (error) {
      toast.error(error)
    }


  }


  // console.log(hotels?.data)
  console.log("user", singelUser)
  return (
    <>

      <section className="Section01 text-center">
        {/* The button to open modal */}
        <div
          className={`${styles.heroBg} flex justify-center items-center md:h-[95vh] h-[120vh]`}
        >
          <div className="container">

            <h1 className="text-xl md:text-3xl lg:text-5xl hidden md:block text-[#ede7e7]  font-bold uppercase md:mb-60">
              Your World of Joy
            </h1>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3 top_div w-[60%] md:w-[30%] px-2 text-[#000000c9] font-semibold rounded-t-full bg-[#ffffffe5] absolute mx-auto z-10 top-[27%] md:top-[45.5%] ">
                <div className="top_text grid justify-center items-center py-6 border-b-4 hover:border-amber-600 cursor-pointer">
                  <h1 onClick={(event) => HomeServecesClick("Toure")} className="font-sans text-[16px] font-bold">Toure</h1>
                </div>
                <div className="top_text grid justify-center items-center py-6 hover:border-b-4  hover:border-amber-600 cursor-pointer">
                  <h1 onClick={(event) => HomeServecesClick("Flight")} className="font-sans text-[16px] font-bold">Flight</h1>
                </div>
                <div className="top_text grid justify-center items-center py-6 hover:border-b-4  hover:border-amber-600 cursor-pointer">
                  <h1 onClick={(event) => HomeServecesClick("Hotel")} className="font-sans text-[16px] font-bold">Hotel</h1>
                </div>
              </div>

              {/* ----submin---- */}
              <from className="hidden md:grid  top_div w-[60%] md:w-[30%] px-2 text-[#010101] font-semibold rounded-b-full bg-[#ffffffe5]  absolute mx-auto z-10 top-[27%] md:top-[80.0%] ">
                <div className="top_text grid justify-center items-center py-6 cursor-pointer w-[100%] ">
                  {/* <button htmlFor="my-modal-6" className='btn text-black hover:bg-white bg-white w-full cursor-pointer' >open modal</button> */}
                  <button
                    className=" text-black hover:bg-[#ffffff00] bg-[#ffffffe5]w-full cursor-pointer px-20 border-none"
                    type="button"
                    onClick={SubmitTourestData}
                  >
                    Submit
                  </button>


                  {
                    showModal ? <>
                      <d
                        iv
                        className="justify-center items-center hidden md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl pt-16">
                          {/*content*/}
                          <form onSubmit={confirmBooking}>
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-black">
                                  Travel<span className="text-blue-600">.Xone</span>
                                </h3>
                                <button
                                  className="p-1 ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/* -------------------- User Condition base --------------- */}
                              {
                                singelUser?.phone ?
                                  <>
                                    {/* start modal  body*/}
                                    <div className="relative p-6 flex-auto">
                                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Travel takes us out of our comfort zones and inspires us to see,  try new things.
                                      </p>
                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your name Is :</span>
                                          </label>
                                          <input name="name" type="text" defaultValue={bookingData?.name} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your Email Is :</span>
                                          </label>
                                          <input name="email" type="text" defaultValue={bookingData?.email} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your From :</span>
                                          </label>
                                          <input name="fLocation" type="text" defaultValue={bookingData?.FromLocation} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your From To :</span>
                                          </label>
                                          <input name="tLocation" type="text" defaultValue={bookingData?.ToLocation} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">Journey Date is :</span>
                                          </label>
                                          <input name="jdate" type="text" defaultValue={bookingData?.JarnyDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">Return Date is:</span>
                                          </label>
                                          <input name="rdate" type="text" defaultValue={bookingData?.ReturnDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your Phone is :</span>
                                          </label>
                                          <input name="phone" type="text" defaultValue={bookingData?.phone} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your Members is:</span>
                                          </label>
                                          <input name="member" type="text" defaultValue={bookingData?.Member} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">

                                          <label className="label">
                                            <span className="label-text">Flight Journey Date:</span>
                                          </label>
                                          <input name="fjd" type="text" defaultValue={bookingData?.FlightDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">Journey Location:</span>
                                          </label>
                                          <input name="flight" type="text" defaultValue={bookingData?.Flight} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your Hotel Location:</span>
                                          </label>
                                          <input name="hotellocation" type="text" defaultValue={bookingData?.HotelPlaces} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                            <span className="label-text">your Hotel Name :</span>
                                          </label>
                                          <input name="hotelname" type="text" defaultValue={bookingData?.HotelName} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                        </div>
                                      </div>

                                    </div>
                                    {/*modal footer*/}
                                    <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">

                                      <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit" value="Submit"
                                        onClick={() => confirmBooking}
                                      >
                                        Confirm Booking
                                      </button>

                                    </div>
                                  </>
                                  : <>
                                    <div className="relative p-6 flex-auto ">
                                      <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                                        Travel takes us out of our comfort zones and inspires us to see,  try new things.
                                      </p>

                                      <h1 className="text-[#ef2323]">You Aren't a Valid User Our Treval.Xon</h1>
                                      <h1 className="text-[#2391eb]">Please sign up Now.</h1>
                                      <div className="flex w-full py-10">

                                        <div className="grid h-20 flex-grow card bg-[#fff] rounded-box place-items-center">
                                          <span class="relative flex h-12 w-32">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-12 w-52 bg-sky-500 ">
                                              <Link href={'/login'} className="text-center ml-10 mt-3 text-[#fff]">LOGIN</Link> </span>

                                          </span>

                                        </div>
                                        <div className="divider divider-horizontal">OR</div>
                                        <div className="grid h-20 flex-grow card bg-[#fff]  rounded-box place-items-center">
                                          <span class="relative flex h-12 w-32">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-12 w-44 bg-[#019ba0] ">
                                              <Link href={'/register'} className="text-center ml-3 mt-3 text-[#fff]">REGISTRATION</Link> </span>

                                          </span>
                                        </div>

                                      </div>

                                    </div>
                                  </>
                              }



                            </div>

                          </form>

                        </div>
                      </d>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                      : null
                  }


                </div>

              </from>

              {/* ===================condition rendaring============= */}

              {singelServeics === "Toure" && <>
                <div className="block bg-[#00000041] md:w-[70%] py-7 mx-auto mt-3 rounded-xl absolute md:top-[53%] top-[35%] px-5 pb-8">

                  <div className="flex w-[100%] justify-start gap-x-3">
                    <div className="flex pb-3">
                      <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                      <h1>Day</h1>
                    </div>
                    <div className="flex  pb-3">
                      <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                      <h1>Week</h1>
                    </div>
                    <div className="flex  pb-3">
                      <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                      <h1>Month</h1>
                    </div>
                  </div>
                  <div className="card grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-2 ">
                    <div className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">FROM</p>

                      <input onChange={(e) => handelLocation(e)} name="locatin" placeholder="Dhaka" type="text" className="w-[100%] mx-auto py-2 rounded-md pl-5  bg-[#3a3939] " required />
                    </div>

                    <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg bg-">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">TO</p>
                      <select onChange={(e) => handelTO(e)} className="focus:outline-none text-md font-normal w-[100%] px-5 py-2 rounded-md mx-auto bg-[#3a3939] ">
                        <option disabled selected>
                          Select Place
                        </option>
                        <option>Dhaka</option>
                        <option>cox's bazar</option>
                        <option>Sajik</option>
                        <option>Mymensingh</option>
                        <option>Borisal</option>
                        <option>Rongpur</option>
                        <option>Cummila</option>
                        <option>Sylet</option>
                        <option>More..</option>
                      </select>
                    </div>
                    {/* -------------date-------------- */}
                    <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">JOURNEY DATE</p>

                      <input onChange={(e) => handelJDate(e)}
                        type="date"
                        className="text-sm bg-[#3a3939]  font-normal focus:outline-nonew-[90%] px-5 py-2 w-[100%] rounded-md mx-auto cursor-pointer"
                        required />
                    </div>
                    <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">RETURN DATE</p>

                      <input onChange={(e) => handelRDate(e)}
                        type="date"
                        className="text-sm bg-[#3a3939]  font-normal focus:outline-nonew-[90%] px-5 py-2 w-[100%] rounded-md mx-auto cursor-pointer"
                      />
                    </div>

                    {/* -----------gUest-------- */}
                    <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">GUEST</p>
                      <select onChange={(e) => handelMember(e)} className="focus:outline-none bg-[#3a3939]  text-md font-normal w-[100%] px-5 py-2 rounded-md mx-auto" required>
                        <option disabled selected>
                          Members
                        </option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07+</option>
                      </select>
                    </div>
                    <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg md:hidden">
                      <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">GENDER</p>

                      <select className="focus:outline-none text-md bg-[#3a3939]  font-normal w-[100%] px-5 py-2 rounded-md mx-auto">
                        <option disabled selected>
                          select gender
                        </option>
                        <option>Mail</option>
                        <option>Femail</option>
                        <option>Other</option>

                      </select>
                    </div>

                  </div>
                  <div className="flex justify-center mt-5 md:hidden">



                    {
                      showModal ? <>
                        <div
                          className="justify-center pt-80 items-center flex md:hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <form onSubmit={confirmBooking}>
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold text-black">
                                    Travel<span className="text-blue-600">.Xone</span>
                                  </h3>
                                  <button
                                    className="p-1 ml-auto border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <span className=" text-red-800  h-7 w-8 text-[32px] block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/* -------------------- User Condition base --------------- */}
                                {
                                  singelUser?.email ?
                                    <>
                                      {/* start modal  body*/}
                                      <div className="relative p-6 flex-auto ">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                          Travel takes us out of our comfort zones and inspires us to see,  try new things.
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your name Is :</span>
                                            </label>
                                            <input name="name" type="text" defaultValue={bookingData?.name} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your Email Is :</span>
                                            </label>
                                            <input name="email" type="text" defaultValue={bookingData?.email} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your From :</span>
                                            </label>
                                            <input name="fLocation" type="text" defaultValue={bookingData?.FromLocation} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your From To :</span>
                                            </label>
                                            <input name="tLocation" type="text" defaultValue={bookingData?.ToLocation} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">Journey Date is :</span>
                                            </label>
                                            <input name="jdate" type="text" defaultValue={bookingData?.JarnyDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">Return Date is:</span>
                                            </label>
                                            <input name="rdate" type="text" defaultValue={bookingData?.ReturnDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your Phone is :</span>
                                            </label>
                                            <input name="phone" type="text" defaultValue={bookingData?.phone} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your Members is:</span>
                                            </label>
                                            <input name="member" type="text" defaultValue={bookingData?.Member} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">

                                            <label className="label">
                                              <span className="label-text">Flight Journey Date:</span>
                                            </label>
                                            <input name="fjd" type="text" defaultValue={bookingData?.FlightDate} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">Journey Location:</span>
                                            </label>
                                            <input name="flight" type="text" defaultValue={bookingData?.Flight} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your Hotel Location:</span>
                                            </label>
                                            <input name="hotellocation" type="text" defaultValue={bookingData?.HotelPlaces} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                              <span className="label-text">your Hotel Name :</span>
                                            </label>
                                            <input name="hotelname" type="text" defaultValue={bookingData?.HotelName} className="input input-bordered w-full max-w-xs bg-blue-400 text-white" />
                                          </div>
                                        </div>

                                      </div>
                                      {/*modal footer*/}
                                      <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">

                                        <button
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="submit" value="Submit"
                                          onClick={() => confirmBooking}
                                        >
                                          Confirm Booking
                                        </button>

                                      </div>
                                    </>
                                    : <>
                                      <div className="relative p-6 flex-auto ">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                                          Travel takes us out of our comfort zones and inspires us to see,  try new things.
                                        </p>

                                        <h1 className="text-[#ef2323]">You Aren't a Valid User Our Treval.Xon</h1>
                                        <h1 className="text-[#2391eb]">Please sign up Now.</h1>
                                        <div className="flex w-full py-10">

                                          <div className="grid h-20 flex-grow card bg-[#fff] rounded-box place-items-center">
                                            <span class="relative flex h-12 w-32">
                                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                              <span class="relative inline-flex rounded-full h-12 w-52 bg-sky-500 ">
                                                <Link href={'/login'} className="text-center ml-10 mt-3 text-[#fff]">LOGIN</Link> </span>

                                            </span>

                                          </div>
                                          <div className="divider divider-horizontal">OR</div>
                                          <div className="grid h-20 flex-grow card bg-[#fff]  rounded-box place-items-center">
                                            <span class="relative flex h-12 w-32">
                                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                              <span class="relative inline-flex rounded-full h-12 w-44 bg-[#019ba0] ">
                                                <Link href={'/register'} className="text-center ml-3 mt-3 text-[#fff]">REGISTRATION</Link> </span>

                                            </span>
                                          </div>

                                        </div>

                                      </div>
                                    </>
                                }



                              </div>

                            </form>

                          </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                        : null
                    }
                  </div>

                  <div className="flex justify-center  items-end md:hidden">
                    <button onClick={SubmitTourestData} className="btn btn-primary px-14 bg-[#ffffff] text-black">submit</button>
                  </div>

                </div>

              </>}
              {
                singelServeics === "Flight" && <>

                  <div className="block bg-[#00000041] md:w-[70%] py-7 mx-auto mt-3 rounded-xl absolute md:top-[53%] top-[35%] px-5 pb-8">
                    <div className="flex w-[100%] justify-start gap-x-3">
                      <div className="flex pb-3">
                        <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                        <h1>Day</h1>
                      </div>
                      <div className="flex  pb-3">
                        <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                        <h1>Night</h1>
                      </div>

                    </div>

                    <div className="card grid grid-cols-2 justify-center items-center md:grid-cols-2 gap-2 ">

                      <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                        <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">Airports</p>
                        <select onChange={(e) => handelFlight(e)} className="focus:outline-none bg-[#3a3939]  text-md font-normal w-[100%] px-5 py-2 rounded-md mx-auto">
                          <option disabled selected>
                            Select Flight
                          </option>
                          <option>Dhaka To Chittagong</option>
                          <option>Chittagong To Dhaka</option>
                          <option>Dhaka To Cox's Bazar</option>
                          <option>Dhaka To Rajshahi</option>
                          <option>Dhata To Sylhet</option>
                        </select>
                      </div>
                      {/* ------------date */}
                      <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                        <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">JOURNEY DATE</p>

                        <input onChange={(e) => handelFlightDate(e)}
                          type="date"
                          className="text-sm font-normal bg-[#3a3939]  focus:outline-nonew-[90%] px-5 py-2 w-[100%] rounded-md mx-auto cursor-pointer"
                        />
                      </div>
                    </div>


                  </div>
                  <div className="flex justify-center mt-28 md:hidden ">
                    <button onClick={SubmitTourestData} className="btn btn-primary px-14 bg-[#ffffff] text-black">submit</button>
                  </div>
                </>
              }
              {
                singelServeics === "Hotel" && <>
                  <div className="block bg-[#00000041] md:w-[70%] py-7 mx-auto mt-3 rounded-xl absolute md:top-[53%] top-[35%] px-5 pb-8">
                    <div className="flex w-[100%] justify-start gap-x-3">
                      <div className="flex pb-3">
                        <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                        <h1>Day</h1>
                      </div>
                      <div className="flex  pb-3">
                        <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                        <h1>Week</h1>
                      </div>
                      <div className="flex  pb-3">
                        <input type="checkbox" name="" className="mx-1 bg-[#3a3939] " id="" />
                        <h1>Months</h1>
                      </div>

                    </div>

                    <div className="card grid grid-cols-2 justify-center items-center md:grid-cols-2 gap-2 ">

                      <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                        <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">Locations</p>
                        <select onChange={(e) => handelHotelLocation(e)} className="focus:outline-none text-md bg-[#3a3939]  font-normal w-[100%] px-5 py-2 rounded-md mx-auto">
                          <option disabled selected>
                            Select Locations
                          </option>
                          {
                            hotels?.data?.map(hotel => <option>{hotel?.placeName}</option>)
                          }
                        </select>
                      </div>
                      {/* ------------hotels name */}
                      <div select className="border-2 border-[#c7c6c6] py-3 px-5 rounded-lg">
                        <p className="text-[16px] text-[#dcdada] text-start pl-2 pb-1 font-mono font-bold">Hotels</p>
                        <select onChange={(e) => handelHoteName(e)} className="focus:outline-none text-md bg-[#3a3939]  font-normal w-[100%] px-5 py-2 rounded-md mx-auto">
                          <option disabled selected>
                            Select Hotels
                          </option>
                          {
                            hotels?.data?.map(hotel => <option>{hotel?.title}</option>)
                          }

                        </select>
                      </div>
                    </div>


                  </div>
                  <div className="flex justify-center mt-20 md:hidden ">
                    <button onClick={SubmitTourestData} className="btn btn-primary px-14 bg-[#ffffff] text-black">submit</button>
                  </div>
                </>
              }


            </div>

          </div>
        </div>
      </section>

      {/* ------------- Card Section down home------------ */}
      <section className="flex justify-center items-center w-[100%] py-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center w-[70%]">
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaWalking className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">3500+</h2>
              <div className="text-sm font-light text-slate-500">
                Happy Travelars
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaPlaneDeparture className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">1650+</h2>
              <div className="text-sm font-light text-slate-500">
                Tours success
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <BiCommentCheck className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">99.5% </h2>
              <div className="text-sm font-light text-slate-500">
                Positive Reviews
              </div>
            </div>
          </div>
          {/* -----single card---- */}
          <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
            <div className="pb-2">
              <FaAward className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
            </div>
            <div>
              <h2 className="text-3xl">62k+</h2>
              <div className="text-sm font-light text-slate-500">
                Awards Winning
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
