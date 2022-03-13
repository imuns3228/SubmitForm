import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    email: ""
  });

  const [contactSubmit, setSubmit] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  function handleClick(event) {
    setSubmit(contact);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contactSubmit.fName} {contactSubmit.lName}
      </h1>
      <p>{contactSubmit.email}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
