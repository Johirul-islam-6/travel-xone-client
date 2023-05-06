import Private from '@/private/private.route';
import React, {useState} from 'react';
import SingleChat from "../../components/Chats/SingleChat";
import SingleText from "../../components/Chats/SingleText";


function chat(props) {

  const chats = [
    {
      _id: "01",
      customer: {
        _id: "",
        name: "David Deadly",
        img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
      },
      lastmessage: {
        sender: "",
        text: "Price ?",
        time: "3h",
      }
    }
  ];


  const messages = [
    {
      _id: "01",
      chatId: "01",
      sender: {
        _id: "",
        name: "",
      },
      text: "Price ?"
    }
  ];


  const userImg = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg";



  return (
    // <Private>
    <div data-theme="light" className="relative top-32 bottom-32 w-full lg:w-3/4 mx-auto h-[100vh - 10vh]  grid grid-cols-6 gap-2">

      {/* LeftBox  */}
      <div className="bg-gradient-to-t from-blue-100  to-blue-100 rounded-lg col-span-2 ">
        {/* Header  */}
        <div>
          <h1 className="text-blue-600 text-Left text-3xl font-bold m-5">Customers</h1>
        </div>

        {/* Search Input  */}
        <div className="px-5">
          <input type="text" placeholder="Search..." className="input w-full rounded-full flex-shrink-0 focus:outline-none focus:border-indigo-500" />
        </div>

        {/* All Chats  */}
        <div className="p-5">
          {/* Single Chat  */}
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
          <SingleChat></SingleChat>
        </div>
      </div>


      {/* Right Box  */}
      <div className="bg-gradient-to-b from-blue-50  to-blue-50 rounded-lg col-span-4 overflow-hidden flex flex-col justify-between">
        <div>
          {/* Header  */}
          <div className="bg-blue-100 px-2 shadow-md ">
            {/* Customer Info  */}
            <div className="flex gap-4 rounded-2xl px-2 py-2 cursor-pointer">
              <div className="">
                <img className="w-14 h-14 rounded-2xl" src={userImg} alt="" />
              </div>
              <dir className="flex-grow flex flex-col justify-between">
                <h3 className="font-semibold text-xl">David</h3>
                <p className="">Active Now</p>
              </dir>
            </div>
          </div>

          {/* Chat History  */}
          <div className="px-5">
            {/* single text  */}
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
            <SingleText></SingleText>
          </div>
        </div>

        {/* Enter Text Input  */}
        <div className="flex justify-between p-5 gap-1">
          <div className="flex-grow">
            <input type="text" placeholder="Search..." className="input w-full rounded-full flex-shrink-0 focus:outline-none focus:border-indigo-500" />
          </div>

          <button className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="feather feather-send">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>

        </div>
      </div>

    </div>
    // </Private>
  );
}

export default chat;