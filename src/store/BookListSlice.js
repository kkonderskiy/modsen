import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../helpers/Search";
const bookListSlice = createSlice({
  name: "list",
  initialState: {
    bookList: [],
    requestData: [],
    indexPage: 0,
    loader: false,
  },
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.loader = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.indexPage = action.payload.indexBook;
      state.bookList = action.payload.bookList;
      state.requestData = action.payload.get;
      state.loader = false;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loader = false;
      alert(action.payload);
      alert("error");
    },
  },
});

export const { getBooks, paginationsBook } = bookListSlice.actions;

export default bookListSlice.reducer;
