import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import Axios from 'axios'


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const AdminLogin = () => {
        console.log(email, password);
        Axios.post("http://localhost:3001/AdminSignin", {
            email: email,
            password: password,
        })
            .then((res) => {
                console.log("Successfully sent the cresa.");
                console.log(res);
                if (res.data.token) {
                    console.log("Token recieved");
                    document.cookie = res.data.token + "; Path=/;";
                    console.log(document.cookie);
                    window.location.replace("http://localhost:3000/Adminpage");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("invalid email or password")
            });
    };


    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required placeholder="Enter email"
                                    onChange={(event) => { setEmail(event.target.value) }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required placeholder="Password"
                                    onChange={(event) => { setPassword(event.target.value) }} />
                            </Form.Group>

                            <Button onClick={AdminLogin} variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default LoginPage;