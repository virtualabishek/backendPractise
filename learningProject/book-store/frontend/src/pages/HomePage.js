import React, { useEffect, useState } from "react";
import api from "../api/config.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [bookList, setBookList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tempBookList, setTempBookList] = useState("");
  const navigate = useNavigate();
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
        setTempBookList(response.data);
      }
    }
    if (searchText) searchBooks();
    else setBookList(tempBookList);
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
          cursor: "pointer",
        }}
      >
        {bookList.length > 0
          ? bookList.map((book, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    navigate("/explore", {
                      state: {
                        book,
                      },
                    })
                  }
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    boxShadow: "0px 0px 5px #ccc",
                    marginLeft: "20px",
                    justifyContent: "center",
                    textAlign: "center",
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
            })
          : "No Books Found"}
      </div>
    </>
  );
};

export default HomePage;
