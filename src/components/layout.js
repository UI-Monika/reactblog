import Footer from "./footer";
import Header from "./header";
import "../custom.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
