import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import classNames from "classnames";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AddNew = () => {
  const inputStyles = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] placeholder:text-sm hover:shadow-lg"
  );

  const labelStyle = classNames(
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  );

  const selectStyle = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm hover:shadow-lg bg-slate-50 rounded"
  );

  return (
    <>
      <Head>
        <title>Add New User</title>
      </Head>
      <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300 px-10">
          {/* -------------body content Start------------------ */}
          <div className=" px-0 py-0 lg:px-20 lg:py-10">
            <h1 className="text-lg lg:text-xl">
              Create a brand new user and add them to this site :
            </h1>
            <div className="divider -mt-1"></div>
            <form>
              {/* <!--Input for user name--> */}
              <div class="relative mb-3 bg-slate-50 rounded">
                <input
                  type="text"
                  class={inputStyles}
                  id="floatingInput"
                  placeholder="username"
                  required
                />
                <label for="floatingInput" class={labelStyle}>
                  User Name
                </label>
              </div>
              {/* <!--Input for email--> */}
              <div class="relative mb-3 bg-slate-50 rounded">
                <input
                  type="email"
                  class={inputStyles}
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput" class={labelStyle}>
                  Email
                </label>
              </div>
              {/* <!--Input for First Name--> */}
              <div class="relative mb-3 bg-slate-50 rounded">
                <input
                  type="text"
                  class={inputStyles}
                  id="floatingInput"
                  placeholder="First Name"
                />
                <label for="floatingInput" class={labelStyle}>
                  First Name
                </label>
              </div>
              {/* <!--Input for Last Name--> */}
              <div class="relative mb-3 bg-slate-50 rounded">
                <input
                  type="text"
                  class={inputStyles}
                  id="floatingInput"
                  placeholder="Last Name"
                />
                <label for="floatingInput" class={labelStyle}>
                  Last Name
                </label>
              </div>
              {/* <!--Input for website--> */}
              <div class="relative mb-3 bg-slate-50 rounded">
                <input
                  type="text"
                  class={inputStyles}
                  id="floatingInput"
                  placeholder="website"
                />
                <label for="floatingInput" class={labelStyle}>
                  Website
                </label>
              </div>
              {/* <!--Input for Password Generate--> */}
              <div class="grid gap-3 grid-cols-1 lg:grid-cols-3 relative mb-3 items-center">
                <div className="">
                  <input
                    type="text"
                    class={selectStyle}
                    id="floatingInput"
                    value="Generate Password"
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    class={selectStyle}
                    id="floatingInput"
                    value="*************"
                  />
                </div>
                <div className="">
                  <button className="btn gap-2">
                    {/* <AiFillEye/> */}
                    <AiFillEyeInvisible />
                    Hide
                  </button>
                </div>
              </div>
              {/* <!--Select for duration, tour type and group size--> */}
              
                {/* -----------------Select for Role---------------- */}
                <div class="relative mb-3 bg-slate-50 rounded max-w-xs">
                  <select class={selectStyle}>
                    <option
                      disabled
                      selected
                      value="1"
                      className="text-neutral-500"
                    >
                      Select Role
                    </option>
                    <option value="2">Subscriber</option>
                    <option value="3">Contributor</option>
                    <option value="4">Author</option>
                    <option value="5">Editor</option>
                    <option value="5">Administrator</option>
                  </select>
                </div>
                {/* -------User Notification------------ */}
                <div className="form-control w-[55%]">
                  <label className="cursor-pointer label">
                  <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Send the new user notification an email about their account</span>
                  </label>
                </div>

                {/* <!--Submit button--> */}
                <button
                  type="submit"
                  class="inline-block rounded bg-primary px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Add New User
                </button>
              
            </form>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default AddNew;

AddNew.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
