import Header from "./Header";
import Footer from "./Footer";
import ContextApi from "@/ContextApi";
const Layout = ({ children }) => {
  return (
    <>
     <ContextApi>
     <Header />
      {children}
      <Footer />
     </ContextApi>
    </>
  );
};

export default Layout;
