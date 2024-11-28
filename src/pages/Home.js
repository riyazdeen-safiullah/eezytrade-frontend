import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleHomeLogin = () => {
    navigate("/login");
  };
  const handleHomeProfile = () => {
    navigate("/profile");
  };
  const handleHomeConfig = () => {
    navigate("/config");
  };
  return (
    <div>
      <h1>Welcome to EezyTrade!</h1>
      <h2>Your trading automation platform.</h2>
      <button onClick={handleHomeLogin} className="btn-signup-link" type="button">
        Login
      </button>
      <button onClick={handleHomeProfile} className="btn-signup-link" type="button">
        Profile
      </button>
      <button onClick={handleHomeConfig} className="btn-signup-link" type="button">
        Config
      </button>
    </div>
  );
};

export default Home;