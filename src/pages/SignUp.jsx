import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Typing:", e.target.name, "=", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if (formData.password !== formData.confirmPassword) {
      console.error("Password and Confirm Password do not match!");
    } else if (formData.password.length < 8) {
      console.error("Password must be at least 8 characters!");
    } else {
      console.log("All validations passed!");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side Image */}
      <div className="signup-image">
        <img src="/assets/signup-image.png" alt="signup visual" />
      </div>

      {/* Right Side Form */}
      <div className="signup-form">
        <div className="text-block">
          <h1>Create Account</h1>
          <p className="subtitle">
            Welcome! Enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <img src="/assets/icons/user.svg" alt="user" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src="/assets/icons/email.svg" alt="email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src="/assets/icons/lock.svg" alt="password" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src="/assets/icons/lock.svg" alt="confirm password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
