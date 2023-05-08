import Head from "next/head";

const Wishlist = () => {
  const wishlists = [
    {
        id: "1",
        image: "https://i.ibb.co/QmfMRWw/New-Project-44.png",
        title: "Archaeological Rest House",
        price: 28
      },
    {
      id: "2",
      image: "https://i.ibb.co/2Nftgtg/New-Project-49.png",
      title: "Red Chillies Restaurant a",
      price: 28
    },
    {
      id: "3",
      image: "https://i.ibb.co/Nm4GrGK/New-Project-48.png",
      title: "Hotel Eden Park",
      price: 28
    },
  ];
  return (
    <>
      <Head>
        <title>Wishlist Page</title>
      </Head>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          Wishlist
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          Your favourite collections
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div>
        <div class="flex flex-col justify-start items-start bg-base-200 py-5 px-5 lg:px-20 lg:py-10 text-black">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-semibold leading-9 text-gray-800  dark:text-white">
              Favourites
            </h1>
            <p class="text-base leading-4 text-gray-600 dark:text-white">
              (<span>3</span> Items)
            </p>
          </div>
          <div class="flex justify-center items-center w-full mt-2 flex-col space-y-4">
            <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
              <div class="-m-px w-40 md:w-32">
                <img
                  class="hidden md:block"
                  src="https://i.ibb.co/wWp4m6W/Rectangle-8.png"
                  alt="girl-in-red-dress"
                />
                <img
                  class="md:hidden"
                  src="https://i.ibb.co/f8pyz8q/Rectangle-8.png"
                  alt="girl-in-red-dress"
                />
              </div>
              <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                  <h3 class="text-md md:text-lg dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">
                    Premium Quaility Red Dress
                  </h3>
                  <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                    <p class="text-sm leading-none dark:text-gray-300 text-gray-600">
                      View Details
                    </p>
                    <p class="text-sm leading-none dark:text-gray-300 text-red-600">
                      Remove Item
                    </p>
                  </div>
                </div>
                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                  <p class="text-md md:text-lg dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
            <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
              <div class="-m-px w-40 md:w-32">
                <img
                  class="hidden md:block"
                  src="https://i.ibb.co/3ftbsMT/Rectangle-8-1.png"
                  alt="girl-in-yellow-dress"
                />
                <img
                  class="md:hidden"
                  src="https://i.ibb.co/D79dzHg/Rectangle-8.png"
                  alt="girl-in-yellow-dress"
                />
              </div>
              <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                  <h3 class="text-md md:text-lg dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">
                    Premium Quaility Yellow Dress
                  </h3>
                  <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                    <p class="text-sm leading-none dark:text-gray-300 text-gray-600">
                      View Details
                    </p>
                    <p class="text-sm leading-none dark:text-gray-300 text-red-600">
                      Remove Item
                    </p>
                  </div>
                </div>
                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                  <p class="text-md md:text-lg dark:text-white  font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
            <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
              <div class="-m-px w-40 md:w-32">
                <img
                  class="hidden md:block"
                  src="https://i.ibb.co/C7M7Mvx/Rectangle-8-2.png"
                  alt="girl-in-white-dress"
                />
                <img
                  class="md:hidden"
                  src="https://i.ibb.co/MsbCZNJ/Rectangle-8.png"
                  alt="girl-in-white-dress"
                />
              </div>
              <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                  <h3 class="text-md md:text-lg dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">
                    Premium Quaility White Dress
                  </h3>
                  <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                    <p class="text-sm leading-none dark:text-gray-300 text-gray-600">
                      View Details
                    </p>
                    <p class="text-sm leading-none dark:text-gray-300 text-red-600">
                      Remove Item
                    </p>
                  </div>
                </div>
                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                  <p class="text-md md:text-lg dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
