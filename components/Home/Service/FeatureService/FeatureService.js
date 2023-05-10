import { GiLoveHowl } from "react-icons/gi";
import { RiHotelBedLine, RiHotelLine } from "react-icons/ri";
import styles from "../../../../src/styles/mainService.module.css";
import { useEffect, useState } from "react";
import img from "../../../Images/Home/heroBg.png";
console.log(img);
//
//-
const FeatureService = () => {
  const [data, setData] = useState([]);
  const [sdata, setSdata] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    fetch("location.json")
      .then((res) => res.json())
      .then((data) => setSdata(data));
  }, []);
  useEffect(() => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <section className={styles.feature_container}>
        <h1 className="text-left text-xl font-semibold ">Feature section</h1>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
          <div className="hidden md:block xl:block">
            <div className="flex justify-between py-2  ">
              <div className="flex items-center ">
                <p className="size color">
                  <GiLoveHowl />
                </p>
                <p className={styles.size}>We Price Match</p>
              </div>
              <div className="flex items-center">
                <p className={styles.size}>
                  <RiHotelBedLine />
                </p>
                <p className={styles.size}>Hotel Booking Guarantee</p>
              </div>
              <div className="flex items-center">
                <p className={styles.size}>
                  <RiHotelLine />
                </p>
                <p className={styles.size}>Hotel Stay Guarantee</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div>
            {data?.map((t) => (
              <button className={styles.categoryBtn} key={t.id}>
                {t.category}
              </button>
            ))}
          </div>
          <div>
            <p>ami</p>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {services?.map((s) => (
            <div className="card card-compact w-70 bg-base-100 shadow-xl ">
              <figure>
                <img
                  src="https://i.postimg.cc/BbWD8ys9/beautiful-dream-beach-wallpaper-preview.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title">{s?.TourPlan}</h5>
                <p className="text-left">{s?.description.slice(0, 200)}</p>
                <div className="flex items-center justify-between px-3">
                  <div>
                    <div className="flex items-center">
                      <RiHotelLine />
                      <p>ami tomake</p>
                    </div>
                    <div className="flex items-center">
                      <RiHotelLine />
                      <p>ami tomake</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <RiHotelLine />
                      <p>ami tomake</p>
                    </div>
                    <div className="flex items-center">
                      <RiHotelLine />
                      <p>ami tomake</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 px-3 bg-gray-300 rounded-lg">
                  <div>
                    <p>ami nai </p>
                    <p>ami nai </p>
                  </div>
                  <div>
                    <button>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureService;
