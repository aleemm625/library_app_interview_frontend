import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../App.css';

function BookDetail(match) {
    let { id } = useParams();
    console.log(id);

    useEffect(()=>{
        fetchItem();
    }, []);

    const [book, setBook] = useState([]);

    const fetchItem = async () =>{
        const data = await fetch(`http://localhost:5556/book/${id}`);

        const book = await data.json();
        console.log(book);
        setBook(book);
    }

  return (
    <div className="App">
      <h1>{book.book_name}</h1>
      <h3>{book.author}</h3>
    </div>
  );
}

export default BookDetail;
