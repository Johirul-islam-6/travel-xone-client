import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
//
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-ridoymia.vercel.app/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <section>
        {/* -----------header design Start----------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
          <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
            Blogs
          </h1>
          <p className="pl-10 lg:pl-20 text-slate-400">
            All update Informations
          </p>
        </div>
        {/* -----------header design end----------- */}
        <div className="bg-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 md:p-20 lg:p-20">
            {blogs?.map((b) => (
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={b?.img}
                    alt="Shoes"
                    loading="lazy"
                    className="w-[500px] h-[200px] lg:h-[240px]"
                  />
                </figure>
                <div className="card-body dark:bg-slate-100">
                  <h1 className="card-title font-normal dark:text-black">{b?.title}</h1>
                  <h2 className="text-[17px] text-slate-600">
                    {b?.description.slice(0, 120)}..
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn bg-blue-500 border-none dark:text-black">
                      <Link href={`Travels/${b?._id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
