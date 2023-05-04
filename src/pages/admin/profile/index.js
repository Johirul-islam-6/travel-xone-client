import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import classNames from "classnames";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const AdminProfile = () => {
  const [isActive, setIsActive] = useState();
  const inputStyles = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] placeholder:text-sm hover:shadow-lg"
  );

  const labelStyle = classNames(
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  );

  const valueStyle = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-400 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm hover:shadow-lg"
  );
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 px-10">
          {/* -------------body content Start------------------ */}
          <div className=" px-0 py-0 lg:px-20 lg:py-10">
            <h1 className="text-lg lg:text-xl">Personal Options :</h1>
            <div className="divider -mt-1"></div>
            <form>
              {/* <!--Input for user name--> */}
              <div class="relative mb-5">
                <input
                  type="text"
                  class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-400 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm "
                  id="floatingInput"
                  value="User Name"
                  disabled
                />
                <p className="text-sm text-gray-400">
                  Usernames cannot be changed.
                </p>
              </div>
              {/* <!--Input for email--> */}
              <div class="relative mb-5">
                <input
                  type="email"
                  class={valueStyle}
                  id="floatingInput"
                  value="name@example.com"
                  required
                />
                <p className="text-sm text-gray-400">
                  If you change this, an email will be sent at your new address
                  to confirm it. The new address will not become active until
                  confirmed.
                </p>
              </div>
              {/* <!--Input for First Name--> */}
              <div class="relative mb-5">
                <input
                  type="text"
                  class={valueStyle}
                  id="floatingInput"
                  value="Babul"
                />
              </div>
              {/* <!--Input for Last Name--> */}
              <div class="relative mb-5">
                <input
                  type="text"
                  class={valueStyle}
                  id="floatingInput"
                  value="Mia"
                />
              </div>
              {/* <!--Input for website--> */}
              <div class="relative mb-5">
                <input
                  type="text"
                  class={valueStyle}
                  id="floatingInput"
                  value="https://demo.webapp.com"
                />
              </div>
              {/* <!--Input for details--> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  class="peer m-0 block h-[100px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] hover:shadow-lg"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
                <label for="exampleFormControlTextarea1" class={labelStyle}>
                  Biographical Info
                </label>
                <p className="text-sm text-gray-400">
                  Share a little biographical information to fill out your
                  profile. This may be shown publicly.
                </p>
              </div>

              {/* ----------Profile Image--------- */}
              <div className="mb-6">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src="https://i.ibb.co/HB7Q1FD/young-bearded-man-with-striped-shirt-273609-5677.jpg" />
                  </div>
                </div>
                <div>
                  <a
                    className="text-sm text-gray-400 hover:text-blue-700 underline"
                    href="https://en.gravatar.com/"
                  >
                    You can change your profile picture on Gravatar.
                  </a>
                </div>
              </div>
              {/* <!--Input for Password Generate--> */}
              <div class="relative mb-6">
                <div>
                <div onClick={()=>setIsActive(!isActive)} className="border px-10 py-4 hover:cursor-pointer hover:shadow-lg transition duration-200 ease-linear max-w-xs rounded hover:bg-gray-500 hover:text-white">Set New Password</div>
                </div>
                {isActive &&
                <div className="flex gap-3 pt-3"><div>
                  <input
                    type="password"
                    class={valueStyle}
                    id="floatingInput"
                    value="*************"
                  />
                </div>
                <div className="flex gap-3">
                <div>
                  <button className="btn btn-outline btn-info gap-2">
                    {/* <AiFillEye/> */}
                    <AiFillEyeInvisible />
                    Hide
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline btn-error">
                    Cancel
                  </button>
                </div>
                </div></div>
                }
              </div>
              {/* -----------log out---------- */}
              <div className="mb-5">
              <button className="btn btn-outline btn-error">Log Out Everywhere Else</button>
              <p className="text-sm text-gray-400 w-full lg:w-[55%]">
              Did you lose your phone or leave your account logged in at a public computer? You can log out everywhere else, and stay logged in here.
                </p>
              </div>
             
              
              {/* <!--Submit button--> */}
              <button
                type="submit"
                class="inline-block rounded bg-primary px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-3"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Update Profile
              </button>
            </form>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default AdminProfile;

AdminProfile.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
