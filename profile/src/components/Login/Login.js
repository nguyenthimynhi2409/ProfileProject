import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { login } from "../../api/api";
import Footer from "../Layout/Footer/Footer";

const Login = ({ auth }) => {
  const navigate = useNavigate();

  const handleButton = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = await login(email, password);

    if (user) auth();
    else {
      toast("Please check your email or password");
    }

    navigate(`/view/${user.id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-7">
              <form onSubmit={handleButton} className="box">
                <h1>Login</h1>
                <p className="text-muted"> Please enter your email and password!</p> 
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Email address"
                />           
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password"
                /> 
                <a className="forgot text-muted" href="#">Forgot password?</a> 
                <input type="submit" name="" value="Login" />
                <input type="submit" name="" value="Register" onClick={() => navigate(`/register`)}/>                
              </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
