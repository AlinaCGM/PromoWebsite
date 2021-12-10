import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "emailjs-com";
import "./Consultation.css";
import FadeInSection from './FadeInSection';



const SERVICE_ID = process.env.REACT_APP_SERVICEID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATEID;
const USER_ID = process.env.REACT_APP_USERID;

const Contact1 = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        alert("Message was sent successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Error occured");
      }
    );
    e.target.reset();
  };

  return (
    <FadeInSection>
    <div id="consultation" className=" consultation flex ">
      <div class="row pictures  align-bottom">
        <div class="container-consultation ">
          <div class="row content-cons">
            <div class=" underline">
              {" "}
              <h1 className=" consultation-title">FREE CONSULTATION</h1>
            </div>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1" id="contactus">
                <div class="row common-col ">
                  <div class="col-6 col-md-6 col-lg-6 name px-0 ">
                    <Form.Control
                      className="background-form-name"
                      type="name" 
                      id="name"
                      name="from_name"
                      required
                      placeholder="Name"
                    />
                  </div>

                  <div class="col-6 col-md-6 col-lg-6 last ">
                    <Form.Control
                      className="background-form"
                      type="name"
                      id="name"
                      name="from_name"
                      required
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <Form.Control
                  className="background-form"
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="name@example.com"
                />
              </Form.Group>

              <Form.Group className=" form_control1">
                <Form.Control
                  className="background-form "
                  as="textarea"
                  type="message"
                  rows={4}
                  cols={10}
                  id="message"
                  name="message"
                  required
                  placeholder="Please write a message"
                  background-color="green"
                />
                <div className="text-center mt-3 w-100">
                  <Button variant="secondary" type="submit" className="rounded ">
                    Submit
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
      </FadeInSection>
  );
};

export default Contact1;
