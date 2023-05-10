import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import Link from "next/link";



const AllUsers = () => {
  const posts = [
    {
      id: "1",
      userName: "Abul",
      name: "Abul Kalam Azad",
      email: "abul@gmail.com",
      role: "Administrator",
      post: "1"
    },
    {
      id: "1",
      userName: "Babul",
      name: "Babul Mia",
      email: "babul@gmail.com",
      role: "Contributor",
      post: "1"
    },
    {
      id: "1",
      userName: "Abul",
      name: "Abul Kalam Azad",
      email: "abul@gmail.com",
      role: "Subscriber",
      post: "-"
    }
  ];
  return (
    <>
      <Head>
        <title>All Users</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between"><AdminSidebar /></div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto text-black">
            <div className="text-sm pb-2 text-gray-400">
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer pr-2">
                All (1)
              </span>
              |
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer px-2 ">
              Administrator (1)
              </span>
              |
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer px-2">
                Editor (0)
              </span>
              |
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer px-2">
                Author (0)
              </span>
              |
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer px-2">
                Contributor (0)
              </span>
              |
              <span className="text-slate-50 hover:text-blue-800 hover:cursor-pointer pl-2">
                Subscriber (0)
              </span>
            </div>
            <table className="table w-full dark:text-[#d6d3d3] ">
              {/* ------------head----------------- */}
              <thead>
                <tr className="shadow-lg border-b-2 border-blue-300 rounded">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Posts</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </td>
                      <td>
                        {post.userName}
                        <div className="text-sm text-gray-400">
                          <span  className="hover:text-blue-800 hover:cursor-pointer pr-1">
                            <Link href='/admin/profile'>Edit</Link>
                          </span>
                          |
                          <span className="hover:text-teal-500 hover:cursor-pointer px-1">
                            View
                          </span>
                          |
                          <span className="hover:text-red-600 hover:cursor-pointer pl-1">
                            Delete
                          </span>
                        </div>
                      </td>
                      <td>
                        {post.name}
                      </td>
                      <td>
                        {post.email}
                      </td>
                      <td>
                        {post.role}
                      </td>
                      <td>{post.post}</td>
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

export default AllUsers;

AllUsers.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
