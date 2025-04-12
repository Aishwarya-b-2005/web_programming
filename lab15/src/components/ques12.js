import React, { useState } from "react";

function StateForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Submitted Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div>
      <h2>Form using useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default StateForm;


/*
part 2
import React, { useRef, useState } from "react";

function RefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <h2>Form using useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={nameRef} />
        <br />
        <input type="email" placeholder="Enter Email" ref={emailRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default RefForm;
 */