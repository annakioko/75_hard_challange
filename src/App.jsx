import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Personal from "./pages/Personal";
import Books from "./pages/Books";
import Diet from "./pages/Diet";
import Photo from "./pages/Photo";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-info" element={<Personal />} />
        <Route path="/books" element={<Books />} />
        <Route path="/meals" element={<Diet />} />
        <Route path="/photo-progress" element={<Photo />} />
      </Routes>
    </Router>
  );
}

export default App;
