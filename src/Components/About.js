// src/Components/About.js
import React,{useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const About = () => {
    useEffect(()=>{
        document.title="About";
        },[]);
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center">About Us</CardTitle>
              <CardText className="mt-3">
                Welcome to our courses app. Our mission is to provide the best online courses to help you learn and grow in your career. 
                We offer a wide range of courses across various domains, each designed by industry experts.
              </CardText>
              <CardText className="mt-3">
                <h5>Our Values</h5>
                <ul>
                  <li>Commitment to quality education</li>
                  <li>Focus on student success</li>
                  <li>Innovative teaching methods</li>
                  <li>Continuous improvement</li>
                </ul>
              </CardText>
              <CardText className="mt-3">
                Join us and start your learning journey today!
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
