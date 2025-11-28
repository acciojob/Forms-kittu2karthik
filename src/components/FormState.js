import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.full_name}
Email: ${formData.email}
Password: ${formData.password}`);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Form using useState</h2>
        <input
          type="text"
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          id="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
