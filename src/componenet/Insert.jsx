import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Insert() {
  const [forms, setForms] = useState({ name: "", email: "" });
  const inserData = () => {
    axios.post("http://localhost:3000/data", forms);
    nav("/");
  };
  const nav = useNavigate();
  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setForms({
              ...forms,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {
            setForms({
              ...forms,
              email: e.target.value,
            });
          }}
        />
        <button onClick={inserData}>Insert</button>
      </div>
    </>
  );
}

export default Insert;
