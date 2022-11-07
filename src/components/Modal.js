import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const search = (term) => {
    //look into hash of pokemons from Home component
    console.log(term);
  };

  return (
    <div
      onClick={() => navigate("/Home")}
      //className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Search and Add Your Favorite Pokemon</div>
        <div className="content">
          Name
          <input
            type="text"
            placeholder="search"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search(term);
              }
            }}
          />
          <br />
        </div>
        <div className="actions">
          <button className="ui primary button">Submit</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>

    // ,document.querySelector("#modal")
    //   );
  );
};
export default Modal;
