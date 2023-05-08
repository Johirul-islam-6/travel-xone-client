import Head from "next/head";
import UserDashboardLayout from "../../../../components/userDashboardLayout";

const WishList = () => {
  const posts = [
    {
      id: "1",
      image: "https://i.ibb.co/QmfMRWw/New-Project-44.png",
      title: "Archaeological Rest House",
      des: "The location makes it completely worthwhile. Tk1400 for a 2 person room with AC.",
      price: 28,
    },
    {
      id: "2",
      image: "https://i.ibb.co/2Nftgtg/New-Project-49.png",
      title: "Red Chillies Restaurant a",
      des: "The location makes it completely worthwhile. Tk1400 for a 2 person room with AC.",
      price: 28,
    },
    {
      id: "3",
      image: "https://i.ibb.co/Nm4GrGK/New-Project-48.png",
      title: "Hotel Eden Park",
      des: "The location makes it completely worthwhile. Tk1400 for a 2 person room with AC.",
      price: 28,
    },
  ];
  console.log(posts);
  return (
    <>
      <Head>
        <title>Wishlist</title>
      </Head>
      <UserDashboardLayout>
        {/* ------------Body Content------------- */}
        <div class="flex flex-col justify-start items-start bg-base-200 py-5 px-5 lg:px-20 lg:py-10 text-black">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-semibold leading-9 text-gray-800  dark:text-white">
              Favourites
            </h1>
            <p class="text-base leading-4 text-gray-600 dark:text-white">
              (<span>3</span> Items)
            </p>
          </div>
          {/* -------------------Single Product-------------- */}
          <div class="flex justify-center items-center w-full mt-2 flex-col space-y-4">
            {posts.map((list) => {
              return (
                <div
                  key={list.id}
                  class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full"
                >
                  <div class="-m-px w-40 md:w-32">
                    <img
                      class="hidden md:block"
                      src={list.image}
                      alt="girl-in-red-dress"
                    />
                    <img
                      class="md:hidden"
                      src={list.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                    <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                      <h3 class="text-md md:text-lg dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">
                        {list.title}
                      </h3>
                      <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-2 md:mt-4 lg:mt-4">
                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">
                          {list.des.slice(0, 50) + "..."}
                        </p>
                      </div>
                    </div>
                  <div className="flex gap-3">
                    <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                    <p class="flex text-lg lg:text-xl dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">
                          $ <span className="pl-1">{list.price}</span>.00
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
        {/* ------------Body Content------------- */}
      </UserDashboardLayout>
    </>
  );
};

export default WishList;
WishList.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
