import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { login } from "../../api/api";

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
    <Container className="login-container">
      <Form onSubmit={handleButton}>
        <Form.Label id="login-label">Login</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <div className="button-container">
          <Button variant="primary" type="submit" className="login">
            Login
          </Button>
          <Button className="register" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
