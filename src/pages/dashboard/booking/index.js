import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";
import { useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";

const UserBooking = () => {
  const [payment, setPayment] = useState();
  const posts = [
    {
      id: "1",
      image: "https://i.ibb.co/QmfMRWw/New-Project-44.png",
      title: "Archaeological Rest House",
      tourType: "Rest House",
      price: 28,
      duration: "3 days",
      group_size: "2",
    },
    {
      id: "2",
      image: "https://i.ibb.co/2Nftgtg/New-Project-49.png",
      title: "Red Chillies Restaurant a",
      tourType: "Archaeological",
      price: 28,
      duration: "3 days",
      group_size: "2",
    },
    {
      id: "3",
      image: "https://i.ibb.co/Nm4GrGK/New-Project-48.png",
      title: "Archaeological Rest House",
      tourType: "Archaeological",
      price: 28,
      duration: "3 days",
      group_size: "2",
    },
  ];
  return (
    <>
      <Head>
        <title>All Bookings</title>
      </Head>
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <h3 class="text-lg xl:text-xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-black">
          All Booking List
        </h3>
        <p class="text-sm leading-none dark:text-white pb-0 lg:pb-5 text-black">
          Paid using credit card ending with Bkash, Nagad, Visa Card
        </p>
        <div className="overflow-x-auto">
          <div class="flex justify-center items-center w-full mt-5 flex-col space-y-4 ">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full shadow-lg bg-white text-black"
                >
                  <div class="-m-px w-40 md:w-32">
                    <img
                      class="hidden md:block"
                      src={post.image}
                      alt="girl-in-red-dress"
                    />
                    <img
                      class="md:hidden"
                      src={post.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full ml-3 md:ml-0 py-2 md:px-8">
                    <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                      <h3 class="text-md md:text-lg dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">
                        {post.title}
                      </h3>
                      <div class="block md:flex lg:flex flex-row justify-start space-x-4 md:space-x-6 items-start lg:items-center mt-2 md:mt-4 lg:mt-4 -ml-3 md:-ml-0 lg:-ml-0 ">
                        <p class="text-sm ml-3 md:ml-0 lg:ml-0 dark:text-gray-300 text-gray-600">
                          Tour Type:{" "}
                          <span class="text-gray-800 dark:text-white">
                            {" "}
                            {post.tourType}
                          </span>
                        </p>
                        <p className="hidden md:block lg:block">|</p>
                        <p class="text-sm  dark:text-gray-300 text-gray-600 ">
                          Duration:{" "}
                          <span class="text-gray-800 dark:text-white">
                            {" "}
                            {post.duration}
                          </span>
                        </p>
                        <p className="hidden md:block  lg:block">|</p>
                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">
                          Peoples:{" "}
                          <span class="text-gray-800 dark:text-white">
                            {" "}
                            {post.group_size}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div class="flex mt-4 md:mt-0 mr-3 md:justify-end items-center w-full">
                        <p class="flex text-lg lg:text-xl dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">
                          $ <span className="pl-1">{post.price}</span>.00
                        </p>
                      </div>
                      {payment && (
                        <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                          <p class="text-sm bg-green-700 px-2 rounded hover:cursor-pointer dark:text-white font-semibold leading-5 lg:leading-6 text-white">
                            Paid
                          </p>
                        </div>
                      )}

                      <div
                        onClick={() => setPayment(!payment)}
                        class="flex mt-4 md:mt-0 md:justify-end items-center w-full"
                      >
                        <p class="text-sm bg-yellow-600 px-2 rounded hover:cursor-pointer dark:text-white font-semibold leading-5 lg:leading-6 text-white">
                          Unpaid
                        </p>
                      </div>
                      <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                        <p class="text-sm bg-red-700 px-2 rounded hover:cursor-pointer dark:text-white font-semibold leading-5 lg:leading-6 text-white">
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

export default UserBooking;

UserBooking.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
