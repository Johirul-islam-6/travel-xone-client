import classNames from "classnames";
import Link from "next/link";

const Destinations = ({ location }) => {
  console.log(location);
  // const [locationid, setlocationId] = useState()
  const id1 = "643c2ace24a8114c69217526";
  const id2 = "643c2b61f7c5a823c7ca6272";
  const id3 = "643c2bce11de3a4be5df416f";
  const id4 = "643c2c61f97a9e7ae141b4a1";
  const id5 = "643c3117e049fd5186b59ae1";

  const goSinglepage = (id) => {
    console.log(id);
  };

  const overlayClass = classNames(
    "absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500"
  );
  return (
    <>
      <Link href={"admin"} className="text-dark">
        admin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin
        aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin
        aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin
        aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin aadmin a
      </Link>
      <section className="bg-[#F7FAFC] py-20">
        <div className="container mx-auto">
          {/*----- section header -----*/}
          <div className="text-center pb-6 md:pb-10 lg:pb-10">
            <h5 className="text-[#627FF4] font-bold">DESTINATION</h5>
            <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
              go exotic places
            </h1>
          </div>
          {/*----- section header -----*/}
          {/*----- Location Container -----*/}
          <div className="block md:flex lg:flex px-10 lg:px-0">
            <div className="w-full md:w-[131%] lg:max-w-[33.3%] group relative">
              <img src="https://i.ibb.co/ByXW3K0/location10.png" />
              <div className={`${overlayClass}`}>
                <Button
                  onClick={goSinglepage(
                    `/destinations/643c2ace24a8114c69217526`
                  )}
                  // href={`/destinations/643c2ace24a8114c69217526`}
                  className="cursor-pointer"
                >
                  <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                    North West Region
                  </h1>
                </Button>
              </div>
            </div>

            <div>
              <div className="flex">
                <div
                  onClick={() => ClickLocation(id2)}
                  className="group relative"
                >
                  <img src="https://i.ibb.co/JnXHGqk/Ahasan-manjill.png" />
                  <Link
                    href={`/destinations/643c2b61f7c5a823c7ca6272`}
                    className="cursor-pointer"
                  >
                    <div className={`${overlayClass}`}>
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        Central Region
                      </h1>
                    </div>
                  </Link>
                </div>
                <div
                  onClick={() => ClickLocation(id3)}
                  className="group relative"
                >
                  <img src="https://i.ibb.co/yq1cb38/cox-bazer.png" />
                  <div className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c2bce11de3a4be5df416f`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South East Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div
                  onClick={() => ClickLocation(id4)}
                  className="group relative"
                >
                  <img src="https://i.ibb.co/DQz7210/jaflong.png" />
                  <div className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c2c61f97a9e7ae141b4a1`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        North East Region
                      </h1>
                    </Link>
                  </div>
                </div>
                <div
                  onClick={() => ClickLocation(id5)}
                  className="group relative"
                >
                  <img src="https://i.ibb.co/zxmNYFc/Sundarban.png" />
                  <div className={`${overlayClass}`}>
                    <Link
                      href={`/destinations/643c3117e049fd5186b59ae1`}
                      className="cursor-pointer"
                    >
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South West Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*----- Location Container -----*/}
        </div>
      </section>
    </>
  );
};

export default Destinations;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://travel-xone-server.vercel.app/api/v1/locations/"
  );
  const data = await res.json();

  return {
    props: {
      location: data,
    },
  };
};
