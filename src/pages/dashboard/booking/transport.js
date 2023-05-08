import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";

const UserTransport = () => {
  const [payment, setPayment] = useState();
  const posts = [
    {
      id: "1",
      image: "https://i.postimg.cc/d37zkR55/background.png",
      title: "Dhaka-CoxsBazar",
      tourType: "plane",
      price: 30,
      group_size: "2",
    },
  ];
  return (
    <>
      <Head>
        <title>Transport Bookings</title>
      </Head>
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <h3 class="text-lg xl:text-xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">
          Transport Bookings
        </h3>
        <p class="text-sm leading-none dark:text-white pb-0 lg:pb-5 text-gray-800">
          Paid using credit card ending with Bkash, Nagad, Visa Card
        </p>
        <div className="overflow-x-auto">
          <div class="flex justify-center items-center w-full mt-5 flex-col space-y-4 ">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full shadow-lg bg-white text-black p-5"
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
                    {/* ------------dfdsfs--------- */}
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

export default UserTransport;
UserTransport.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
