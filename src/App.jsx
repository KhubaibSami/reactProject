import { Route, Routes } from "react-router-dom";
import "./App.css";


import Navbar from "./components/navbar/navbar";
import Landingpage from "./pages/landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/  " element={<Landingpage />} />
        <Route path="/about" element={<div> about </div>} />
        <Route path="/contact" element={<div> contact </div>} />
        <Route path="/services" element={<div> services </div>} />
      </Routes>
      {/* <Landingpage /> */}
    </>
  );
}

export default App;
