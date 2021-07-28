import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
