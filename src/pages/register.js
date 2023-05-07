import Link from "next/link";
import { BsFacebook, BsPencilSquare } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useContext, useState } from "react";
import { RootContext } from "@/context/RootContext";
import toast from 'react-hot-toast';

const Registration = () => {
  const {REGISTER} = useContext(RootContext)
  const [errors,setErrors]= useState(null)
  const { register, handleSubmit } = useForm();
  const handleRegister = (data)=>{
    console.log(data)
    REGISTER(data).then(res=>{
      toast.success('REGISTER success')
      setErrors(null)
    })
    .catch(err => {
      console.log(err) ; 
      toast.error(err.data?.message)
      setErrors(err.data?.errors)
      
    
    } )


  }
  
  const backgroundClass = classNames("bg-[url('https://i.ibb.co/cktYxxd/res1.png')] max-h-[120%] bg-no-repeat bg-center bg-cover bg-fixed");
  const formClass = classNames("relative bg-[#000000b0] w-[80%] md:w-[50%] lg:w-[35%] text-white mx-auto mt-20 lg:mt-32 py-10 px-8 rounded shadow-2xl");
  const buttonAnimation = classNames("transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#627ff4]  duration-300");
  const registerButton = classNames("bg-[#627FF4] w-full py-1 my-3 rounded-lg hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold");
  const errorClassName = classNames("input input-error input-sm w-full max-w-sm my-2 focus:outline-none")
  const sucessClassName = classNames("input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300 ")
  return (
    <>
    <Head>
      <title>Register Page</title>
    </Head>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <BsPencilSquare className="absolute top-[-6%] left-[42%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Create an account </h1>
            <div className="text-left px-5">
              {/* -------Registration form-------- */}
              <form className="text-left" onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <input
                  {...register("username")}
                    type="text"
                    placeholder="User Name"
                    className={ errors?.username ? errorClassName:sucessClassName}
                  />
                  {errors?.username && <p className="text-red-600 text-[14px] mt-[-6px] mb-[5px] text-right">{errors.username?.message}</p>}
                 
                  <input
                  {...register("phone")}
                    type="text"
                    placeholder="Phone No"
                    className={ errors?.phone ? errorClassName:sucessClassName}
                  />
                  {errors?.phone && <p className="text-red-600 text-[14px] mt-[-6px] mb-[5px] text-right">{errors.phone?.message}</p>}

                  <input
                  {...register("country")}
                    type="text"
                    placeholder="Country"
                    className={ errors?.country ? errorClassName:sucessClassName}
                  />
                  {errors?.country && <p className="text-red-600 text-[14px] mt-[-6px] mb-[5px] text-right">{errors.country?.message}</p>}

                  <input
                  {...register("email")}
                    type="email"
                    placeholder="Email"
                    className={ errors?.email ? errorClassName:sucessClassName}
                  />
                  {errors?.email && <p className="text-red-600 text-[14px] mt-[-6px] mb-[5px] text-right">{errors.email?.message}</p>}

                  <input
                  {...register("password")}
                    type="password"
                    placeholder="Password"
                    className={ errors?.password ? errorClassName:sucessClassName}
                  />
                  {errors?.password && <p className="text-red-600 text-[14px] mt-[-6px] mb-[5px] text-right">{errors.password?.message}</p>}

                </div>
                <button type="submit" className={`${registerButton}`}>
                  Register
                </button>
              </form>

              {/* -------Already have an account ?------- */}
              <div className="text-center">
                <h5 className="text-slate-300 text-center font-normal text-md">
                  Already have an account ?
                  <Link
                    href="/login"
                    className="text-[#627ff4] hover:text-white pl-2"
                  >
                    Login
                  </Link>
                </h5>
              </div>

              {/* -------Already have an account ?------- */}
              <div className="text-center pt-3">
                <div>More Sign In Methods</div>
                <div className="divider bg-white h-[2px] my-2"></div>
                <div className="flex gap-5 text-3xl justify-center items-center">
                  <AiFillGoogleCircle
                    className={`${buttonAnimation} text-4xl`}
                  />
                  <BsFacebook className={`${buttonAnimation}`} />
                  <AiFillTwitterCircle
                    className={`${buttonAnimation} text-4xl`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
