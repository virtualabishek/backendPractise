import React, { useEffect, useState } from "react";
import api from "../api/config.js";

const HomePage = () => {
  const [bookList, setBookList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const response = await api.get("/books");
      setBookList(response.data);
    }
    fetchBooks();
  }, []);
  useEffect(() => {
    async function searchBooks() {
      const response = await api.get(`/books/search/all?q=${searchText}`);
      if (response.data) {
        console.log(response.data);
        setBookList(response.data);
      }
    }
    if (searchText) searchBooks();
  }, [searchText]);

  return (
    <>
      <center>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Books..."
          style={{
            width: "55%",
            margin: "20px",
            padding: "10px",
          }}
        />
      </center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {bookList.map((book, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                boxShadow: "0px 0px 5px #ccc",
                marginLeft: "20px",
              }}
            >
              <img
                src={book.image}
                alt="book"
                style={{
                  height: "250px",
                  width: "250px",
                  objectFit: "contain",
                }}
              />{" "}
              <br />
              {book.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
