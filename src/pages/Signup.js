import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup logic
    console.log("Signup clicked!");
    navigate("/login"); // Navigate to login after signup
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="btn-login-link">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;