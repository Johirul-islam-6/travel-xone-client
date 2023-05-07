import "@/styles/#globals.css";
import Layout from "../../components/Layout";
import  { Toaster } from 'react-hot-toast';
import Context from "@/context/RootContext";



export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </Context>
    </>
  );
}
