import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../App.css';

function StudentDetail(match) {
    let { id } = useParams();
    console.log(id);

    useEffect(()=>{
        fetchItem();
    }, []);

    const [student, setstudent] = useState([]);

    const fetchItem = async () =>{
        const data = await fetch(`http://localhost:5556/student/${id}`);

        const student = await data.json();
        console.log(student);
        setstudent(student);
    }

  return (
    <div className="App">
      <h1>{`${student.first_name || ''} ${student.last_name || ''}`}</h1>
    </div>
  );
}

export default StudentDetail;
