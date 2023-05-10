import Head from "next/head";
import classNames from "classnames";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";
import { AuthContext } from "@/ContextApi";

const AdminProfile = () => {
  const [isActive, setIsActive] = useState();
  const [bookingdata, setBookingData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://travel-xone-server-five.vercel.app/api/v1/bookings?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
        console.log(data, "bookings");
      });
  }, [user?.email]);

  const labelStyle = classNames(
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  );
  const valueStyle = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-400 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm hover:shadow-lg bg-slate-50 rounded bg-white"
  );
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <div className=" px-0 lg:px-20 ">
          <h1 className="text-lg lg:text-xl">Personal Options :</h1>
          <div className="divider -mt-1"></div>
          <form>
            <div className="grid gap-3 grid-cols-2">
              {/* <!--Input for user name--> */}
              <div class="relative mb-5">
                <p class="text-base font-medium leading-none text-gray-800 pb-2">
                  User Name :
                </p>
                <input
                  type="text"
                  class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-400 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm bg-white "
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
                <p class="text-base font-medium leading-none text-gray-800 pb-2">
                  Email :
                </p>
                <input
                  type="email"
                  class={valueStyle}
                  id="floatingInput"
                  value="name@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              {/* <!--Input for First Name--> */}
              <div class="relative mb-5">
                <p class="text-base font-medium leading-none text-gray-800 pb-2">
                  First Name :
                </p>
                <input
                  type="text"
                  class={valueStyle}
                  id="floatingInput"
                  value="Babul"
                />
              </div>
              {/* <!--Input for Last Name--> */}
              <div class="relative mb-5">
                <p class="text-base font-medium leading-none text-gray-800 pb-2">
                  Last Name:
                </p>
                <input
                  type="text"
                  class={valueStyle}
                  id="floatingInput"
                  value="Mia"
                />
              </div>
            </div>
            {/* <!--Input for details--> */}
            <div class="relative mb-6" data-te-input-wrapper-init>
              <textarea
                class="peer m-0 block h-[100px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] hover:shadow-lg bg-white"
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
                <div
                  onClick={() => setIsActive(!isActive)}
                  className="bg-gray-500 px-10 py-4 hover:cursor-pointer hover:shadow-lg transition duration-200 ease-linear max-w-xs rounded hover:bg-blue-600 text-white"
                >
                  Set New Password
                </div>
              </div>
              {isActive && (
                <div className="flex gap-3 pt-3">
                  <div>
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
                  </div>
                </div>
              )}
            </div>
            {/* -----------log out---------- */}
            <div className="mb-5">
              <button className="btn btn-outline btn-error">
                Log Out Everywhere Else
              </button>
              <p className="text-sm text-gray-400 w-full lg:w-[55%]">
                Did you lose your phone or leave your account logged in at a
                public computer? You can log out everywhere else, and stay
                logged in here.
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
      </UserDashboardLayout>
    </>
  );
};

export default AdminProfile;

AdminProfile.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
