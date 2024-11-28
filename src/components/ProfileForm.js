import React, { useState } from "react";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    zerodhaKey: "",
    zerodhaSecret: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", profile);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={profile.name} onChange={handleChange} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" value={profile.email} readOnly placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Zerodha API Key</label>
            <input name="zerodhaKey" value={profile.zerodhaKey} onChange={handleChange} placeholder="Enter Zerodha API Key" />
          </div>
          <div className="form-group">
            <label>Zerodha API Secret</label>
            <input name="zerodhaSecret" value={profile.zerodhaSecret} onChange={handleChange} placeholder="Enter Zerodha API Secret" />
          </div>
          <button type="submit" className="btn-save">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;