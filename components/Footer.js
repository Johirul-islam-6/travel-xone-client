import Link from "next/link";
import styles from "../src/styles/#footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import NewsletterSubscribe from "./mailchimp/NewsletterSubscribe";



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
            
            </div>
          </div>
          {/* ----------Mailchimp Newsletter form---------- */}
          <div className="pt-5 md:pt-5 lg:pt-0">
          <NewsletterSubscribe/>
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
                href="/destination"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                250 Main Street, Mirpur, Dhaka
              </Link>
            </p>
            <p>
              <Link
                href="tel:+880123456789"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Phone: +880123456789
              </Link>
            </p>
            <p>
              <a
                href="mailto:travelxone3@gmail.com"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                travelxone3@gmail.com
              </a>
            </p>
            <p>
              <Link
                href="/contact"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Contact
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">EXPLORE</p>
            <p>
              <a
                href="/footerMenu/help"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Help Center
              </a>
            </p>
            <p>
              <Link
                href="/footerMenu/covid"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Our COVID-19 Response
              </Link>
            </p>
            <p>
              <Link
                href="/blogs"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Blogs
              </Link>
            </p>
            <p>
              <Link
                href="/destination"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Places of interest
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">PLAN YOUR TRIP</p>
            <p>
              <Link
                href="/login"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Login
              </Link>
            </p>
            <p>
              <Link
                href="/transport"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Transport Booking
              </Link>
            </p>
            <p>
              <Link
                href="/register"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Create new Account
              </Link>
            </p>
          </div>
          <div className="pt-5 lg:pt-0">
            <p className="footer-title">QUICK LINKS</p>
            <p>
              <Link
                href="/footerMenu/support"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Support Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="/footerMenu/returnPolicy"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Return Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="/about"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                href="/footerMenu/privacy_Policy"
                className="hover:underline hover:text-indigo-200 text-sm font-light"
              >
                Privacy Policy Page
              </Link>
            </p>
            <p>
              <Link
                href="/footerMenu/terms"
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
          <div className="flex gap-3 items-center text-md lg:text-3xl  pt-2 lg:pt-0">
            <Link href="https://web.facebook.com/profile.php?id=100092635233512">
              <BsFacebook className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            </Link>
            <Link href="https://www.instagram.com/travelxone3/">
              <AiOutlineInstagram className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            </Link>
            <Link href="https://twitter.com/travelxone3">
              <AiFillTwitterCircle className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            </Link>
            <Link href="https://www.linkedin.com/in/travelxone3/">
              <FaLinkedinIn className="text-slate-400 cursor-pointer hover:text-[#026fc8]" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
