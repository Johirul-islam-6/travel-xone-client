import Head from "next/head";
import Adventures from "../../components/Adventure/Adventures";
import Hero from "../../components/Home/Hero";
import Opportunity from "../../components/Home/Opportunity";
import Testimonial from "../../components/Testimonial/Testimonial";
import Location from "../../components/Home/Location";
import 'aos/dist/aos.css';




const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Be update on travel services from us"
        />
        <meta
          name="travel.xone"
          content="Tour Website, booking-management-system, tour-service, Tour Services, booking website"
        />
      </Head>
      <Hero />
      <Location />
      <Opportunity />
      <Adventures />
      <Testimonial />
    </>
  );
};
export default Home;
