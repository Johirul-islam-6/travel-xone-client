import "@/styles/#globals.css";
import Layout from "../../components/Layout";
import  { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    
    </>
  );
}
