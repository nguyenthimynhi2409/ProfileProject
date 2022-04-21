import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:9000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
function Login()  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleButton = async (e) => {
        e.preventDefault();
        const token =  await  loginUser({
            email,
            password
        });
        this.props.setToken(token)
    }
    return(
        <Container className="login-container">
            <Form onSubmit={handleButton}>
                <Form.Label id="login-label">Login</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  placeholder="Enter email"  onChange={ e => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Login
                </Button>
            </Form>
        </Container>
    )



}
Login.propTypes ={
    setToken: PropTypes.func.isRequired

}
export default Login;