import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PersonalProjects from "./pages/PersonalProjects";
import CommissionedWork from "./pages/CommissionedWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/*"
        element={
          <div className="font-sans text-neutral-800 bg-[#f5f5f0] min-h-screen">
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/personal" element={<PersonalProjects />} />
              <Route path="/commissioned" element={<CommissionedWork />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
