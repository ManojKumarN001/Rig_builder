import React, { useState } from "react";
import "./LoginPage.css";
import { Container, Form, Button } from "react-bootstrap";
import Axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // changed from email to username
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Logging in with:", username, password);

    Axios.post("http://localhost:3001/AdminSignin", {
      username: username, // send username field (adjust backend if needed)
      password: password,
    })
      .then((res) => {
        console.log("Successfully sent the request.");
        console.log(res);
        if (res.data.token) {
          console.log("Token received");
          document.cookie = res.data.token + "; Path=/;";
          console.log(document.cookie);
          window.location.replace("http://localhost:3000/Adminpage");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid username or password");
      });
  };

  return (
    <div className="gaming-container">
      {/* Background Video */}
      <video autoPlay loop muted className="video-background">
        <source src="/video/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Card */}
      <Container className="gaming-card">
        <h1 className="gaming-title">Admin Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text" // changed from email to text
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </Form.Group>

          <Button className="gaming-btn" type="submit" block>
            Login
          </Button>
        </Form>
        <div className="gaming-footer">© 2025 RIG BUILDER, All Rights Reserved.</div>
      </Container>
    </div>
  );
}
