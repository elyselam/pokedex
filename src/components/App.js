import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Modal from "./Modal";
import Navbar from "./Navbar";
import CustomGallery from "./CustomGallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Add" element={<Modal />} />
        <Route path="/CustomGallery" element={<CustomGallery />} />
      </Routes>
    </>
  );
}

export default App;
