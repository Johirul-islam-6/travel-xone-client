import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";
import Link from "next/link";
import { AiFillPushpin } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";

const Reviews = () => {
  const [edit, setEdit] = useState();
  const posts = [
    {
      id: "1",
      author: "Abul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "01-03-2023",
    },
    {
      id: "2",
      author: "Babul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      author: "Kabul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "20-03-2023",
    },
  ];
  return (
    <>
      <Head>
        <title>Review Page</title>
      </Head>
      <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto text-black">
            {/* ---------------Edit Comment---------------- */}
            {edit && <form class="w-full">
              <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 pb-10">
                {/* ---------Left Side Content---------- */}
                <div className="bg-white p-10">
                  <h1 className="-mb-2">Author</h1>
                  <div className="divider"></div>
                  <div className="form-control w-full">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      value="Abul"
                      className="input input-bordered w-full text-gray-500"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      value="abul@gmail.com"
                      className="input input-bordered w-full text-gray-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Review</label>
                    <textarea
                      className="textarea textarea-bordered h-24 text-gray-500"
                      value="In publishing and graphic design, Lorem ipsum is a placeholder text commonly"
                    ></textarea>
                  </div>
                </div>
                {/* ----------Right side content---------- */}
                <div className="bg-white p-10">
                  <h1 className="-mb-2">Save</h1>
                  <div className="divider"></div>
                  <div className="flex"><AiFillPushpin/><h1 className="ml-2">Status</h1></div>   
                  <div className="pl-5">
                    <div className="flex">
                        <input
                          type="radio"
                          name="radio"
                          className="checked:bg-blue-500"
                          checked
                        /> 
                        <label className="label"><span className="label-text">Approved</span>
                      </label>
                    </div>
                    <div className="flex">
                        <input
                          type="radio"
                          name="radio"
                          className="checked:bg-blue-500"
                          
                        /> 
                        <label className="label"><span className="label-text">Pending</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex py-2"><MdDateRange/><p className="ml-2">Submitted on: 21 February 2023 at 06:12</p></div>
                  <div className="flex py-2"><RiMessage2Fill/><p className="ml-2"> In response to: <a href="/" className="text-blue-700">Hello world!</a></p></div>
                  <div className="divider"></div>
                  {/* ------------------Button----------- */}
                  <div className="flex justify-between">
                    <div><button className="btn btn-error">Delete</button></div>
                    <div><button className="btn btn-primary">Update</button></div>
                  </div>
                </div>
              </div>
            </form>}
            

            {/* -----------Show All comments----------- */}
            <div className="text-sm pb-2">
              <span className="text-blue-800 hover:cursor-pointer">
                All (3)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Pending (0)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Approved (1)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Delete (0)
              </span>
            </div>
            <table className="table w-full dark:text-white">
              {/* head */}
              <thead>
                <tr className="shadow-lg border-b-2 border-blue-300">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Author</th>
                  <th>Comment</th>
                  <th>In response to</th>
                  <th>Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{post.author}</td>
                      <td>
                        {post.comment.slice(0, 15) + "..."}
                        <div className="text-sm text-gray-400">
                          <span className="hover:text-blue-800 hover:cursor-pointer">
                            Unapprove
                          </span>{" "}
                          |{" "}
                          <span onClick={()=> setEdit(!edit)} className="hover:text-blue-800 hover:cursor-pointer">
                            View
                          </span>{" "}
                          |{" "}
                          <span className="hover:text-red-600 hover:cursor-pointer">
                            Delete
                          </span>{" "}
                        </div>
                      </td>
                      <td>
                        {post.response}
                        <div className="text-sm text-gray-400 hover:text-green-600">
                          <Link href="/">View Post</Link>
                        </div>
                        <div className="text-sm text-gray-400">1</div>
                      </td>
                      <td>{post.publishDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default Reviews;

Reviews.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
