import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";





const General = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default General;

General.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
