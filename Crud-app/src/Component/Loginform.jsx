import React from 'react';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const [data, Setdata] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate()
  const handleChange = (e) => {

    Setdata({ ...data, [e.target.name]: e.target.value })
  }
  const Submitbutton = () => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username: data.username, password: data.password })
    }
    fetch("https://reqres.in/api/admin", requestOptions)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        Setdata(result)
        if (result.username == "test@test.com" && result.password == "Password1") {
          navigate("/alluser")
      }
      })

  }
  return (
    <>
      <section>
        <h1>Login</h1>
        <div className="login-form">
          <h4>Username</h4>
          <div className="username-input">
            <i className="fas fa-user"></i>
            <input type="text" name="username" value={data.username} onChange={handleChange} required="" />
          </div>
          <h4>Password</h4>
          <div className="password-input">
            <i className="fas fa-lock"></i>
            <input type="text" placeholder="Type your password" name="password" value={data.password} onChange={handleChange} />
          </div>
          <p>Forgot password?</p>
        </div>
        <button className="login-btn" onClick={Submitbutton}>
          LOGIN
        </button>
        <div className="alternative-signup">
          <p>Not a member? <span>Sign-up</span></p>
        </div>
      </section>
    </>
  );
};

export default Loginform;