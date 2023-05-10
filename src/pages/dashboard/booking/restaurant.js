import Head from "next/head";
import { useContext, useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";
import { AuthContext } from "@/ContextApi";
import { useEffect } from "react";

const UserRestaurant = () => {
<<<<<<< HEAD
  const { user, setLoading } = useContext(AuthContext);
=======
  const { user } = useContext(AuthContext);
  console.log(user, 'this under the rasturant ');

>>>>>>> johir/Transport_Booking
  const [bookingdata, setBookingData] = useState([]);
  const [payment, setPayment] = useState();

  useEffect(() => {
<<<<<<< HEAD
    fetch(
      `https://travel-xone-server-five.vercel.app/api/v1/bookings?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
        setLoading(false);
      });
  }, [user?.email]);
=======
    fetch(`https://travel-xone-server-five.vercel.app/api/v1/bookings?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setBookingData(data)
        console.log(data, 'bookings');
      })
  }, [user?.email])
>>>>>>> johir/Transport_Booking

  return (
    <>
      <Head>
        <title>Restaurant Bookings</title>
      </Head>
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <h3 class="text-lg xl:text-xl dark:text-black font-semibold leading-7 xl:leading-9 w-full md:text-left text-black">
          Restaurant Bookings
        </h3>
        <p class="text-sm leading-none dark:text-black pb-0 lg:pb-5 text-black">
          Paid using credit card ending with Bkash, Nagad, Visa Card
        </p>
        <div className="overflow-x-auto">
          <div class="flex justify-center items-center w-full mt-5 flex-col space-y-4 ">
            {bookingdata?.data?.map((post) => {
              return (
                <div
                  key={post.id}
                  class="flex-cols lg:flex md:flex justify-start items-start md:items-center border border-gray-200 w-full shadow-lg bg-white text-black"
                >
                  <div class="w-full lg:w-40 md:w-32">
                    <img
                      class=""
                      src={post?.pictureOne}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div class="flex-cols lg:flex  justify-start md:justify-between items-start lg:items-center  w-full ml-3 md:ml-0 pt-4 pb-6 pr-2 md:px-8">
                    <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                      <h3 class="text-md md:text-lg dark:text-black w-full font-semibold leading-6 md:leading-5 text-gray-800">
                        {post?.title}
                      </h3>
                      <div class="block md:flex lg:flex flex-row justify-start space-x-4 md:space-x-6 items-start lg:items-center mt-2 md:mt-2 lg:mt-4 -ml-3 md:-ml-0 lg:-ml-0 ">
                        <p class="text-sm ml-3 md:ml-0 lg:ml-0 dark:text-gray-600 text-gray-600">
                          Tour Type:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.tourType}
                          </span>
                        </p>
                        <p className="hidden md:block lg:block">|</p>
                        <p class="text-sm  dark:text-gray-600 text-gray-600 ">
                          Duration:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.duration}
                          </span>
                        </p>
                        <p className="hidden md:block  lg:block">|</p>
                        <p class="text-sm leading-none dark:text-gray-600 text-gray-600">
                          Peoples:{" "}
                          <span class="text-gray-800 dark:text-black">
                            {" "}
                            {post?.GroupSize}
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
                          <p class="text-sm bg-green-700 px-2 rounded hover:cursor-pointer dark:text-black font-semibold leading-5 lg:leading-6 text-white">
                            Paid
                          </p>
                        </div>
                      )}

                      <div onClick={() => setPayment(!payment)}>
                        <p class="text-sm bg-yellow-600 px-2 rounded hover:cursor-pointer dark:text-black font-semibold leading-5 lg:leading-6 text-white">
                          Unpaid
                        </p>
                      </div>
                      <div class="">
                        <p class="text-sm bg-red-700 px-2 rounded hover:cursor-pointer dark:text-black font-semibold leading-5 lg:leading-6 text-white">
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

export default UserRestaurant;
UserRestaurant.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
