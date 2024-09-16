import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/booklogo.png";
import Book from "../assets/book.png";
import Audiobook from "../assets/headphone.png";
import Searchbar from "../assets/search.png";
import "../App.css";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((res) => {
        setBooks(res.data.books);
        console.log(res.data.books)
        setFiltered(res.data.books);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  let handleChange = (event) => {
    let searchBoxValue = event.target.value;

    if (searchBoxValue == "") {
      setFiltered(books);
      return;
    }
    let newData = books.filter((ele) => {
      return ele.title.toLowerCase().includes(searchBoxValue.toLowerCase());
    });

    setFiltered(newData);
  };

  return (
    <div className="body">
      <header>
        <div className="top-panel flex">
          <div className="logo flex align-center">
            <img src={Logo} alt="" />
            <h2>Kalvium Books</h2>
          </div>
          <div className="buttons-sec flex align-center">
            <div className="book-btn flex align-center">
              <img src={Book} alt="" />
              <p>Books</p>
            </div>
            <div className="audio-btn flex align-center">
              <img src={Audiobook} alt="" />
              <p>AudioBooks</p>
            </div>
          </div>
          =
        </div>
        <div className="hero-img flex">
          <div className="text">
            <h1>Keep The </h1>
            <h1>Story Going...</h1>
            <p>
              {" "}
              Don't let the story end just yet. Continue reading your last book
              and immerse yourself in
            </p>
            <p>the world of literature</p>
            <div className="input-bar">
              <input
                type="text"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
              />
              <div>
                <img src={Searchbar} alt="" />
              </div>
            </div>
          </div>
          <img className="hero-book" src={Logo} alt="" />
        </div>
      </header>

      <main className="book-container">
        {filtered.length === 0 ? (
          <h1>No Books Found</h1>
        ) : (
          filtered.map((book) => {
            return (
              <div className="book-box">
                <p className="title">{book.title}</p>
                <div className="flex des">
                <img src={book.imageLinks.thumbnail} alt="" />
                <p>{book.description}</p>

                </div>
               
                <div className="flex rating">
                  <p>{book.authors?book.authors:"NA"}</p>
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
