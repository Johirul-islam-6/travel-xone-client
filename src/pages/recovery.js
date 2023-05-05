import { BsFillEnvelopeFill } from "react-icons/bs";
import classNames from "classnames";
import Head from "next/head";
import { useContext } from "react";
import { RootContext } from "@/context/RootContext";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";


const recovery = () => {
  const { register, handleSubmit } = useForm();
  const {SENTEMAIL} = useContext(RootContext)

  const handleVerification = (data)=>{
    SENTEMAIL(data).then(res=>{
      toast.success('email sent successfully')
      console.log(res)
    })
    .catch(err => {console.log(err) ; toast.error(err.data?.message)} )

  }
  const backgroundClass = classNames("bg-[url('https://i.ibb.co/hRKMMLH/Rectangle.png')] max-h-screen bg-no-repeat bg-center bg-cover bg-fixed");
  const formClass = classNames("relative bg-[#000000b0] w-[80%] md:w-[40%] lg:w-[25%] text-white mx-auto mt-20 lg:mt-32 py-10 px-5 rounded shadow-2xl");
  const submitButton = classNames("bg-[#627FF4] w-full py-1 my-3 rounded-sm hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold");
  return (
    <>
    <Head>
      <title>Forget Password</title>
    </Head>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <BsFillEnvelopeFill className="absolute top-[-13%] left-[40%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-7 text-xl">Password Recover</h1>
            <div className="text-left px-5">
              <form className="text-left" onSubmit={handleSubmit(handleVerification)}>
                <div className="py-2">
                  <p className="text-left text-slate-200 text-[15px] font-normal">
                    Email :
                  </p>
                  <input
                  {...register('email')}
                    className="w-full border-b-2 focus:outline-none font-light text-slate-300 text-[14px] bg-[#00000000] "
                    type="email"
                  />
                </div>

                <button type="submit" className={`${submitButton}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default recovery;
