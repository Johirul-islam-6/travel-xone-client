import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminSidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const iconStyle = classNames(
    "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
  );
  const smallsidebarstyle = classNames(
    "ml-3 text-sm tracking-wide truncate text-base-100 hover:text-blue-500"
  );
  const smallsidebarbtn = classNames(
    "inline-flex justify-center items-center ml-4 text-blue-500 hover:text-black"
  )
  return (
    <>
      {/* code */}
        <div className="fixed flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800 top-0 left-0 w-[100%] lg:w-[20%] z-50">
        {/* -----------------Site Logo------------------ */}
          <div className="flex items-center  lg:px-0 px-10 h-14 bg-white border-b shadow">
          <div className="flex lg:hidden border p-1 hover:cursor-pointer" onClick={() => setIsToggle(!isToggle)}>{isToggle ? <GiHamburgerMenu/> : <GiHamburgerMenu/>}</div>
            <Link href="/" className="cursor-pointer w-[65%] md:w-[40%] lg:w-[80%] ml-5 lg:ml-0">
              <Image
                src="https://i.ibb.co/Z2SgSq2/travel-xone.png"
                alt="TRAVEL.XONE LOGO"
                width={600}
                height={450}
                loading="lazy"
              />
            </Link>
          </div>
          {/* Toggle Menu */}
          {isToggle && <div className="w-[40%] md:w-[20%] overflow-y-auto overflow-x-hidden flex-grow flex lg:hidden bg-[#000000ee] border-r">
            <ul className="flex flex-col py-4 space-y-1 text-blue-800">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-blue-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <a href="/admin" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/booking" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/> </svg>
                  </span>
                  <span tabIndex={0} className={smallsidebarstyle}>
                    Bookings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/booking/restaurant" className={iconStyle}>Restaurants</a>
                    </li>
                    <li>
                    <a href="/admin/booking/transport" className={iconStyle}>Transports</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/posts" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className={smallsidebarstyle}>
                    Posts
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/posts/allPosts" className={iconStyle}>All Posts</a>
                    </li>
                    <li>
                    <a href="/admin/posts/addNew" className={iconStyle}>Add New</a>
                    </li>
                    <li>
                    <a href="/admin/posts/tourType" className={iconStyle}>Tour Type</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/Pages/allPages" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className={smallsidebarstyle}>
                    Pages
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/Pages/allPages" className={iconStyle}>All Pages</a>
                    </li>
                    <li>
                    <a href="/admin/Pages/addNew" className={iconStyle}>Add New</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li>
                <a href="/admin/reviews" className={iconStyle}>
                <span className={smallsidebarbtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Reviews
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-blue-500">
                    Tasks
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/users/allUsers" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/> </svg>
                  </span>
                  <span tabIndex={0} className={smallsidebarstyle}>
                    Users
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/users/allUsers" className={iconStyle}>All Users</a>
                    </li>
                    <li>
                    <a href="/admin/users/addNew" className={iconStyle}>Add New</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-blue-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a href="/admin/profile" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Profile
                  </span>
                </a>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/settings/general" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className={smallsidebarstyle}>
                    Settings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/settings/general" className={iconStyle}>General</a>
                    </li>
                    <li>
                    <a href="/admin/settings/reading" className={iconStyle}>Reading</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li>
                <a href="#" className={iconStyle}>
                  <span className={smallsidebarbtn}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>}
          
          {/* -----------------Menu Items--------------------- */}
          <div className="overflow-y-auto overflow-x-hidden flex-grow hidden lg:flex">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <a href="/admin" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/booking" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/> </svg>
                  </span>
                  <span tabIndex={0} className="ml-2 text-sm tracking-wide truncate">
                    Bookings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/booking/restaurant" className={iconStyle}>Restaurants</a>
                    </li>
                    <li>
                    <a href="/admin/booking/transport" className={iconStyle}>Transports</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/posts/allPosts" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className="ml-2 text-sm tracking-wide truncate">
                    Posts
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/posts/allPosts" className={iconStyle}>All Posts</a>
                    </li>
                    <li>
                    <a href="/admin/posts/addNew" className={iconStyle}>Add New</a>
                    </li>
                    <li>
                    <a href="/admin/posts/tourType" className={iconStyle}>Tour Type</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/pages/allPages" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className="ml-2 text-sm tracking-wide truncate">
                    Pages
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/pages/allPages" className={iconStyle}>All Pages</a>
                    </li>
                    <li>
                    <a href="/admin/pages/addNew" className={iconStyle}>Add New</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu end--------- */}
              </li>
              <li>
                <a href="/admin/reviews" className={iconStyle}>
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Reviews
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Tasks
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/users/allUsers" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/> </svg>
                  </span>
                  <span tabIndex={0} className="ml-2 text-sm tracking-wide truncate">
                    Users
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/users/allUsers" className={iconStyle}>All Users</a>
                    </li>
                    <li>
                    <a href="/admin/users/addNew" className={iconStyle}>Add New</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu end--------- */}
              </li>
              
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a href="/admin/profile" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </a>
              </li>
              <li className="dropdown dropdown-hover">
                <a href="/admin/settings/general" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span tabIndex={0} className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/admin/settings/general" className={iconStyle}>General</a>
                    </li>
                    <li>
                    <a href="/admin/settings/reading" className={iconStyle}>Reading</a>
                    </li>

                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li>
                <a href="#" className={iconStyle}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      {/* code */}
    </>
  );
};

export default AdminSidebar;
