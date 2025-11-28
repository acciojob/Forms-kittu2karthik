import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${fullNameRef.current.value}
Email: ${emailRef.current.value}
Password: ${passwordRef.current.value}`);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Form using useRef</h2>
        <input ref={fullNameRef} type="text" id="full_name" placeholder="Full Name" required />
        <input ref={emailRef} type="email" id="email" placeholder="Email" required />
        <input ref={passwordRef} type="password" id="password" placeholder="Password" required />
        <input ref={confirmRef} type="password" id="password_confirmation" placeholder="Confirm Password" required />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;