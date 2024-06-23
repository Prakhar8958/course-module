import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import base_url from "../Api/springbootapis";
import { toast } from 'react-toastify';
import{
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course=({course,update})=>{
    const navigate = useNavigate();
   const deleteCourse=(id)=>{
    axios.post(`${base_url}/course/deleteCourse/${id}`).then(
    (response)=>{
     console.log(response);
     console.log("success");
     update(id);
     toast.success("Course has been deleted");
    },
    (error)=>{
    console.log(error);
    console.log("error");
    toast.success("Course has not been deleted");
    }
    )
   };

   const updateCourse=(id)=>{
    axios.post(`${base_url}/course/deleteCourse/${id}`).then(
    (response)=>{
     console.log(response);
     console.log("success");
     update(id);
     navigate('/add-courses');
    },
    (error)=>{
    console.log(error);
    console.log("error");
    }
    )
   };

return(
<card className="course-card mb-3">
    <CardBody className="text-center">
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
        <Button color="warning mr-3"  onClick={()=>{
            updateCourse(course.id);
        }}>Update</Button>
        <Button color="danger" onClick={()=>{
            deleteCourse(course.id);
        }}>Delete</Button>
        </Container>
    </CardBody>
</card>

)
}
export default Course;