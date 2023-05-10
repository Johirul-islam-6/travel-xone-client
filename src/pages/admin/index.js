import Head from "next/head";
import AdminSidebar from "../../../components/admin/adminSidebar";
import VisitorChart from "../../../components/Chart/visitorChart";
import LineChart from "../../../components/Chart/chart";
import Card from "../../../components/DashboardCard/card";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";

const admin = () => {

  const { user, logOut, setLoading, admin, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://travel-xone-server-five.vercel.app/api/v1/chena?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data[0]?.role == 'admin') {
          setAdmin(true)
        }
      });
  }, [user?.email]);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      {
        admin ? <>

          <div className="h-screen block lg:flex justify-between">
            <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between"><AdminSidebar /></div>
            <div className="w-[100%] lg:w-[80%] bg-slate-300 py-10 px-10">
              {/* -------------body content------------------ */}
              <Card />
              <div className="w-[100%] grid gap-5 grid-cols-1 lg:grid-cols-2 pt-10">
                <div>
                  <LineChart />
                </div>
                <div>
                  <VisitorChart />
                </div>
              </div>
            </div>
          </div>

        </> : <>
          <div className="flex w-[100%] h-[100vh] bg-white justify-center items-center px-20">
            <h1 className="text-3xl text-black pt-10%">Your Not a Vaild Admin. Please check your admin email !!!</h1>
          </div>
        </>


      }



    </>
  );
};

export default admin;

admin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
