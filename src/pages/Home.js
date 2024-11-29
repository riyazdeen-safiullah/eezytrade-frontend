// pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="main-content">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Home;