import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
import { login } from "../../api/api";

const Login = (navigate) => {
    navigate = useNavigate();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

  const handleButton = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
    const user = await login(email, password);
    console.log(user);
    navigate(`/view/${user.id}`);
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleButton}>
        <Form.Label id="login-label">Login</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
