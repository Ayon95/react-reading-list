import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

export const BookContext = React.createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "The way of kings", author: "Brandon Sanderson", id: 1 },
    { title: "The final empire", author: "Brandon Sanderson", id: 2 },
  ]);

  function addBook(title, author) {
    setBooks([...books, { title, author, id: v4() }]);
  }

  function removeBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  const values = { books, addBook, removeBook };

  return (
    <BookContext.Provider value={values}>{props.children}</BookContext.Provider>
  );
}

export default BookContextProvider;
