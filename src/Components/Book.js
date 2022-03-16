import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import '../App.css';

function Book() {

    useEffect(()=>{
        fetchItems();
    }, []);

    const [books, setBooks] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('http://localhost:5556/book');

        const books = await data.json();
        console.log(books);
        setBooks(books);
    }

  return (
    <div className="App">
      {books.map((book)=>{
          return (
            <Link to={`/book/${book.id}`} key={book.id} style={{textDecoration:'none'}}>
              <Card sx={{minWidth: 275}}>
                <CardContent>
                  <Typography>
                    {book.book_name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
              // <h1 key={book.id}>
              //     <Link to={`/book/${book.id}`}>{book.id}</Link>
              // </h1>
          )
      })}
    </div>
  );
}

export default Book;
