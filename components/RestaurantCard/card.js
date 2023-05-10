import Link from 'next/link';
import { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {

  const [hotelAll, sethotelAll] = useState()
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch(`https://travel-xone-server.vercel.app/api/v1/hotels/`)
      .then(res => res.json())
      .then(data => {
        sethotelAll(data.data)
        setLoding(false)
      })
  }, [])

  if (loding) {
    return <>
      <div className="w-[100%] h-[100vh] justify-center flex items-center">
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-[#0000004d]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-blue-700"></div>
        </div>
      </div>
    </>
  }

  return (
    <>

    </>
  );
};

export default Card;
