import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import classNames from "classnames";

const AddNew = () => {
  const inputStyles = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] placeholder:text-sm hover:shadow-lg"
  );

  const labelStyle = classNames(
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
  );

  const selectStyle = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm hover:shadow-lg"
  );

  return (
    <>
      <Head>
        <title>Add New Post</title>
      </Head>
      <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between ">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300 py-10 px-10 ">
          {/* -------------body content Start------------------ */}
          <div className=" px-0 py-0 lg:px-20 lg:py-10">
            <h1 className="text-lg lg:text-xl">Add New Post :</h1>
            <div className="divider -mt-1"></div>
            <form>
              <div>
                {/* <!--Input for title--> */}
                <div class="relative mb-3 bg-slate-50 rounded">
                  <input
                    type="text"
                    class={inputStyles}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" class={labelStyle}>
                    Title
                  </label>
                </div>
                {/* <!--Input for details--> */}
                <div class="relative mb-3 bg-slate-50 rounded" data-te-input-wrapper-init>
                  <textarea
                    class="peer m-0 block h-[100px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] hover:shadow-lg"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                  <label for="exampleFormControlTextarea1" class={labelStyle}>
                    Description
                  </label>
                </div>
                {/* <!--Input for price and tour Group size--> */}
                <div className="grid gap-0 md:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {/* -----------------Input for Price---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Price
                    </label>
                  </div>
                  {/* -----------------Input for Group Size---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Group Size
                    </label>
                  </div>
                </div>
                {/* <!--Select for duration, tour type and group size--> */}
                <div className="grid gap-0 md:gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                  {/* -----------------Select for duration---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <select class={selectStyle}>
                      <option
                        disabled
                        selected
                        value="1"
                        className="text-neutral-500"
                      >
                        Select Duration
                      </option>
                      <option value="2">3 days</option>
                      <option value="3">5 days</option>
                      <option value="4">7 days</option>
                      <option value="5">9 days</option>
                    </select>
                  </div>
                  {/* -----------------Select for Tour Type---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <select class={selectStyle}>
                      <option
                        disabled
                        selected
                        value="1"
                        className="text-neutral-500"
                      >
                        Select Tour Type
                      </option>
                      <option value="2">Archaeological</option>
                      <option value="3">Ancient City</option>
                      <option value="4">Cultural</option>
                      <option value="5">Historical</option>
                      <option value="6">Beach</option>
                      <option value="7">Adventure</option>
                      <option value="8">wild life</option>
                      <option value="8">Natural</option>
                    </select>
                  </div>
                  {/* -----------------Input for Language---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Supported Language
                    </label>
                  </div>
                </div>
                {/* <!--Input for Place Address and tour District--> */}
                <div className="grid gap-0 md:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {/* -----------------Input for Place Address---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Place Address
                    </label>
                  </div>
                  {/* -----------------Input for District---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      District
                    </label>
                  </div>
                </div>
                {/* -------------Image Upload--------------- */}
                <div class="mb-3 ">
                  <label
                    for="formFileMultiple"
                    class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                  >
                    Upload Images
                  </label>
                  <input
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary hover:shadow-lg bg-slate-50 "
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                {/* <!--Submit button--> */}
                <button
                  type="submit"
                  class="inline-block rounded bg-primary px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  POST
                </button>
              </div>
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
