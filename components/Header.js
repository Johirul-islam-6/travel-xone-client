import Link from "next/link";
import {
  FaBloggerB,
  FaDelicious,
  FaDochub,
  FaHome,
  FaPhoneSquareAlt,
  FaUserAlt,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import TopHeader from "./TopHeader";
import navbar from "../src/styles/home_style/hero.module.css";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";


const Header = () => {
  const{user,logOut} = useContext(AuthContext);
  console.log(user?.email);
  const logout =e =>{
    logOut()
  }
  const buttonStyle = classNames(
    "border border-blue-500 p-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-200 ease-linear hover:shadow-lg hover:cursor-pointer"
  );
 
  return (
    <>
      <TopHeader />
      <header className="w-[100%] justify-center bg-[#ffffffe5] flex mx-auto absolute h-[110px]">
        <div className="navbar w-[100%]">
          {/* <!-- -------- toggle left small size slider ------ --> */}
          <div className="dropdown dropdown-start lg:hidden z-50">
            <label tabIndex={0}>
              <div className={buttonStyle}>
                <BiMenu />
              </div>
            </label>
            <ul
              tabIndex="1"
              className="menu menu-compact dropdown-content mt-3 bg-[#020202e7] rounded-box w-[70vw] md:w-[50vw] h-[90vh] pl-5"
            >
              {/* Dropdown menu */}
              <div className="h-[100vh] p-0 space-y-2  md:w-60 lg:hidden block py-4">
                <div className="flex justify-between w-[60%]  ">
                  <Link href="/" className="cursor-pointer bg-base-100 rounded">
                    <Image
                      src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                      alt="TRAVEL.XONE LOGO"
                      width={600}
                      height={450}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="divide-gray-700 pt-6 relative z-50">
                  <ul>
                    <li className="w-32 hover:bg-blue-500">
                      <Link
                        rel="noopener noreferrer"
                        href="/"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaHome />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="w-32 hover:bg-blue-500 mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/destination"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDelicious />
                        <span>Destination</span>
                      </a>
                    </li>
                    <li className="w-32 hover:bg-blue-500 mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/transport"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDochub />
                        <span>Transport</span>
                      </a>
                    </li>
                    <li className="w-32 hover:bg-blue-500 mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/blogs"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaBloggerB />
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li className="w-32 hover:bg-blue-500 mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/contact"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaPhoneSquareAlt />
                        <span>Contact Us </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          {/* <!-- -----only small size navbar----- --> */}
          <div className="flex-1 flex justify-start relative lg:hidden navbar-center pl-2">
            <Link href="/" className="cursor-pointer md:w-[60%]">
              <Image
                src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                alt="TRAVEL.XONE LOGO"
                width={600}
                height={450}
                loading="lazy"
              />
            </Link>
          </div>
          {/* -------------Navbar end button----------------- */}
          <div className="flex-1 flex gap-2 justify-end w-full  relative lg:hidden navbar-end">
           
            <button className="h-[33px] text-[13px] px-4 text-[#dfdfdf] bg-[#0272f2] rounded-md hover:bg-[#2d89f1da]">
              <Link href="/register">Register</Link>
            </button>
          

            <div className={buttonStyle}>
              <Link href="/dashboard">
                <FaUserAlt />
              </Link>
            </div>
          </div>
          {/* -----------only small size navbar end----------- */}

          {/* ======== only larze size show ============ */}
          <ul className="align-middle hidden lg:flex justify-center w-full px-20">
            <div className="navbar">
              <Link href="/" className="cursor-pointer ">
                <Image
                  src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                  alt="TRAVEL.XONE LOGO"
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-[70%]"
                />
              </Link>
            </div>
            <div className="navbar-cente flex justify-center text-slate-600 ">
              <ul className="menu menu-horizontal px-1">
                <li className="hover:text-white hover:border rounded">
                  <Link href="/" className={`${navbar.link_style}`}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-white hover:border rounded">
                  <Link href="/destination" className={`${navbar.link_style}`}>
                    Destination
                  </Link>
                </li>
                <li className="hover:text-white hover:border rounded">
                  <Link href="/transport" className={`${navbar.link_style}`}>
                    Transport
                  </Link>
                </li>
                <li className="hover:text-white hover:border rounded">
                  <Link href="/blogs" className={`${navbar.link_style}`}>
                    Blogs
                  </Link>
                </li>
                <li className="hover:text-white hover:border rounded">
                  <Link href="/contact" className={`${navbar.link_style}`}>
                    Contact Us
                  </Link>
                </li>
                <li
                  tabIndex={0}
                  className="hover:text-white hover:border rounded"
                >
                    {/* ---------Logout Button----------- */}
                   {
                    user? <button onClick={logout}>Logout</button>: <Link href="/register" className={`${navbar.link_style}`}>
                    Login | Register
                  </Link>
                   }
                </li>
                
              </ul>
            </div>
            {/* -------------Navbar end button----------------- */}
            {
              user? <><div className="flex items-center gap-2">
              <div className={buttonStyle}>
                <Link href="/wishlist">
                  <AiOutlineHeart />
                </Link>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <div className={buttonStyle}>
                    < >
                      <FaUserAlt />
                    </>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/dashboard" className="justify-between">
                      dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div></> : ""
            }
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
