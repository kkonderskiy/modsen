import React, { useState } from "react";
import Navigations from "../navigations/Navigations.jsx";
import BookContainer from "../Book_section/BookContainer.jsx";
import searchBookData from "../../API/Search.js";
import Loader from "../UI/loader.jsx";
//import "./styles/App.css";

function MainPage() {
  const [bookData, setBookData] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const [index, setIndex] = useState(20);
  const [bookDataLoading, setbookDataLoading] = useState(false);

  async function testCallBack(request, categorie, sorting) {
    setbookDataLoading(true);
    if (categorie === "all") {
      categorie = "";
    } else {
      categorie = "+subject:" + categorie;
    }
    setRequestData([request, categorie, sorting]);

    const response = await searchBookData(
      request,
      categorie,
      sorting,
      0,
      false,
      bookData
    );
    console.log("Test", response);
    setBookData(response[0]);
    setIndex(20);
    setbookDataLoading(false);
  }

  async function paginations() {
    setbookDataLoading(true);
    console.log(0, index);
    const response = await searchBookData(
      ...requestData,
      index,
      true,
      bookData
    );
    setBookData(response[0]);
    setIndex(response[1] + 20);
    setbookDataLoading(false);
  }

  return (
    <div className="App">
      <Navigations test1={testCallBack} />
      <h2>
        Количество{" "}
        {bookData.totalItems !== undefined ? bookData.totalItems : ""}
      </h2>
      <BookContainer
        request={bookData.items !== undefined ? bookData.items : []}
      />
      {bookDataLoading ? <Loader /> : ""}
      {bookData.length === 0 ? (
        " "
      ) : (
        <input type="button" value="click" onClick={paginations} />
      )}
    </div>
  );
}

export default MainPage;
