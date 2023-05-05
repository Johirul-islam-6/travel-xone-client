import Head from "next/head";

const OrderSummery = () => {
    return ( 
        <>
        <Head>
        <title>Order Summery</title>
      </Head>
        <div class="2xl:container 2xl:mx-auto pt-40 pb-10 px-4 md:px-6 xl:px-20 bg-base-200 text-black">
            <div class="items-center">
                <div class="flex justify-center flex-col mx-auto items-start w-full lg:w-9/12 xl:w-full">
                    <h3 class="text-xl xl:text-2xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">Order Summary</h3>
                    <p class="text-base leading-none dark:text-white mt-4 text-gray-800">Paid using credit card ending with <span class="font-semibold">8822</span></p>
                    <div class="flex justify-center items-center w-full mt-8 flex-col space-y-4">
                        <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                            <div class="-m-px w-40 md:w-32">
                                <img class="hidden md:block" src="https://i.ibb.co/wWp4m6W/Rectangle-8.png" alt="girl-in-red-dress" />
                                <img class="md:hidden" src="https://i.ibb.co/f8pyz8q/Rectangle-8.png" alt="girl-in-red-dress" />
                            </div>
                            <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                    <h3 class="text-md md:text-lg dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">Premium Quaility Red Dress</h3>
                                    <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Size: <span class="text-gray-800 dark:text-white"> Small</span></p>
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Quantity: <span class="text-gray-800 dark:text-white"> 01</span></p>
                                    </div>
                                </div>
                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                    <p class="text-lg lg:text-xl dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                            <div class="-m-px w-40 md:w-32">
                                <img class="hidden md:block" src="https://i.ibb.co/3ftbsMT/Rectangle-8-1.png" alt="girl-in-yellow-dress" />
                                <img class="md:hidden" src="https://i.ibb.co/D79dzHg/Rectangle-8.png" alt="girl-in-yellow-dress" />
                            </div>
                            <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                    <h3 class="text-md md:text-lg dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">Premium Quaility Yellow Dress</h3>
                                    <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Size: <span class="text-gray-800 dark:text-white"> Small</span></p>
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Quantity: <span class="text-gray-800 dark:text-white"> 01</span></p>
                                    </div>
                                </div>
                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                    <p class="text-lg lg:text-xl dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                            <div class="-m-px w-40 md:w-32">
                                <img class="hidden md:block" src="https://i.ibb.co/C7M7Mvx/Rectangle-8-2.png" alt="girl-in-white-dress" />
                                <img class="md:hidden" src="https://i.ibb.co/MsbCZNJ/Rectangle-8.png" alt="girl-in-white-dress" />
                            </div>
                            <div class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                <div class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                    <h3 class="text-md md:text-lg dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">Premium Quaility White Dress</h3>
                                    <div class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Size: <span class="text-gray-800 dark:text-white"> Small</span></p>
                                        <p class="text-sm leading-none dark:text-gray-300 text-gray-600">Quantity: <span class="text-gray-800 dark:text-white"> 01</span></p>
                                    </div>
                                </div>
                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                    <p class="text-lg lg:text-xl dark:text-white font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex  flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                        <div class="flex flex-col  space-y-4 w-full">
                            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div class="flex justify-between w-full">
                                    <p class="text-base leading-4 dark:text-white text-gray-800">
                                        Discount
                                        <span class="bg-gray-200  p-1 text-xs font-medium leading-3 text-gray-800">STUDENT</span>
                                    </p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
                                </div>
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
                            </div>
                            <div class="flex w-full justify-center items-center pt-1 md:pt-4 xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button class="py-5 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default OrderSummery;