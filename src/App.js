import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Course from './Components/Course';
import AllCourses from "./Components/AllCourses"
import AddCourses from './Components/AddCourses';
import Header from "./Components/Header";
import Menus from './Components/Menus';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  const btnHandle=()=>{
    toast.success("This is my first meassage",{
      position:"top-center",
    });
  };
  return (

    <div className="App">
      <ToastContainer />
      <Router>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
          <Menus/>

          </Col>
          <Col md={8}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-courses" element={<AddCourses />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
          </Routes>
          </Col>

        </Row>
      </Container>
    
      </Router>
      
      </div>
  );
}

export default App;
