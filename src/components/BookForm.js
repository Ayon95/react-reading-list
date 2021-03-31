import React from "react";
import { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { addBook } = useContext(BookContext);

  function clearInputFields() {
    setTitle("");
    setAuthor("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    addBook(title, author);
    clearInputFields();
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="form__title">Add book</h2>
        <div className="form__input-container">
          <label className="form__label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            className="form__input"
            id="title"
            value={title}
            placeholder="Enter the book's title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form__input-container">
          <label className="form__label" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            className="form__input"
            id="author"
            value={author}
            placeholder="Enter the book's author"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;
