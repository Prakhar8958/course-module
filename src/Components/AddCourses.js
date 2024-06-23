import axios from 'axios';
import React, { Fragment ,useEffect, useState} from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import base_url from '../Api/springbootapis';
import { toast } from 'react-toastify';
const AddCourses=()=>{
    useEffect(()=>{
        document.title="Add Coures";
        },[]);

    const [course,setCourses]=useState({});
    
    const handleForm=(e)=>{
    console.log(course);
    postDataServer(course);
    e.preventDefault();
    };

    const postDataServer=(data)=>{
    axios.post(`${base_url}/course/addCourse`,data).then(
        (response)=>{
         console.log(response);
         console.log("success");
         toast.success("Course successfully added");
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.success("Something went wrong");
        }
    )
    }

    return (
    <Fragment>
        <h4 className="text-center">Fill Course Details</h4>
        <Form onSubmit={handleForm}>
        <FormGroup>
            <label for="userId">Course Id</label>
            <Input type="text" placeholder="Enter Id here" name="userId" id="userId" onChange={(e)=>{
                setCourses({...course,id: e.target.value});
            }} />
        </FormGroup>
        <FormGroup>
            <label for="title">Course Title</label>
            <Input type="text" placeholder="Enter title here" id="title" onChange={(e)=>{
                setCourses({...course,title: e.target.value});
            }} />
        </FormGroup>
        <FormGroup>
            <label for="description">Course Description</label>
            <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}}
            onChange={(e)=>{
                setCourses({...course,description: e.target.value});
            }} />
        </FormGroup>
        <Container>
            <Button type="submit" color="success">Add Course</Button>
            <Button type="reset" color="warning">Remove</Button>
        </Container>
        </Form>
    </Fragment>
    );
};
export default AddCourses;