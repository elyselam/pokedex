import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";

import Home from "./components/Home";
import Modal from "./components/Modal";
import CustomGallery from "./components/CustomGallery";

const App = () => {
  return (
    <div className="ui secondary pointing menu" style={{ "text-align": "center", padding: "10px" }}>
      <Link to="/Home">
        <Home />
      </Link>
      <Link to="/Add">
        <Modal />
      </Link>
      <Link to="/CustomGallery">
        <CustomGallery />
      </Link>
    </div>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
