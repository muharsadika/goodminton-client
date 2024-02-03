import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full fixed top-0 left-0 right-0 z-10" >
          <Navbar />
        </div>

        <div className="w-full min-h-screen p-10 mt-[88px]">
          {children}
        </div>

        <div className="w-full" >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout