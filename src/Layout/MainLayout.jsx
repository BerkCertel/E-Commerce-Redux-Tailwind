import { PropTypes } from "prop-types";
import Footer from "../components/Layout/Footer/Footer";
import Navbar from "../components/Layout/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="w-10/12 m-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
