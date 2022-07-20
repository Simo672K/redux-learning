const ADD_BOOK = "ADD_BOOK";

export const addBook = (title) => ({
  type: ADD_BOOK,
  payload: {
    title,
  },
});
