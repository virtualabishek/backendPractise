import React from "react";
import { useLocation } from "react-router-dom";

const Explore = () => {
  const book = useLocation().state.book;
  console.log(book);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "0px 0px 5px #ccc",
          marginLeft: "20px",
          // justifyContent: "center",
          // textAlign: "center",
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
        />
        Book
        <small>{book.name}</small>
        <br />
        <br />
        Author
        <small>{book.author}</small>
        <br />
        <br />
        Description:
        <small>{book.description}</small>
      </div>
    </>
  );
};

export default Explore;
