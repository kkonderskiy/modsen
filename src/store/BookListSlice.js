import { createSlice } from "@reduxjs/toolkit";

const bookListSlice = createSlice({
  name: "list",
  initialState: {
    bookList: [],
  },
  reducers: {
    getBooks(state, action) {},
  },
});

export const { getBooks } = bookListSlice.actions;

export default bookListSlice.reducer;
