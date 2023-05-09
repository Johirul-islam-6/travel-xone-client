import { AuthContext } from "@/ContextApi";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSidebar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const{user,logOut} = useContext(AuthContext);
  console.log(user?.email);
  const logout =e =>{
    logOut()
  }

  const iconStyle = classNames(
    "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
  );
  const smallsidebarstyle = classNames(
    "ml-3 text-sm tracking-wide truncate text-base-100"
  );
  const smallsidebarbtn = classNames(
    "inline-flex justify-center items-center ml-4 text-blue-500"
  )
  return (
    <>
      {/* code */}
      <div className="fixed flex flex-col flex-auto flex-shrink-0 antialiased text-gray-800 top-0 left-0 w-[100%] lg:w-[15%] z-50">
        {/* -----------------Site Logo------------------ */}
          <div className="flex items-center  lg:px-0 px-10 h-14 bg-white border-b shadow">
          <div className="flex lg:hidden border p-1 hover:cursor-pointer" onClick={() => setIsToggle(!isToggle)}>{isToggle ? <GiHamburgerMenu/> : <GiHamburgerMenu/>}</div>
            <Link href="/" className="cursor-pointer w-[65%] md:w-[40%] lg:w-[95%] ml-5 lg:ml-0">
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
              <li className="dropdown dropdown-hover">
                <a href="/dashboard/booking" className={iconStyle}>
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
                    Bookings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/dashboard/booking/restaurant" className={iconStyle}>Restaurants</a>
                    </li>
                    <li>
                    <a href="/dashboard/booking/transport" className={iconStyle}>Transports</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
              <li>
                <a href="/dashboard/wishlist" className={iconStyle}>
                <span className={smallsidebarbtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Wishlist
                  </span>
                </a>
              </li>
              <li>
                <a href="/dashboard/reviews" className={iconStyle}>
                <span className={smallsidebarbtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>
                  </span>
                  <span className={smallsidebarstyle}>
                    Reviews
                  </span>
                </a>
              </li>
              <li>
                <a href="/dashboard/profile" className={iconStyle}>
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
          <div className="overflow-y-auto overflow-x-hidden flex-grow hidden lg:flex bg-white">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="dropdown dropdown-hover">
                <a href="/dashboard/booking" className={iconStyle}>
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
                    Bookings
                  </span>
                </a>
                {/* -----------Dropdown menu start--------- */}
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ml-4 text-sm"
                  >
                    <li>
                    <a href="/dashboard/booking/restaurant" className={iconStyle}>Restaurants</a>
                    </li>
                    <li>
                    <a href="/dashboard/booking/transport" className={iconStyle}>Transports</a>
                    </li>
                  </ul>
                  {/* -----------Dropdown menu start--------- */}
              </li>
      
              <li>
                <a href="/dashboard/wishlist" className={iconStyle}>
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Wishlist
                  </span>
                </a>
              </li>
              <li>
                <a href="/dashboard/reviews" className={iconStyle}>
                <span className="inline-flex justify-center items-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Reviews
                  </span>
                </a>
              </li>
              <li>
                <a href="/dashboard/profile" className={iconStyle}>
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

export default UserSidebar;
