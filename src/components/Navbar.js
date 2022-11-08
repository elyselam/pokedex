import { Link } from "react-router-dom";
import Home from "./Home";
import Modal from "./Modal";
import CustomGallery from "./CustomGallery";

const Navbar = () => {
  return (
    <nav
      className="ui secondary pointing menu"
      style={{ textAlign: "center", padding: "10px" }}
    >
      <Link to="/">
        <Home />
      </Link>
      <Link to="/Modal">
        {/* <button className="ui primary button">Add Pokemon</button>; */}
        <Modal />
      </Link>
      <Link to="/CustomGallery">
        <CustomGallery />
      </Link>
    </nav>
  );
};

export default Navbar;
