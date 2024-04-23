import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpperNavbar from "../components/UpperNavbar";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noPadding: PropTypes.bool
};

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <>
        <UpperNavbar />
      </>

      <>
        <Navbar />
      </>

      <div className='w-screen min-h-screen'>
        {children}
      </div>

      <>
        <Footer />
      </>
    </div >
  );
}

export default Layout