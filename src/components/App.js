import Navbar from "./Navbar";
import Home from "./Home";
import Modal from "./Modal";
import CustomGallery from "./CustomGallery";
import { Routes, Route, Switch } from "react-router-dom";

function App() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Add" element={<Modal />} />
          <Route path="/CustomGallery" element={<CustomGallery />} />
        </Routes>
      </>
    );
}

export default App;
