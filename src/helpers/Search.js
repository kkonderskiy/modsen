import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "list/fetchBooks",
  async function (arg, { rejectWithValue }) {
    try {
      if (arg.categorie === "all") {
        arg.categorie = "";
      } else {
        arg.categorie = "+subject:" + arg.categorie;
      }

      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${arg.request
        .split(" ")
        .join("+")}${arg.categorie}&orderBy=${
        arg.sorting
      }&maxResults=30&startIndex=${
        arg.index
      }&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI`;
      let data = await fetch(url);
      let commits = await data.json();
      if (commits.items === undefined && arg.pagination !== true) {
        alert("Возможно не включен VPN.");
        return {
          bookList: [],
          indexBook: 30,
          get: {
            request: arg.request,
            categorie: arg.categorie,
            sorting: arg.sorting,
          },
        };
      } else {
        if (commits.items === undefined && arg.pagination === true) {
          alert("Невозможно загрузить еще книг: все подходящие кончились!!!");
          commits = arg.bookList;
          return {
            bookList: commits,
            indexBook: arg.index,
            get: {
              request: arg.request,
              categorie: arg.categorie,
              sorting: arg.sorting,
            },
          };
        }
        if (arg.pagination === true) {
          commits.items = [...arg.bookList.items, ...commits.items];

          return {
            bookList: commits,
            indexBook: arg.index + 30,
            get: {
              request: arg.request,
              categorie: arg.categorie,
              sorting: arg.sorting,
            },
          };
        } else {
          return {
            bookList: commits,
            indexBook: 30,
            get: {
              request: arg.request,
              categorie: arg.categorie,
              sorting: arg.sorting,
            },
          };
        }
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
