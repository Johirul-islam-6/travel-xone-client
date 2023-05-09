import React from "react";
import styles from "../../src/styles/contact.module.css";
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { FaLinkedinIn, FaPhoneVolume } from "react-icons/fa";
import classNames from "classnames";
import Head from "next/head";

const Contact = () => {
  const inputStyle = classNames(
    "border-b-2 bg-white text-slate-600 text-lg font-medium border-gray-300 focus:outline-none focus:border-blue-500 focus:border-spacing-2 px-2 py-1 text-start focus:border-b-1"
  );

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(firstName, lastName, phone, email, message);
  };
  return (
    <section className="">
      <Head>
        <title>Contact Page</title>
      </Head>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          Contact Us
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          Any Question or Remarks? Just write a message !
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div className="bg-[#e5ebfa]">
        <div className="py-20 px-8 md:px-32 lg:px32">
          {/* --------------Body part design start----------- */}
          <div className="grid grid-cols-1 lg:grid-cols-5 max-w-screen-xl m-auto bg-white shadow-2xl rounded-xl ">
            <div
              className={` ${styles.contact_card}  mb-5 md:mb-0 md:col-span-2 py-10 px-10 xl:px-16 `}
            >
              <h2 className="text-white text-4xl font-semibold text-justify">
                Get In Touch
              </h2>
              <p className="text-lg font-medium w-full md:w-4/5 text-slate-300 text-justify mt-5 font-[math]">
                Fill up the form and our Team will get back to your message or
                phone call
              </p>
              <div className="flex items-center mt-16 mb-10">
                <FaPhoneVolume className="text-[#7f97f7] hover:text-white font-bold text-3xl mr-4" />
                <a
                  href="tel:+8801757146195"
                  className="text-slate-300 font-medium text-lg font-[monospace]"
                >
                  +880123456789
                </a>
              </div>
              <div className="flex items-center mb-10">
                <MdOutlineEmail className="text-[#7f97f7] hover:text-white font-bold text-3xl mr-4" />
                <a
                  href="mailto:info@jintupaul45@gmail.com"
                  className="text-slate-300 font-medium text-lg font-[monospace]"
                >
                  travelxone@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-40">
                <ImLocation2 className="text-[#7f97f7] hover:text-white font-bold text-3xl mr-4" />
                <h2 className="text-slate-300 font-medium text-start text-lg">
                  250 Main Street, Mirpur, Dhaka
                </h2>
              </div>
              <div className="flex mb-6">
                <span
                  className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 text-white`}
                >
                  <BsFacebook />
                </span>
                <span
                  className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 text-white`}
                >
                  <BsTwitter />
                </span>
                <span
                  className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 text-white`}
                >
                  <GrInstagram />
                </span>
                <a
                  className={`${styles.social_icon}  text-2xl md:text-3xl font-bold mr-3 xl:mr-6 `}
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <span className={styles.play_animation}></span>
              <span className={styles.white_bg}></span>
              <span className={styles.orange_bg}></span>
            </div>
            {/* ----------Form Part Start------------ */}
            <form
              action="https://getform.io/f/c60a10e3-f44e-446d-9137-a95839361108"
              method="POST"
              onSubmit={submitForm}
              className=" md:col-span-3 py-10 px-8 xl:px-12"
            >
              <div className="rounded p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="form-control">
                    <label className="label">
                      <h1 className="text-lg text-gray-500">First Name</h1>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className={`${inputStyle}`}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <h1 className="text-lg text-gray-500">Last Name</h1>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className={`${inputStyle}`}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="form-control">
                    <label className="label">
                      <h1 className="text-lg text-gray-500">E-mail</h1>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`${inputStyle}`}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <h1 className="text-lg text-gray-500">Phone</h1>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className={`${inputStyle}`}
                    />
                  </div>
                </div>
                <h1 className="text-gray-500 text-lg font-semibold text-start mt-6">
                  What do you want to know About ?{" "}
                </h1>
                <div className="block md:flex lg:flex items-center text-start mt-5 mb-5">
                  <div className="form-control mr-4">
                    <label className="label cursor-pointer justify-start">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <h5 className="label-text font-normal text-slate-900 text-lg ml-3">
                        Travel Places
                      </h5>
                    </label>
                  </div>
                  <div className="form-control mr-4">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <h5 className="label-text text-slate-900 font-normal text-lg ml-3">
                        Hotel Booking
                      </h5>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <h5 className="label-text text-slate-900 font-normal text-lg ml-3">
                        Other
                      </h5>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="w-full border bg-white text-slate-600 font-normal border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2 text-start"
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="">
                  <input
                    className="mt-5 btn w-full md:w-[30%] lg:w-[30%] bg-blue-500 border-none"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
            {/* ----------Form Part End------------ */}
          </div>
          {/* ---------------Body part design end----------- */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
