import Link from "next/link";
import styles from "../src/styles/#footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        {/* -----------1st Layer----------- */}
        <div className="lg:flex justify-between  bg-slate-900 text-white w-full px-10 lg:px-20 py-5 items-center">
          <div>
            <p className="text-left">Payment Methods</p>
            <div className="flex w-[100%] gap-2">
            <Image
                src="https://i.ibb.co/ZNdCyFB/Rectangle-66.png"
                alt="TRAVEL.XONE LOGO"
                width={70}
                height={30}
                loading="lazy"
              />
            <Image
                src="https://i.ibb.co/s5V1kc4/Rectangle-67.png"
                alt="TRAVEL.XONE LOGO"
                width={70}
                height={30}
                loading="lazy"
              />
            <Image
                src="https://i.ibb.co/1bd2yx2/Rectangle-65.png"
                alt="TRAVEL.XONE LOGO"
                width={70}
                height={30}
                loading="lazy"
              />
            <Image
                src="https://i.ibb.co/3r7KmxF/Rectangle-68.png"
                alt="TRAVEL.XONE LOGO"
                width={70}
                height={30}
                loading="lazy"
              />
            </div>
          </div>
          <div className="pt-5 md:pt-5 lg:pt-0">
            <p className="text-left font-light">
              Subscribe to get our latest update
            </p>
            <div className="flex justify-start lg:justify-end pt-1">
              <input
                type="text"
                id="subscribe"
                name="subscribe"
                placeholder="Enter your email address"
                className="px-2 py-2 text-slate-500 text-sm border"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-[#3264FF] text-sm p-2 border"
              ></input>
            </div>
          </div>
        </div>

        {/* -----------2nd Layer----------- */}
        <div className="lg:flex justify-between px-10 lg:px-20 py-10 bg-black text-slate-500 text-left">
          <div className="text-left lg:text-center w-full md:w-[45%] lg:w-[20%]">
            <Link href="/" className="cursor-pointer ">
            <Image
                src="https://i.ibb.co/nMFwjww/foorer-logo.png"
                alt="TRAVEL.XONE LOGO"
                width={600}
                height={450}
                loading="lazy"
                className="w-[100%] mx-auto"
              />
            </Link>
            <p>
              TRAVEL.XONE.COM
              <br />
              We provide reliable tourist services in Bangladesh
            </p>
          </div>
          <div className="text-start justify-start pt-5 lg:pt-0">
            <p className="footer-title">CONTACTS</p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                250 Main Street, Mirpur, Dhaka
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Phone: +880123456789
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                travelxone@gmail.com
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Corporate contact
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Sustainability
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">SUPPORT</p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Help Center
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Our COVID-19 Response
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Cancellation options
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Safety information
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Places of interest
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">MY ACCOUNT</p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Login
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Order History
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                My Wish list
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Track Order
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Be an affiliate partner
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">QUICK LINKS</p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Support Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Return Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Privacy Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Term Conditions Page
              </Link>
            </p>
          </div>
        </div>

        {/* -----------3rd Layer----------- */}
        <div
          className={`${styles.top_border} bg-black py-3 px-10 lg:px-20 block md:flex lg:flex items-center justify-between`}
        >
          <p className="text-xs text-slate-400">
            © 2023 Copyrights by travel.xone. All Rights Reserved
          </p>
          <div className="flex gap-2 items-center text-md lg:text-2xl  pt-2 lg:pt-0">
            <BsFacebook className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            <AiOutlineInstagram className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            <FaPinterest className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            <AiFillTwitterCircle className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
