import "@/styles/#globals.css";
import Layout from "../../components/Layout";
import  { Toaster } from 'react-hot-toast';
import ContextApi from "@/ContextApi";


export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<ContextApi><Component {...pageProps} /></ContextApi>)
  }
  return (
    <>
    <ContextApi>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
      </ContextApi>
    </>
  );
}
