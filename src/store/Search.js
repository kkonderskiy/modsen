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

      let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${arg.request
        .split(" ")
        .join("+")}${arg.categorie}&orderBy=${
        arg.sorting
      }&maxResults=20&startIndex=${
        arg.index
      }&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI`;
      let data = await fetch(url);
      let commits = await data.json();
      if (commits.items === undefined && arg.pagination !== true) {
        alert("Возможно не включен VPN.");
        return {
          bookList: [],
          indexBook: 20,
          get: {
            request: arg.request,
            categorie: arg.categorie,
            sorting: arg.sorting,
          },
        };
      } else {
        if (arg.pagination === true) {
          commits.items = [...arg.bookList.items, ...commits.items];

          return {
            bookList: commits,
            indexBook: arg.index + 20,
            get: {
              request: arg.request,
              categorie: arg.categorie,
              sorting: arg.sorting,
            },
          };
        } else {
          return {
            bookList: commits,
            indexBook: 20,
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
