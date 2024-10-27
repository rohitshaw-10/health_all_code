import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import Dashboard from "./components/Dashboard.js";
import PatientRecords from "./components/PatientRecords.js";
import Chatbot from "./components/Chatbot.js";
import Login from "./Login.js"; // Create this component
import SignUp from "./SignUp.js";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/records" element={<PatientRecords />} />
      </Routes>
      <Chatbot />
      
    </div>
  );
}

export default App;
