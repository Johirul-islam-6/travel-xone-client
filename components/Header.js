import Link from "next/link";
import {
  FaAirbnb,
  FaBloggerB,
  FaDelicious,
  FaDochub,
  FaHome,
  FaPhoneSquareAlt,
  FaUserAlt,
  FaUserLock,
} from "react-icons/fa";
import { BiMenu, IconName } from "react-icons/bi";
import TopHeader from "./TopHeader";
import navbar from "../src/styles/home_style/hero.module.css";
import { useContext } from "react";
import { AuthContext } from "@/ContextApi";

const Header = () => {
  const{user,logOut} = useContext(AuthContext);
  const name = user?.email?.split("@");
  console.log(user)
 
  return (
    <>
      <TopHeader />
      <header className="w-[100%] justify-center bg-[#ffffffe5] flex mx-auto absolute ">
        <div className="navbar w-[100%]">
          {/* <!-- -------- toggle left small size slider ------ --> */}
          <div className="dropdown dropdown-start lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <BiMenu className="w-8 h-8 text-[#000000] bg-base-300 p-2" />
              </div>
            </label>

            <ul
              tabIndex="1"
              className="menu menu-compact dropdown-content mt-3 bg-[#020202e7] rounded-box w-[70vw] md:w-[50vw] h-[90vh]"
            >
              travel
              {/* Dropdown menu */}
              <div className="h-[100vh] p-0 space-y-2  md:w-60 lg:hidden block py-4">
                <div className="flex justify-between w-[60%]  ">
                  <Link href="/" className="cursor-pointer bg-base-100 rounded">
                    <img src="https://i.ibb.co/Z2SgSq2/travel-xone.png" />
                  </Link>
                </div>
                <div className="divide-gray-700 pt-6 relative z-50">
                  <ul>
                    <li className="hover:bg-[#0458c6]">
                      <Link
                        rel="noopener noreferrer"
                        href="/"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaHome />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/restaurants"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaAirbnb />
                        <span>Restaurants</span>
                      </a>
                    </li>
                    <li className="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/destination"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDelicious />
                        <span>Destination</span>
                      </a>
                    </li>
                    <li className="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/transport"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaDochub />
                        <span>Transport</span>
                      </a>
                    </li>
                    <li className="hover:bg-[#0458c6] mt-1">
                      <a
                        rel="noopener noreferrer"
                        href="/blogs"
                        className={`${navbar.link_style_sm} flex items-center p-2 space-x-3 rounded-md`}
                      >
                        <FaBloggerB />
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li className="hover:bg-[#0458c6] mt-1">
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
              <img src="https://i.ibb.co/Z2SgSq2/travel-xone.png" />
            </Link>
          </div>

          <div className="flex-1 flex justify-end w-full  relative lg:hidden navbar-end">
            <button className="h-[33px] text-[13px] px-4 text-[#dfdfdf] bg-[#0272f2] rounded-md hover:bg-[#2d89f1da]">
              <Link href="/register">Register</Link>
            </button>

            <div className="search_btn bg-slate-100 w-10 h-8 rounded-md ml-2">
              <FaUserAlt className="w-full h-full rounded text-blue-700 bg-base-100 p-2" />
            </div>
          </div>
          {/* -----------only small size navbar end----------- */}

          {/* ======== only larze size show ============ */}
          <ul className="align-middle hidden lg:flex justify-center w-full">
            <div className="navbar ">
              <Link href="/" className="cursor-pointer ">
                <img
                  src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                  alt="TRAVEL.XONE LOGO"
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
                  <Link href="/restaurants" className={`${navbar.link_style}`}>
                    Restaurants
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
                 {
                  name?<p>{name[0]}</p> :  <Link href="/register" className={`${navbar.link_style}`}>
                  Login | Register
                </Link>
                 }
                </li>
              </ul>
            </div>
            <div className="navbar-end flex items-center">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                    <FaUserAlt className="w-8 h-8 text-blue-700 bg-base-300 p-2" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/userdashboard" className="justify-between">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <a><button onClick={()=>logOut()}>LogOut</button></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end flex justify-center items-center"></div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
