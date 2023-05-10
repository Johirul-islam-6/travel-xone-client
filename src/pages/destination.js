import classNames from "classnames";
import Link from "next/link";
import styles from "../styles/destination.module.css";
import Meta from "../../components/Meta";
import Head from "next/head";
import jsonData from "../../public/destination.json";

const Destination = () => {
  const regionHeader = classNames(
    "text-center text-xl lg:text-2xl bg-[#1751E4] w-9/12 md:w-5/12 lg:w-1/3 text-white rounded py-1 hover:bg-white hover:border hover:text-slate-900 transition duration-200 ease-linear"
  );
  return (
    <>
      <Head>
        <title>Destination Page</title>
      </Head>
      <section>
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4">
          <h1 className="text-2xl lg:text-3xl  font-bold text-white pl-10 lg:pl-20">
            Destination
          </h1>
        </div>
        <div
          className= "block lg:flex gap-10 px-10 lg:px-20 mx-auto py-5 md:py-16 lg:py-16"
        >
          <div className="max-w-full lg:max-w-[25%] shadow-md px-6 py-2 lg:py-5">
            <h1 className="text-lg lg:text-2xl font-bold dark:text-black">
              Tourist Attractions of Bangladesh
            </h1>
            <h2 className="pt-4 text-md lg:text-[19px] text-slate-600">
              Bangladesh is situated in the north-east part of South Asia which
              is blessed with natural beauty, ranging from mountains, rivers,
              beaches, biodiversity, ancient archaeological sites, medieval
              monasteries to temples, pagodas, mosques, churches and many more.
              The majestic Himalayas locate some distance to the north, while in
              the south lays the Bay of Bengal. This big delta is marked by lush
              greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna
              rivers create fertile plains and the monsoon brings the necessary
              rain to soothe the hot summer making a charming weather round the
              year. Bangladesh has been ranked seventh out of ‘top ten best
              value’ travel destinations for 2019 launched by Lonely Planet, a
              global leader of travel guidebook publisher. But in true sense,
              the whole Bangladesh is a classic hotspot of eco-tourism with
              diverse beauty and natural wonders.
            </h2>
          </div>
          <div>
            {/* ------- Single Region -------- */}
            <div className="pb-5 pt-5 lg:pt-0">
              <h2 className={`${regionHeader}`}>North West Region</h2>
              <div className="divider"></div>
              <div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/30dL9sc/paharpur.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="/destinations/1">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Paharpur
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/3ChF5Vs/mahasthangarh.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Mahasthangar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/jVs1Lj7/Dinajpur.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Dinajpur
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div>
              <h2 className={`${regionHeader}`}>Capital and Central Region</h2>
              <div className="divider"></div>
              <div className="pb-5">
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/jLdXTLy/Dhaka-city.png"
                        alt="car"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Dhaka city
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/h833y0n/lalbagfort.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Lalbagh fort
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/JvkZCjH/Ahsan-manjil.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Ahsan Manzil
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/X3bXrXS/panama-nagar.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Panamnagar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/jMWWFgV/sonarga.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Sonargaon
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/jy0TxND/shalbon.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Shalban Vihara
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-5">
              <h2 className={`${regionHeader}`}>South East Region</h2>
              <div className="divider"></div>
              <div className="pb-5">
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/Hdb3xJD/cox-bazar.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Cox's bazar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/t4GQwx8/teknaf.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Teknaf
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/YjQyzBF/Bandarban.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Bandarban
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/GnxNNRd/rangamati.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Rangamati
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-5">
              <h2 className={`${regionHeader}`}>North East Region</h2>
              <div className="divider"></div>
              <div className="pb-5">
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/hyVbmN9/tanguar-haor.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Tanguar Haor
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/bm7R1f8/shadapathor.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Shadapathor
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/C0C2DTn/zaflong.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Jaflong
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/516B2jq/sreemangal.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Sreemangal
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-5">
              <h2 className={`${regionHeader}`}>South West Region</h2>
              <div className="divider"></div>
              <div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/rwHzHBp/shundarban.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Sunderbans
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/yn4dgNT/1.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Kuakata Sea Beach
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className={`${styles.hover14} border hover:shadow-lg hover:border-none p-3 mb-6 rounded`}>
                  <div>
                    <figure>
                      <img
                        src="https://i.ibb.co/zZjKbf2/baberhat.png"
                        alt="car!"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2 dark:text-black">
                      Bagerhat
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;

