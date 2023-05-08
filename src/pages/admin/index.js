import Head from "next/head";
import AdminSidebar from "../../../components/admin/adminSidebar";
import VisitorChart from "../../../components/Chart/visitorChart";
import LineChart from "../../../components/Chart/chart";
import Card from "../../../components/DashboardCard/card";

const admin = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
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
    </>
  );
};

export default admin;

admin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
