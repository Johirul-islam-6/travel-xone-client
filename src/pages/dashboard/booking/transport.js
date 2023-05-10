import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";
import { AuthContext } from "@/ContextApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const UserTransport = () => {
  const [bookingdata, setBookingData] = useState([]);
  const [payment, setPayment] = useState();
  const { user, setLoading } = useContext(AuthContext);
  const [loding, setLoadings] = useState(true)

  const route = useRouter()

  const deleteButton = (e) => {
    console.log(e)

    fetch(`https://travel-xone-server-five.vercel.app/api/v1/transfortbooking?id=${e}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        route.push('/dashboard/booking/transport')
        toast.success("delete success")

      })

  }

  const paidSuccess = () => {
    toast.success("Go To Payment")
    route.push('/checkout')
  }

  useEffect(() => {
    fetch(
      `https://travel-xone-server-five.vercel.app/api/v1/transfortbooking?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data?.data);
        setLoadings(false);
      });
  }, [user?.email]);




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
    <>
      {/* <h1>dfs</h1> */}
      <Head>
        <title>Transport Bookings</title>
      </Head>
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <h3 class="text-lg xl:text-xl dark:text-black font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">
          Transport Bookings <span className="text-[15px] text-[#107e45]">{user?.email}</span>
        </h3>
        <p class="text-sm leading-none dark:text-black pb-0 lg:pb-5 text-gray-800">
          Paid using credit card ending with Bkash, Nagad, Visa Card
        </p>
        <div className="overflow-x-auto">
          <div class="flex justify-center items-center w-full mt-5 flex-col space-y-4 ">

            {bookingdata?.map((post) => {
              return (
                <div
                  key={post?._id}
                  class="flex-cols lg:flex md:flex justify-start items-start md:items-center border border-gray-200 w-full shadow-lg bg-white text-black"
                >
                  <div class="w-full lg:w-40 md:w-32">
                    <img
                      class="p-1"
                      src={post?.image}
                      alt="girl-in-red-dress"
                    />
                    {/* ------------dfdsfs--------- */}
                  </div>
                  <div class="flex-cols lg:flex  justify-start md:justify-between items-start lg:items-center  w-full ml-3 md:ml-0 pt-4 pb-6 pr-2 md:px-8">
                    <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                      <h3 class="text-md md:text-lg dark:text-black w-full font-semibold leading-6 md:leading-5 text-gray-800">
                        {post?.transportName}
                      </h3>
                      <div class="block md:flex lg:flex flex-row justify-start space-x-4 md:space-x-6 items-start lg:items-center mt-2 md:mt-2 lg:mt-4 -ml-3 md:-ml-0 lg:-ml-0 ">
                        <p class="text-sm ml-3 md:ml-0 lg:ml-0 dark:text-gray-600 text-gray-600">
                          Tour location:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.location}
                          </span>
                        </p>
                        <p className="hidden md:block lg:block">|</p>
                        <p class="text-sm  dark:text-gray-600 text-gray-600 ">
                          Date:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.JarnyDate}
                          </span>
                        </p>
                        <p className="hidden md:block  lg:block">|</p>
                        <p class="text-sm leading-none dark:text-gray-600 text-gray-600">
                          members:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.member}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-3 md:mt-2">
                      <div>
                        <p class="flex text-lg lg:text-xl dark:text-black font-semibold leading-5 lg:leading-6 text-gray-800">
                          $ <span className="pl-1">{post.price}</span>.00
                        </p>
                      </div>
                      {payment && (
                        <div class="">
                          <p class="text-sm  bg-green-700 px-2 rounded hover:cursor-pointer  font-semibold leading-5 lg:leading-6 text-white">
                            Paid
                          </p>
                        </div>
                      )}

                      <div onClick={() => paidSuccess(setPayment(!payment))} >
                        <p class="text-sm bg-yellow-600 px-2 rounded hover:cursor-pointer font-semibold leading-5 lg:leading-6 text-white">
                          Unpaid
                        </p>
                      </div>
                      <div class="">
                        <p onClick={() => deleteButton(post?._id)} class="text-sm bg-red-700 px-2 rounded hover:cursor-pointer dark:text-black font-semibold leading-5 lg:leading-6 text-white">
                          Delete
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}




          </div>
        </div>
        {/* -------------body content End------------------ */}
      </UserDashboardLayout>
    </>
  );
};

export default UserTransport;
UserTransport.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
