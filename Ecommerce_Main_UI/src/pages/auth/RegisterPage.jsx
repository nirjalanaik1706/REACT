import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  // Form state (data we want to remember)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Placeholder register logic
    alert("Registration successful!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="register-page container" style={{ maxWidth: "400px", marginTop: "2rem" }}>
      <h1>Register</h1>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
