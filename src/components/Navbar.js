import { useContext } from "react";
import { BookContext } from "../contexts/BookContext.js";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p>You have {books.length} books on your reading list.</p>
    </div>
  );
};

export default Navbar;
