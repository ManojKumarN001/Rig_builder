import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { contactConfig } from "./content_option"
// import style from '../../ContactUS/Contact/ContactUs.css'
import logo from '../../../assets/images/logo.png'
import img from '../../../assets/images/img.jpg'
import { useState } from 'react';
import validator from 'validator'
import Axios from 'axios'




function ContactUs() {
  const [names, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  let postemail = false;

  function ValidateEmail(input) {
    // setInvalidemailError(false);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log("standard iddivi");
    if (input.match(validRegex)) {
      alert("Valid email address!");
      postemail=true;
      return true;
    } else {
      // setInvalidemailError(true);
      alert("Invalid email address!");

      return false;
    }
  }



  const handleValidation = () => {

    if (names !== '' && message !== '' )
     {
      if(email !== '')
      { ValidateEmail(email)      
      } else { alert(" fields cannot be empty ") }
    } else { alert(" fields cannot be empty ") }

    if(postemail)
    {
      letstalk()
    }
  }

  const letstalk =() =>{
    
    Axios.post('http://localhost:3001/letstalk', {
      names: names,
      email: email,
      message: message,
    }).then(() => {
      console.log('Successfully sent a message')
      alert("Message sent successfully")
    });
  }

  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row>
      </Row>
      <Row>
        <div className="sidebar__logo">
          <img src={logo} alt="company logo" />
        </div>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  value={names}
                  onChange={(event) => setUsername(event.target.value)}
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  value={email}
                  // onChange={(e) => validateEmail(e)}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              ivalue={message}
              onChange={(event) => setMessage(event.target.value)}
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <Button onClick={handleValidation} className="SendButton" color="success">
                  Send
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Rig Builder. All Rights Reserved.</h6>
    </Container>
  );
}

export default ContactUs