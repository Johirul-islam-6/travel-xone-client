import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";

const AllPosts = () => {
  const posts = [
    {
      id: "1",
      image: "https://i.ibb.co/QmfMRWw/New-Project-44.png",
      title: "Archaeological Rest House",
      author: "Abul",
      tourType: "Rest House",
      commentNumber: "6",
      publishDate: "01-03-2023",
    },
    {
      id: "2",
      image: "https://i.ibb.co/2Nftgtg/New-Project-49.png",
      title: "Red Chillies Restaurant a",
      author: "Babul",
      tourType: "Restaurant",
      commentNumber: "3",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      image: "https://i.ibb.co/Nm4GrGK/New-Project-48.png",
      title: "Hotel Eden Park",
      author: "Kabul",
      tourType: "Restaurant",
      commentNumber: "1",
      publishDate: "20-03-2023",
    },
  ];
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-blue-700">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Tour Type</th>
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
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={post.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {post.title}
                        <div className="text-sm text-gray-400"><span className="hover:text-blue-800 hover:cursor-pointer">Edit</span> | <span className="hover:text-blue-800 hover:cursor-pointer">Delete</span> |<span className="hover:text-blue-800 hover:cursor-pointer">View</span></div>
                      </td>
                      <td>{post.author}</td>
                      <td>{post.tourType}</td>
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

export default AllPosts;

AllPosts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
