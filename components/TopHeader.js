import { BiLocationPlus } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";
import { useEffect } from "react";
import { useState } from "react";

const TopHeader = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);
  const [admin, setAdmin] = useState([]);
  const logout = e => {
    logOut()
  }

  useEffect(() => {
    fetch(
      `https://travel-xone-server-five.vercel.app/api/v1/chena?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data?.data);
        console.log(data, "isAdmin");
        setLoading(false);
      });
  }, [user?.email]);
  return (
    <>
    {console.log(admin[0], "admin")}
      <div className="hidden lg:block bg-[#026fc8] py-2 relative text-slate-500 px-20">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center text-slate-200 hover:text-white">
              <BiLocationPlus />
              <p className="ml-1 text-sm">250 Main Street, Mirpur, Dhaka </p>
            </div>
            <div className="flex items-center text-slate-200 hover:text-white">
              <AiOutlineMail className="" />
              <span className="ml-1 text-sm">
                <a
                  href="mailto:travelxone3@gmail.com
"
                >
                  travelxone3@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex gap-5 items-center text-base-300 absolute end-10 top-0 ">
            <div className="flex gap-5 ">
              {/* <Link href="">
                <p className="ml-2 text-sm text-slate-200 hover:text-white">
                  Book Now
                </p>
              </Link> */}
              <Link href="/about">
                <p className="ml-2 text-sm text-slate-200 hover:text-white">
                  About us
                </p>
              </Link>
              <Link href="/about">
                <p className="ml-2 text-sm text-slate-200 hover:text-white">
                  Admin
                </p>
              </Link>
            </div>
            <div className="flex gap-x-6 gap-y-2 items-center primary-color p-[10px] mr-10">
              <Link href="https://web.facebook.com/profile.php?id=100092635233512">
                <BsFacebook className="text-white cursor-pointer hover:text-[#000000]" />
              </Link>
              <Link href="https://www.instagram.com/travelxone3/">
                <AiOutlineInstagram className="text-white cursor-pointer hover:text-[#000000]" />
              </Link>
              <Link href="https://twitter.com/travelxone3">
                <AiFillTwitterCircle className="text-white cursor-pointer hover:text-[#000000]" />
              </Link>
              <Link href="https://www.linkedin.com/in/travelxone3/">
                <FaLinkedinIn className="text-white cursor-pointer hover:text-[#000000]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
