// src/Components/Contact.js
import React,{useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => {
    useEffect(()=>{
        document.title="Contact";
        },[]);
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center">Contact Us</CardTitle>
              <CardText className="mt-3">
                If you have any questions or feedback, feel free to reach out to us using the form below or through the contact details provided.
              </CardText>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Your Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Your Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Your Message" />
                </FormGroup>
                <Button color="info" className="mt-1">Send Message</Button>
              </Form>
              <CardText className="mt-3">
                <h5>Contact Details</h5>
                <ul>
                  <li>Email: support@coursesapp.com</li>
                  <li>Phone: +1 (123) 456-7890</li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
