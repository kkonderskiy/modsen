import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./BookListSlice";

export default configureStore({
  reducer: {
    books: bookListReducer,
  },
});
