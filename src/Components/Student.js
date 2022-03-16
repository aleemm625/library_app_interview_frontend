import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import '../App.css';

function Student() {

    useEffect(()=>{
        fetchItems();
    }, []);

    const [students, setStudents] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('http://localhost:5556/student');

        const students = await data.json();
        console.log(students);
        setStudents(students);
    }

  return (
    <div className="student-list">

      {students.map((student)=>{
          return (
            <Link to={`/student/${student.id}`} key={student.id} style={{textDecoration:'none'}}>
              <Card sx={{minWidth: 275}}>
                <CardContent>
                  <Typography>
                    {student.first_name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>

              // <h1 key={student.id}>
              //     <Link to={`/student/${student.id}`}>{student.id}</Link>
              // </h1>
          )
      })}

    </div>
  );
}

export default Student;
