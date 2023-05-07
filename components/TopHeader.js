import { BiLocationPlus } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="hidden lg:block bg-[#026fc8] py-2 relative text-slate-500 px-20">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center text-slate-200 hover:text-white">
              <BiLocationPlus />
              <p className="ml-1 text-sm">250 Main Street, Mirpur, Dhaka </p>
            </div>
            <div className="flex items-center  text-slate-200 hover:text-white">
              <AiOutlineMail className="mt-1" />
              <p className="ml-1 text-sm">contact@example.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center text-base-300 absolute end-10 top-0 ">
            <div className="flex gap-5 ">
              <Link href="">
                <p className="ml-2 text-sm text-slate-200 hover:text-white">
                  Book Now
                </p>
              </Link>
              <Link href="/about">
                <p className="ml-2 text-sm text-slate-200 hover:text-white">
                  About us
                </p>
              </Link>
            </div>
            <div className="flex gap-x-6 gap-y-2 items-center primary-color p-[10px] mr-10">
              <Link href='https://web.facebook.com/profile.php?id=100092635233512'><BsFacebook className="text-white cursor-pointer hover:text-[#000000]" /></Link>
              <Link href='https://www.instagram.com/travelxone3/'><AiOutlineInstagram className="text-white cursor-pointer hover:text-[#000000]" /></Link>
              <Link href='https://twitter.com/travelxone3'><AiFillTwitterCircle className="text-white cursor-pointer hover:text-[#000000]" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
