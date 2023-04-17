import logo from "./logo.svg";
import Sidebar from "./Components/Header/Components/Sidebar";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Analytic from "./Pages/Analytic";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Analytic" element={<Analytic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
