import Head from "next/head";
import { RiMessage2Fill } from "react-icons/ri";
import Link from "next/link";
import { AiFillPushpin } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
import UserDashboardLayout from "../../../../components/userDashboardLayout";

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
      author: "Abul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      author: "Abul",
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
      <UserDashboardLayout>
        {/* -------------body content Start------------------ */}
        <div className="overflow-x-auto text-black">
          {/* ---------------Edit Comment---------------- */}
          {edit && (
            <form class="w-full">
              <div className=" pb-10">
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
                    <label className="label">Edit Review</label>
                    <textarea
                      className="textarea textarea-bordered h-24 text-gray-500"
                      value="In publishing and graphic design, Lorem ipsum is a placeholder text commonly"
                    ></textarea>
                  </div>
                  <div className="divider"></div>
                  {/* ------------------Button----------- */}
                  <div className="flex justify-between">
                    <div>
                      <button className="btn btn-error">Delete</button>
                    </div>
                    <div>
                      <button className="btn btn-primary">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* -----------Show All comments----------- */}
          <table className="table w-full">
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
                      {post.comment.slice(0,90) + "..."}
                      <div className="text-sm text-gray-400">
                        
                        <span
                          onClick={() => setEdit(!edit)}
                          className="hover:text-blue-800 hover:cursor-pointer"
                        >
                          Edit
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
      </UserDashboardLayout>
    </>
  );
};

export default Reviews;

Reviews.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
