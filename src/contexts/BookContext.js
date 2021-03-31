import React, { useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = React.createContext();
const data = JSON.parse(localStorage.getItem("books"));

function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, data ? data : []);

  /*
  function addBook(title, author) {
    setBooks([...books, { title, author, id: v4() }]);
  }

  function removeBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }
  */

  // saving the books array to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const values = { books, dispatch };

  return (
    <BookContext.Provider value={values}>{props.children}</BookContext.Provider>
  );
}

export default BookContextProvider;
