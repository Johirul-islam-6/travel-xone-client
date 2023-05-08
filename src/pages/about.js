import Head from "next/head";
import styles from "../styles/About.module.css";
import { useState } from "react";
import Accordion from "../../components/Accordion";

const accordionData = [
  {
    title: "Creative",
    content: `Passionate, Innovative, Integrity, Commitment and Teamwork are the core values of Travel Xone ltd.`,
  },
  {
    title: "Dynamic",
    content: `Travel Xone Ltd wants to be recognised by it’s peers and customers as the foremost leader in the tours and travels industry.`,
  },
  {
    title: "Professional",
    content: `Travel Xone Ltd. offers a wide variety of tours and holidays and have separate divisions for corporate travel, tailor-made holidays and escorted tours.`,
  },
];

const About = () => {

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <section>
        {/* -----------header design Start----------- */}
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
          <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
            About Us
          </h1>
          <p className="pl-10 lg:pl-20 text-slate-400">
            Who we are | Our Mission | Our Vision
          </p>
        </div>
        {/* -----------header design end----------- */}

        <div class="mx-8 lg:mx-20 mt-5 lg:mt-10">
          <section class="grid gap-10 grid-cols-1 lg:grid-cols-12">
            <div class="text-start lg:text-justify col-span-6 mb-0 lg:mb-10">
              <div>
                <h5 className="text-blue-700 text-2xl pb-2">Our philosophy:</h5>
                <h1 className="text-md text-slate-500">
                  Our mission is to be the leading and most trustworthy travel
                  management company that sets the standard for professionalism,
                  reliability and transparency to its customers.
                </h1>
              </div>
              <div>
                <h5 className="text-blue-700 text-2xl py-2">Strengths:</h5>
                <li className="text-md text-slate-500">
                  We have varied experience with global networking travel
                  management companies
                </li>
                <li className="text-md text-slate-500">
                  Broad expertise in the local travel market
                </li>
                <li className="text-md text-slate-500">Client-first approach to business</li>
              </div>
              <div>
                <h5 className="text-blue-700 text-2xl py-2">
                  Turn around time experts:
                </h5>
                <h1 className="text-md text-slate-500">
                  Our excellent rapport of over two decades with the Airlines,
                  Hotels, Car Rentals, Visa Providers has given us the
                  confidence to do the best in times of crisis or emergencies
                  and won us the trust of our clients. Robust decision making
                  process owing to us being a single owner agency enables us to
                  “Focus on exceeding service expectation”.
                </h1>
              </div>
            </div>
            <div className="divider hidden lg:grid divider-horizontal col-span-1"></div>
            <div class="mt-0 mb-8 lg:mt-10 col-span-5">
              <div className="accordion">
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
