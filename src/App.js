import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate ,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileForm from "./components/ProfileForm";
import ConfigForm from "./components/ConfigForm";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const isAuthenticated = localStorage.getItem("authToken"); // Mock authentication check

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/config" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/config" element={<ConfigForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )} */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/config" element={<ConfigForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;