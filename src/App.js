import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Courts from "./routes/courts/Courts";
import Contacts from "./routes/contacts/Contacts";
import Gallery from "./routes/gallery/Gallery";

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courts" element={<Courts/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </Router>
  )
}

export default App
