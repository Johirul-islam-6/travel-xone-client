
import Adventures from "../../../components/Adventure/Adventures";
import Slider from "../../../components/Destinations/Slider";
import DestinationProduct from "../../../components/Destinations/DestinationProduct";
import Head from "next/head";
import Card from "../../../components/RestaurantCard/card";


const Destinations = ({ singelLocation }) => {

  // const [singelLocation, setLocation] = useState()
  const id = '643c2b61f7c5a823c7ca6272'




  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>
      <div className="bg-gray-100 pt-4">
      <Slider value={singelLocation} />
      <DestinationProduct value={singelLocation} />
      </div>
    </>
  );
};

export default Destinations;

export const getStaticProps = async (context) => {
  const id = context.params.destinations;
  const res = await fetch(`https://travel-xone-server.vercel.app/api/v1/location/${id}`);
  const data = await res.json();

  return {
    props: {
      singelLocation: data,
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch("https://travel-xone-server.vercel.app/api/v1/locations/");
  const data = await res.json();
  const paths = data?.data?.map((currentLocation) => {
    return {
      params: {
        destinations: currentLocation?._id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
