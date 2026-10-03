import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

function ContactForm() {
  const [state, handleSubmit] = useForm("mleynydl");
  if (state.succeeded) {
      return <p className="success">Message sent!</p>;
  }
  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <div data-aos="zoom-in-up" data-aos-once="true" className="contact-form">
          <>
            <div className="contact-head-div text-center mx-auto">
              <h1 id="Contact" className="contact-head">Contact<span className="header-color">.</span></h1>
            </div>
          </>
          <div className="container">
            <div className="git-cont row">
              <div className="col-12 col-sm-6 half">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fname"> Name </label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name" required />
                  
                  <label htmlFor="email"> Email Address </label>
                  <input id="email" type="email" name="email" placeholder="Your email" required /> 
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  
                  <label htmlFor="message"> Message</label>
                  <textarea id="message" name="message" placeholder="Your message..." required />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  
                  <button type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-12 col-sm-6 half">
                <p className="lead">
                 
                </p>
                <Container id="contact">
                  <Container>
                    <Row>
                      <Col md={12} className="contact-social">
                        <ul className="contact-social-links">
                          <li className="social-icons">
                            <a
                              href="https://github.com/AshtonJ7"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour contact-social-icons"
                            >
                              <FaGithub />
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="https://www.linkedin.com/in/ashton-kabote-473395269/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour contact-social-icons"
                            >
                              <FaLinkedin />
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour contact-social-icons"
                            >
                              <FaInstagram />
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

function Contact() {
  return (
    <ContactForm />
  );
}

export default Contact;