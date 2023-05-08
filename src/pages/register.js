import Link from "next/link";
import { BsFacebook, BsPencilSquare } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { useContext, useState } from "react";
import { RootContext } from "@/context/RootContext";
import toast from "react-hot-toast";

const Registration = () => {
  // const {REGISTER} = useContext(RootContext)
  // const [errors,setErrors]= useState(null)
  // const { register, handleSubmit } = useForm();
  // const handleRegister = (data)=>{
  //   console.log(data)
  //   REGISTER(data).then(res=>{
  //     toast.success('REGISTER success')
  //     setErrors(null)
  //   })
  //   .catch(err => {
  //     console.log(err) ;
  //     toast.error(err.data?.message)
  //     setErrors(err.data?.errors)
  //   } )
  // }

  const backgroundClass = classNames(
    "bg-[url('https://i.ibb.co/cktYxxd/res1.png')] max-h-[120%] bg-no-repeat bg-center bg-cover bg-fixed"
  );
  const formClass = classNames(
    "relative bg-[#000000b0] w-[80%] md:w-[50%] lg:w-[35%] text-white mx-auto mt-20 lg:mt-32 py-10 px-8 rounded shadow-2xl"
  );
  const buttonAnimation = classNames(
    "transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:text-[#627ff4] hover:bg-white hover:text-blue-500  duration-300"
  );
  const registerButton = classNames(
    "bg-[#627FF4] w-full py-1 my-3 rounded-lg hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold"
  );
  const errorClassName = classNames(
    "input input-error input-sm w-full max-w-sm my-2 focus:outline-none"
  );
  const successClassName = classNames(
    "input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300 "
  );
  // const sucessClassName = classNames("input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300 ")
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
              <form className="text-left">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={successClassName}
                  />
                  <input
                    type="text"
                    placeholder="Phone No"
                    className={successClassName}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={successClassName}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className={successClassName}
                  />
                </div>
                <button type="submit" className={`${registerButton}`}>
                  Register
                </button>
              </form>
              {/* -------Registration form--------
              <form className="text-left" >
                <div>
                  <input
                  {...register("username")}
                    type="text"
                    placeholder="User Name"
                    className={sucessClassName}
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
              </form> */}

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
                <button
                  class="group h-10  px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div class="relative flex items-center space-x-8 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      class="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span class="block w-max tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600">
                      Google Sign In
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
