import Slider from "../../../components/Destinations/Slider";
import DestinationProduct from "../../../components/Destinations/DestinationProduct";
import Head from "next/head";


const Destinations = ({ singelLocation }) => {

  // const [singelLocation, setLocation] = useState()
  const id = '643c2b61f7c5a823c7ca6272'

  // useEffect(() => {
  //   fetch(`https://travel-xone-server.vercel.app/api/v1/location/${id}`)
  //     .then(res => res.json())
  //     .then(data => setLocation(data))

  // }, [])



  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>
      <Slider value={singelLocation} />
      <DestinationProduct value={singelLocation} />
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
