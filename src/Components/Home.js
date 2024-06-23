import React,{useEffect} from 'react';
import { Container, Card, CardBody, Button, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    useEffect(()=>{
        document.title="Home";
        },[]);
  return (
    <div className="home">
      <header className="home-header">
        
          <h4>Welcome to My React App</h4>
          <p>Your gateway to a seamless backend and frontend experience.</p>
      </header>
      <Container className="text-center mt-1">
        <Row>
          <Col md="6">
            <Card className="mb-4">
              <CardBody>
                <h5>About the Project</h5>
                <p>
                  This project is developed for learning purposes.The backend and frontend is implemented SpringBoot and React.
                </p>
                <Button color="info">Learn More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mb-4">
              <CardBody>
                <h5>Features</h5>
                <p>
                  Explore the powerful features of this app, designed to provide an exceptional user experience and robust performance.
                </p>
                <Button color="success">Discover Features</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
