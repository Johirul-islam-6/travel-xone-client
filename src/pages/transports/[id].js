import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { toast } from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

const Plain = ({ detailsTransport }) => {
  const priceTravel = detailsTransport?.price?.slice(0, 3);

  const router = useRouter();
  const [singelUser, setUser] = useState({
    name: "rase;",
    email: "rasel@gmail.com"
  })
  const [loding, setLoding] = useState(true)
  const [transport, setTransport] = useState();

  //  --------------modal part-----------
  const [showModal, setShowModal] = useState(false);
  const [transportBooking, setBooking] = useState();
  let [num, setNum] = useState(1);
  const [discountPrice, setDiscount] = useState(10 / 100 * priceTravel)
  const [PriceTotal, totalPrices] = useState(priceTravel - discountPrice)
  const [displayPrice, setTravelTotal] = useState(priceTravel)
  // input value resive state


  useEffect(() => {
    setTransport(detailsTransport)
    setLoding(false)

  }, [detailsTransport]);

  if (loding) {
    return <>
      <div className="w-[100%] h-[100vh] justify-center flex items-center">
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-[#0000004d]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-blue-700"></div>
        </div>
      </div>
    </>
  }


  // ------------- Calculation -----------


  let plus = () => {
    if (num < 15) {
      setNum(Number(num) + 1);
    } else {
      toast.error("Member  is Over Select");
    }

    // -----discount calculation-----

    let privMember = num + 1;
    console.log(priceTravel)
    let discountPrice = 10 / 100 * priceTravel;
    console.log(discountPrice)
    let totalPrice = priceTravel - discountPrice;
    let memberDiscount = discountPrice * privMember
    let total = totalPrice * privMember
    let TravelTotal = priceTravel * privMember


    setTravelTotal(TravelTotal)
    setDiscount(memberDiscount)
    totalPrices(total)



  };

  let minus = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      toast.error("Minimum Member is 1 ")
    }

    // -----discount calculation-----

    let privMember = num - 1;
    console.log(priceTravel)
    let discountPrice = 10 / 100 * priceTravel;
    console.log(discountPrice)
    let totalPrice = priceTravel - discountPrice;
    let memberDiscount = discountPrice * privMember
    let total = totalPrice * privMember
    let TravelTotal = priceTravel * privMember


    setTravelTotal(TravelTotal)
    setDiscount(memberDiscount)
    totalPrices(total)



  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }


  // const minus = (e) => {
  //   const add = parseFloat(member) - 1;
  //   setAddMember(add)
  // }
  // const plus = (e) => {
  //   const add = parseFloat(member) + 1;
  //   setAddMember(add)
  // }


  // -------------modal Btn----------

  const BookingNowTransport = event => {

    setShowModal(true)

    const bookingMember = {
      name: "Rasel Khan",
      email: "rasel@gmail.com",
      phone: "018282312",

    }
    setBooking(bookingMember)
    // console.log(bookingMember)


  }

  // --------------post data serversite tourist data--------

  // ----confirm booking ----
  const confirmBooking = (e) => {

    e.preventDefault();
    const targetValue = e?.target;
    const names = targetValue?.name?.value;
    const email = targetValue?.email?.value;
    const transportName = targetValue?.transportName?.value;
    const location = targetValue?.location?.value;
    const JarnyDate = targetValue?.jdate?.value;
    const message = targetValue?.message?.value;



    const bookingMember = {
      names: names,
      email: email,
      transportName: transportName,
      location: location,
      JarnyDate: JarnyDate,
      message: message,
      booking: "success"
    }
    console.log("show booking", bookingMember)

    try {
      fetch('http://localhost:5000/api/v1/booking-transport', {
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

  // console.log(detailsTransport)


  return (
    <section>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          Available Transport
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          We provide flexible transport way
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div className="pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">

          <img className="w-[80%] h-[60vh] mx-auto" src={transport?.imageList[0]?.image} alt="transport" lazyLoad={true} />


          <div className="card-body text-black">
            <h2 className="text-left  text-blue-500 font-semibol text-[25px] uppercase font-bold">
              {transport?.transport} : <span className="pl-2 text-[#0aa7eb]">{transport?.title}</span>
            </h2>
            <h2 className="text-left text-lime-500 font-semibol text-[18px] uppercase font-bold">
              Location :    <span className="pl-2 text-[#1acd8f]"> {transport?.location}</span>
            </h2>
            <p className="text-left text-black text-[18px]">{transport?.description?.slice(0, 500)} <span className="text-black">Means of transport are any of the different kinds of transport facilities used to carry people or cargo. They may include vehicles, riding animals, and pack animals. Vehicles may include wagons, automobiles, bicycles, buses, trains, trucks, helicopters, watercraft, spacecraft, and aircraft.</span></p>


            <div className="card-actions justify-between items-center text-black">
              <h1 className="bg-amber-700 p-1 text-white"> Ticket Rates : {transport?.price}</h1>
              <button onClick={BookingNowTransport} className="btn btn-slack-400">
                Booking Now
              </button>
            </div>
          </div>

        </div>
        <div className="block md:gird grid-cols-1 md:grid-cols-3 gap-2 py-10">
          <div className="container">
            <h1 className="text-2xl font-bold text-blue-600 py-5 text-center bg-gray-400 mb-2">Inside Transport Services</h1>
            <Carousel cols={3} rows={1} gap={10} loop className="py-10">

              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[80%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[0]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[60%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[1]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card sm:w-40 md:w-80 xl:w-[90%] bg-base-100 shadow-xl">
                  <figure className="w-[100%] h-[60%]" >
                    <img className="w-[100%] h-[50vh]" src={transport?.imageList[2]?.image} alt="transport" lazyLoad={true} />
                  </figure>

                </div>
              </Carousel.Item>


            </Carousel>
          </div>
        </div>
      </div>




      {
        showModal ? <>
          <d
            iv
            className="justify-center items-center  md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl pt-10">
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
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Travel takes us out of our comfort zones and inspires us to see,  try new things.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="form-control w-full max-w-xs">
                              <label className="label">
                                <span className="label-text">your name Is :</span>
                              </label>
                              <input name="name" type="text" defaultValue={"Rasel Khan"} className="py-3 px-2 rounded-md input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                            <div className="form-control w-full max-w-xs ">
                              <label className="label">
                                <span className="label-text">your Email Is :</span>
                              </label>
                              <input name="email" type="text" defaultValue={"rasel@gmail.com"} className="py-3 px-2 rounded-md  input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="form-control w-full max-w-xs">
                              <label className="label">
                                <span className="label-text">Transport Name :</span>
                              </label>
                              <input name="transportName" type="text" desabled defaultValue={detailsTransport?.title} className="py-3 px-2 rounded-md  input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                              <label className="label">
                                <span className="label-text">Where To Go :</span>
                              </label>
                              <input name="location" type="text" desabled defaultValue={detailsTransport?.location} className="py-3 px-2 rounded-md  input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="form-control w-full max-w-xs">
                              <label className="label">
                                <span className="label-text">Journey Date is :</span>
                              </label>
                              <input name="jdate" type="date" defaultValue={detailsTransport?.JarnyDate} className="py-3 px-2 rounded-md  input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                              <label className="label">
                                <span className="label-text">Any Massage :</span>
                              </label>
                              <input placeholder="ex: I need a window site to sit" name="message" type="text" defaultValue={detailsTransport?.ReturnDate} className="py-3 px-2 rounded-md placeholder:text-[#d1cbcb] input-bordered w-full max-w-xs bg-blue-400 text-white" />
                            </div>
                          </div>
                          {/* -------------pricing----- */}
                          <div className="grid grid-cols-3 gap-2 py-3">
                            <div className="form-control w-full max-w-xs">
                              <label className="label text-center flex justify-center">
                                <span className="label-text text-center">Select The Members:</span>
                              </label>
                              <p className="py-3 px-2 rounded-md flex input-bordered w-full max-w-xs bg-white text-white text-center  justify-center text-[12px]">
                                <span onClick={minus} className="px-2 py-1 bg-red-700 hover:bg-red-900"><FaMinus /></span>
                                <span onChange={handleChange} value={num} className="px-4 text-black text-[16px]" >{num}</span>
                                <span onClick={plus} className="px-2 py-1 bg-green-700 hover:bg-green-800"><FaPlus /></span></p>

                            </div>
                            <div className="form-control w-full max-w-xs">
                              <label className="label flex justify-center">
                                <span className="label-text">Discount Per Member</span>
                              </label>
                              <p className="py-3 px-2 rounded-md flex input-bordered w-full max-w-xs bg-white font-bold text-white text-center  justify-center text-[14px]">  <span className=" text-black text-[16px] px-1" >15%</span><span className="text-green-700">OFF</span></p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                              <label className="label flex justify-center">
                                <span className="label-text">Total Prices Is :</span>
                              </label>
                              <p className="py-1 px-2 rounded-md flex input-bordered w-full max-w-xs bg-white font-bold text-black text-center  justify-center text-[13px]"> <span className="divide-gray-800  divide-y block">
                                price : <span className=" text-black text-[16px] px-1" > {displayPrice}</span>$ <br></br>
                                discount :  <span className="text-red-700 pt-1 pr-1 absolute text-[12px]"><FaMinus /></span>
                                <span className="px-4 text-yellow-500 text-[16px]" > {discountPrice}$</span>  <br></br>
                                <span className=" text-black text-[16px] px-1 text-left bg-lime-500 mt-[2px]" >total = {PriceTotal} $</span>
                              </span>
                              </p>
                              <p className="py-3 px-2 rounded-md flex input-bordered w-full max-w-xs bg-white text-yellow-600 text-center  justify-center text-[12px]"> </p>
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




    </section>
  );
};

export default Plain;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `http://localhost:5000/api/v1/transports/${id}`
  );
  const data = await res.json();

  return {
    props: {
      detailsTransport: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/transports/"
  );
  const data = await res.json();
  const paths = data?.map((currentLocation) => {
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

