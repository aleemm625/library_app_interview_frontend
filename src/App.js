import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './Components/Nav';
import Student from './Components/Student';
import Book from './Components/Book';
import BookDetail from './Components/BookDetail';
import StudentDetail from './Components/StudentDetail';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/student/:id" element={<StudentDetail/>} />
        <Route path="/book/:id" element={<BookDetail/>} />
        </Routes>
      </div>
      
    </Router>
  );
}


const Home = () =>{
  return(
    <div>
    <h1>
      Home Page
    </h1>
  </div>
  )
  
}


export default App;
