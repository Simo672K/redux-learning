import store from "./store";
import { useState } from "react";

function Form({ prev, addTitle }) {
  const [bookName, setBookName] = useState("");

  const addBookHandler = (e) => {
    store.dispatch({
      type: "ADD_BOOK",
      payload: {
        title: bookName,
      },
    });
    addTitle([...prev, bookName]);
    setBookName("");
    e.preventDefault();
  };

  return (
    <form className="custom-form">
      <input
        className="custom-input"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        type="text"
        placeholder="Enter a name of a book"
      />
      <button className="custom-btn" type="submit" onClick={addBookHandler}>
        Add
      </button>
    </form>
  );
}
export default Form;
