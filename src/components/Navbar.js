import { Link } from "react-router-dom";
import Home from "./Home";
import Modal from "./Modal";
import CustomGallery from "./CustomGallery";

const Navbar = () => {
  return (
    <nav
      className="ui secondary pointing menu"
      //   style={{ textAlign: "center", padding: "10px" }}
    >
      <Link className="active item" to="/Home"></Link>
      <Link className="item" to="/Modal"></Link>
      <Link className="item" to="/CustomGallery"></Link>
    </nav>
  );
};

export default Navbar;
