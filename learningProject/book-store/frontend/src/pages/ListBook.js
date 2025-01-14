import React, { useEffect, useState } from "react";
import api from "../api/config.js";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ListBook = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      console.log(response);
      if (response.data) setBookList(response.data);
    }

    getBooks();
  }, []);
  const deleteBook = async (id, idx) => {
    const data = window.confirm("Do you want to delete?");
    if (data) {
      try {
        const response = await api.delete(`/books/delete/${id}`);
        console.log(response);
        if (response.data.sucess) {
          const newBookList = bookList.filter((book, index) => book.id !== idx);
          setBookList(newBookList);
          console.log("Book deleted.");
          toast.success("Book Deleted.");
        } else {
          console.log("Book cannot be deleted.");
          toast.error("Unable to delete book");
        }
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    }
  };
  return (
    <>
      <div>
        {bookList.length > 0
          ? bookList.map((book, index) => {
              return (
                <div
                  key={index}
                  style={{
                    boxShadow: "0px 0px 5px #ccc",
                    padding: "10px",
                    margin: "10px auto",
                    width: "45%",
                    textAlign: "start",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ToastContainer />
                  {book.name}
                  <FaTrashAlt
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteBook(book.id, index)}
                  />
                </div>
              );
            })
          : "No Books"}
      </div>
    </>
  );
};

export default ListBook;
