import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div
      onClick={() => navigate("/Home")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Search and Add Your Favorite Pokemon</div>
        <div className="content">
          Name <input type="text" /> <br />
        </div>
        <div className="actions">
          <button className="ui primary button">Submit</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,

    document.querySelector("#modal")
  );
};
export default Modal;
