import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";



const ImportPage = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between"><AdminSidebar /></div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 py-10 px-10">
          {/* -------------body content Start------------------ */}
          {/* -------------body content End------------------ */}
          
        </div>
      </div>
    </>
  );
};

export default ImportPage;

ImportPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
