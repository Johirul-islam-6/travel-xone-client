import React from "react";
import img from "../../components/Images/errorpage/errorpage (1).png";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="bg-white pt-40 md:pt-50 lg:pt-60 pb-10">
      <div className=" w-1/2 mx-auto">
        <div className="text-center w-[60%] md:w-[40%] lg:w-[30%] mx-auto">
          <Image src={img} alt="image" />
        </div>
      </div>
      <h2 className="text-4xl font-bold text-red-400 text-center">Oops !</h2>
      <h1
        className="text-xl text-center font-bold mt-4 mb-3"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          backgroundImage: "linear-gradient(to right, #4F46E5, #E61F5B)",
        }}
      >
        404 Page Not Found
      </h1>

      <h2 className="text-lg text-center w-full lg:w-2/5 m-auto text-slate-500">
        sorry, the page you're looking for doesn't exist
      </h2>
      <div className="text-center mt-4 pb-10">
        <Link className="text-center" href="/">
          <button className="btn btn-outline text-xs font-normal">
            Back To Homepage
          </button>
        </Link>
      </div>
    </div>

    
  );
};

export default ErrorPage;
