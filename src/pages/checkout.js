import Head from "next/head";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
      </Head>
      <section>
        {/* -----------header design Start----------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
          <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
            Checkout
          </h1>
          <p className="pl-10 lg:pl-20 text-slate-400">
            Give Your Payment Information
          </p>
        </div>
        {/* -----------header design end----------- */}
        {/* -------------------Checkout Info---------------- */}
        <div class="relative mx-auto w-full bg-white">
          <div class="grid min-h-screen grid-cols-10">
            <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div class="mx-auto w-full max-w-lg">
                <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                  Payment Details
                  <span class="mt-2 block h-1 w-10 bg-blue-600 sm:w-20"></span>
                </h1>
                {/* -------------------Payment form-----------  */}
                <form action="" class="mt-10 flex flex-col space-y-4">
                  <div class="grid-cols-2 grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div class="relative">
                      <input
                        class="peer hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1"
                      >
                        <img
                          class="w-14 object-contain"
                          src="https://i.ibb.co/ZNdCyFB/Rectangle-66.png"
                          alt="bkash"
                        />
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        class="peer hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2"
                      >
                        <img
                          class="w-14 object-contain"
                          src="https://i.ibb.co/s5V1kc4/Rectangle-67.png"
                          alt=""
                        />
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        class="peer hidden"
                        id="radio_3"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_3"
                      >
                        <img
                          class="w-14 object-contain"
                          src="https://i.ibb.co/1bd2yx2/Rectangle-65.png"
                          alt="visaCard"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="text-xs font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john.capler@fang.com"
                      class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div class="relative">
                    <label
                      for="card-number"
                      class="text-xs font-semibold text-gray-500"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="1234-5678-XXXX-XXXX"
                      class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    />
                    <img
                      src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                      alt=""
                      class="absolute bottom-3 right-3 max-h-4"
                    />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500">
                      Expiration date
                    </p>
                    <div class="mr-6 flex flex-wrap">
                      <div class="my-1">
                        <label for="security-code" class="sr-only">
                          Select expiration month
                        </label>
                        <input
                          type="text"
                          id="security-code"
                          name="security-code"
                          placeholder="Month"
                          class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div class="my-1 ml-3 mr-3">
                        <label for="security-code" class="sr-only">
                          Select expiration year
                        </label>
                        <input
                          type="text"
                          id="security-code"
                          name="security-code"
                          placeholder="Year"
                          class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div class="relative my-1">
                        <label for="security-code" class="sr-only">
                          Security code
                        </label>
                        <input
                          type="text"
                          id="security-code"
                          name="security-code"
                          placeholder="Security code"
                          class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="card-name" class="sr-only">
                      Card name
                    </label>
                    <input
                      type="text"
                      id="card-name"
                      name="card-name"
                      placeholder="Name on the card"
                      class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </form>
                {/* -------------------Payment form-----------  */}

                <p class="mt-10 text-center text-sm font-semibold text-gray-500">
                  By placing this order you agree to the{" "}
                  <a
                    href="#"
                    class="whitespace-nowrap text-blue-400 underline hover:text-blue-600"
                  >
                    Terms and Conditions
                  </a>
                </p>
                <button
                  type="submit"
                  class="mt-4 inline-flex w-full items-center justify-center rounded bg-blue-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-blue-500 sm:text-lg"
                >
                  Place Order
                </button>
              </div>
            </div>
            <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
              <h2 class="sr-only">Order summary</h2>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                />
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-800 to-blue-400 opacity-95"></div>
              </div>
              <div class="relative">
                <ul class="space-y-5">
                  <li class="flex justify-between">
                    <div class="inline-flex">
                      <img
                        src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        class="max-h-16"
                      />
                      <div class="ml-3">
                        <p class="text-base font-semibold text-white">
                          Nano Titanium Hair Dryer
                        </p>
                        <p class="text-sm font-medium text-white text-opacity-80">
                          Pdf, doc Kindle
                        </p>
                      </div>
                    </div>
                    <p class="text-sm font-semibold text-white">$260.00</p>
                  </li>
                  <li class="flex justify-between">
                    <div class="inline-flex">
                      <img
                        src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        class="max-h-16"
                      />
                      <div class="ml-3">
                        <p class="text-base font-semibold text-white">
                          Luisia H35
                        </p>
                        <p class="text-sm font-medium text-white text-opacity-80">
                          Hair Dryer
                        </p>
                      </div>
                    </div>
                    <p class="text-sm font-semibold text-white">$350.00</p>
                  </li>
                </ul>
                <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div class="space-y-2">
                  <p class="flex justify-between text-lg font-bold text-white">
                    <span>Total price:</span>
                    <span>$510.00</span>
                  </p>
                  <p class="flex justify-between text-sm font-medium text-white">
                    <span>Vat: 10%</span>
                    <span>$55.00</span>
                  </p>
                </div>
              </div>
              <div class="relative mt-10 text-white">
                <h3 class="mb-5 text-lg font-bold">Support</h3>
                <p class="text-sm font-semibold">
                  +01 653 235 211{" "}
                  <span class="font-light">(International)</span>
                </p>
                <p class="mt-1 text-sm font-semibold">
                  support@nanohair.com <span class="font-light">(Email)</span>
                </p>
                <p class="mt-2 text-xs font-medium">
                  Call us now for payment related issues
                </p>
              </div>
              <div class="relative mt-10 flex">
                <p class="flex flex-col">
                  <span class="text-sm font-bold text-white">
                    Money Back Guarantee
                  </span>
                  <span class="text-xs font-medium text-white">
                    within 30 days of purchase
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------Checkout Info---------------- */}
      </section>
    </>
  );
};

export default Checkout;
