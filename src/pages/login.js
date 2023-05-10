import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import classNames from "classnames";
import { useContext, useState } from "react";

import toast from 'react-hot-toast';
import Head from 'next/head'

import { AuthContext } from "@/ContextApi";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { user, Login, loading, setLoading, Gsignin } = useContext(AuthContext)

  const handleRouter = () => {
    router.push('/')
  }
  const loginhandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Login(email, password)
      .then(res => {
        console.log(res);
        handleRouter()
      }).catch(e => {
        console.log(e);
      })
  }
  const googlesignin = () => {
    Gsignin()
      .then(res => {
        const userinfo = {
          email: res?.user?.email,
          role: "user"
        }
        fetch(`https://travel-xone-server-five.vercel.app/api/v1/chena`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userinfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            handleRouter()
          });

      }).catch(e => {
        console.log(e);
      })
  }


  const backgroundClass = classNames("bg-[url('https://i.ibb.co/hRKMMLH/Rectangle.png')] max-h-screen bg-no-repeat bg-center bg-cover bg-fixed");
  const formClass = classNames("relative bg-[#000000b0] w-[80%] md:w-[40%] lg:w-[25%] text-white mx-auto mt-20 lg:mt-32 py-10 px-5 rounded shadow-2xl");
  const loginButton = classNames("rounded-xl bg-[#627FF4] w-full py-1 my-3 rounded-sm hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold");
  const successClassName = classNames(
    "input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300 "
  );
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <FaUserAlt className="absolute top-[-10%] left-[40%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Login </h1>
            <div className="text-left px-5">
              {/* -------Registration form-------- */}
              <form className="text-left" onSubmit={loginhandler}>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={successClassName}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={successClassName}
                  />
                </div>
                <button type="submit" className={`${loginButton}`}>
                  Log In
                </button>
              </form>
              <div className="text-center">
                <Link
                  className="text-[#627ff4] align-center font-normal text-lg"
                  href="/recovery"
                >
                  <h5 className="hover:text-white">Forget password?</h5>
                </Link>
              </div>
              <p className="text-slate-300 text-sm text-center">
                Dont have an account ?
                <Link
                  href="/register"
                  className="text-[#627ff4] pl-2 hover:text-white"
                >
                  Register
                </Link>
              </p>
              <div className="divider my-1"></div>
              {/* -------Admin LogIn ?------- */}
              {/* <div className="text-center">
                <h5 className="text-slate-300 text-center font-normal text-sm">
                  Log In for 
                  <Link
                    href="/adminLogin"
                    className="text-[#627ff4] hover:text-white pl-2"
                  >
                    Admin 
                  </Link>
                </h5>
              </div> */}
              {/* -------Already have an account ?------- */}
              <div className="text-center pt-3">
                <button onClick={googlesignin}
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

export default Login;
