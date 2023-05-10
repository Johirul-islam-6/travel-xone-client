import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/mainService.module.css";

const Blogdetails = () => {
  const router = useRouter();
  const id = router.query.blogdetails;

  const [single, setSingle] = useState({});
  useEffect(() => {
    fetch(`https://assignment-11-server-ridoymia.vercel.app/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data);
        console.log(data);
      });
  }, [id]);



  return (
    <section>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          {single?.title}
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          {single?.description?.slice(0, 53)}
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div className="container mx-auto py-12">
        <div className="">
          <div className="flex justify-center items-center">
            <img className={styles.BlogImg} src={single?.img} lazyLoad={true}></img>
          </div>
          <h1 className="pt-5 pb-1 text-lg font-semibold text-black text-center">Description :</h1>
          <p className="text-justify text-md text-black px-10">
            {single?.description?.slice(101, 5000)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogdetails;
