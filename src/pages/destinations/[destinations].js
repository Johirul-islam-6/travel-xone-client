import Slider from "../../../components/Destinations/Slider";
import DestinationProduct from "../../../components/Destinations/DestinationProduct";
import Head from "next/head";
import Card from "../../../components/RestaurantCard/card";
import { useEffect, useState } from "react";
import axios from "../../../hooks/hook.axios"
import { useRouter } from "next/router";

const Destinations = ({location}) => {

  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>
      <div className="bg-gray-100 pt-4">
      <Slider value={location} />
      <DestinationProduct value={location} />
      </div>
    </>
  );
};

export default Destinations;

export const getServerSideProps = async (context) => {
 const res = await axios.get(`/api/v1/locations?_id=${context.query.destinations}`)
  return {
      props: {
          location: res.data.data[0]
      }
  }
}



