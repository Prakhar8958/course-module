import React,{useState,useEffect} from 'react'
import Course from "./Course"
import base_url from '../Api/springbootapis';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourses=()=>{
    useEffect(()=>{
    document.title="All Coures";
    },[]);

    //
    const getAllCourses=()=>{
        axios.get(`${base_url}/course/getAllCourse`).then(
            (response)=>{
             console.log(response.data);
             toast.success("Course has been loaded");
             setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong");
            }
        );
    }
    useEffect(()=>{
        getAllCourses();
    },[]);

    const [courses,setCourses]=useState([])
    
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    };
    
    return (
    <div>
        <h4>All Course</h4>
        <p>List of Courses are as follows</p>
         
        {
            courses.length>0 ? courses.map((item)=>(
                <Course key={item.id} course={item} update={updateCourses}/>
            )) : "No Courses"
        }
    
    </div>
    );
};

export default AllCourses;