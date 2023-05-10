import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import classNames from "classnames";
import { RiMessage2Fill } from "react-icons/ri";

const TourType = () => {
  const posts = [
    {
      id: "1",
      name: "Uncategorised",
      slug: "tour",
      description: "type for wild life"
    }
  ];

  const inputStyles = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] placeholder:text-sm hover:shadow-lg "
  );

  const labelStyle = classNames(
    "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none  dark:peer-focus:text-primary"
  );

  const selectStyle = classNames(
    "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[0.625rem] placeholder:text-sm hover:shadow-lg"
  );

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300  py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="w-[100%] grid gap-10 grid-cols-1 lg:grid-cols-2 px-0 lg:px-10">
            {/* -------------Create tour type------------- */}
            <div>
              <h1 className="text-md lg:text-lg pb-5 dark:text-black">Add New Tour Type :</h1>
              <form>
                <div>
                  {/* <!--Input for name--> */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Name
                    </label>
                  </div>
                  {/* <!--Input for slug--> */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <input
                      type="text"
                      class={inputStyles}
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput" class={labelStyle}>
                      Slug
                    </label>
                  </div>
                  {/* -----------------Select for duration---------------- */}
                  <div class="relative mb-3 bg-slate-50 rounded">
                    <select class={selectStyle}>
                      <option
                        disabled
                        selected
                        value="1"
                        className="text-neutral-500"
                      >
                        Parent Tour Type
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
                  {/* <!-------Input for details--------> */}
                  <div class="relative mb-3 bg-slate-50 rounded" data-te-input-wrapper-init>
                    <textarea
                      class="peer m-0 block h-[100px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] hover:shadow-lg dark:text-neutral-500"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                    <label for="exampleFormControlTextarea1" class={labelStyle}>
                      Description
                    </label>
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
            {/* ----------Show tour type--------- */}
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr className="shadow-lg border-b-2 border-blue-300">
                    <th>Name</th>
                    <th>Description</th>
                    <th>Slug</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {posts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>
                          {post.name}
                          <div className="text-sm text-gray-400">
                            <span className="hover:text-blue-800 hover:cursor-pointer">
                              Edit
                            </span>{" "}
                            |{" "}
                            <span className="hover:text-blue-800 hover:cursor-pointer">
                              Delete
                            </span>{" "}
                            |
                            <span className="hover:text-blue-800 hover:cursor-pointer">
                              View
                            </span>
                          </div>
                        </td>
                        <td className="text-sm">{post.description}</td>
                        <td>{post.slug}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default TourType;

TourType.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
