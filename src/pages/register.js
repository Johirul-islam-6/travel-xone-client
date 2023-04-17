import Link from "next/link";
import { BsFacebook, BsPencilSquare } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";

const Registration = () => {
  const { user, createUser, Gsignin,loading,setLoading } = useContext(AuthContext);
  

  const submit = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const username = e.target.username.value;
    const country = e.target.country.value;
    const fullname = e.target.fullname.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    if (!Email || !username || !country || !fullname || !phone || !password) {

      return <p>fillup all form</p>

    }
    else {
      createUser(Email, password)
        .then(res => {
          if (res) {
            console.log(res)
          }
        }).then(r => {
          console.log(r)
        })
    }

  }
  const googlesubmit = () => {
    Gsignin().then(res => {
      console.log(res)
    }).then(e => {
      console.log(e)
    })
  }




  const backgroundClass = classNames(
    "bg-[url('https://i.ibb.co/cktYxxd/res1.png')] max-h-[120%] bg-no-repeat bg-center bg-cover bg-fixed"
  );
  const formClass = classNames(
    "relative bg-[#000000b0] w-[80%] md:w-[50%] lg:w-[35%] text-white mx-auto mt-20 lg:mt-32 py-10 px-8 rounded shadow-2xl"
  );
  const buttonAnimation = classNames(
    "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#627ff4]  duration-300"
  );
  const registerButton = classNames(
    "bg-[#627FF4] w-full py-1 my-3 rounded-lg hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold"
  );
  return (
    <>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <BsPencilSquare className="absolute top-[-6%] left-[42%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Create an account </h1>
            <div className="text-left px-5">
              {/* -------Registration form-------- */}
              <form className="text-left" onSubmit={submit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-ghost input-sm w-full max-w-sm my-2 placeholder:text-slate-300"
                  />
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
                  <AiFillGoogleCircle onClick={googlesubmit}
                    className={`${buttonAnimation} text-4xl`}
                  />
                  {/* <BsFacebook className={`${buttonAnimation}`} />
                  <AiFillTwitterCircle
                    className={`${buttonAnimation} text-4xl`}
                  /> */}
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
