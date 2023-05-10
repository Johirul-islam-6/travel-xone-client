import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";



const AllPages = () => {
  const posts = [
    {
      id: "1",
      title: "Sample Page",
      author: "Abul",
      commentNumber: "-",
      publishDate: "01-03-2023",
    },
    {
      id: "2",
      title: "Transport",
      author: "Babul",
      commentNumber: "-",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      title: "Plain Transport",
      author: "Kabul",
      commentNumber: "-",
      publishDate: "20-03-2023",
    },
  ];
  return (
    <>
      <Head>
        <title>All Pages</title>
      </Head>
      <div className="h-screen block lg:flex justify-between text-black">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between"><AdminSidebar /></div>
        <div className="w-[100%] lg:w-[80%] bg-slate-300 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto">
            <table className="table w-full dark:text-[#d6d3d3]">
              {/* head */}
              <thead>
                <tr className="shadow-lg border-b-2 border-blue-300">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>
                    <RiMessage2Fill />
                  </th>
                  <th>Posting Date</th>
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
                      <td>
                        {post.title}
                        <div className="text-sm text-gray-400"><span className="hover:text-blue-800 hover:cursor-pointer">Edit</span> | <span className="hover:text-red-600 hover:cursor-pointer">Delete</span> |<span className="hover:text-blue-800 hover:cursor-pointer">View</span></div>
                      </td>
                      <td>{post.author}</td>
                      <td>{post.commentNumber}</td>
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

export default AllPages;

AllPages.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
