import React, { useState } from "react";
import Navigations from "./components/navigations/Navigations.jsx";
import BookContainer from "./components/Book_section/BookContainer.jsx";

//import "./styles/App.css";

function App() {
  const [bookData, setBookData] = useState([]);

  async function getBookData(request, categorie, sorting) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${request}${categorie}&orderBy=${sorting}&key=AIzaSyBmhrqwDDNQgZ2i4LaRnQDa4Nz1JDzG_xI`;
    console.log(request, categorie, sorting);
    let data = await fetch(url);
    let commits = await data.json();

    if (commits.items === undefined) {
      setBookData([]);
    } else {
      setBookData(commits.items);
    }

    console.log(commits.items);
  }

  function testCallBack(request, categorie, sorting) {
    if (categorie === "all") {
      categorie = "";
    } else {
      categorie = "+subject:" + categorie;
    }
    getBookData(request, categorie, sorting);
  }

  return (
    <div className="App">
      <Navigations test1={testCallBack} />
      <h2>Количество</h2>
      <BookContainer request={bookData} />
    </div>
  );
}

export default App;
