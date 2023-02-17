import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "./Search";
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
      alert("loading");
    },
    [fetchBooks.fulfilled]: (state, action) => {
      console.log("Itog", action.payload);
      state.indexPage = action.payload.indexBook;
      state.bookList = action.payload.bookList;
      state.requestData = action.payload.get;
      console.log(state.bookList);
      state.loader = false;
      alert("OK");
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loader = false;
      alert("error");
    },
  },
});

export const { getBooks, paginationsBook } = bookListSlice.actions;

export default bookListSlice.reducer;
