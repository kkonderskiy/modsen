import React, { useState } from "react";
import Navigations from "./components/navigations/Navigations.jsx";
import BookInfo from "./components/Book_section/BookInfo.jsx";
import BookContainer from "./components/Book_section/BookContainer.jsx";

//import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigations value={"test"} />
      <h2>Количество</h2>
      <BookContainer />
    </div>
  );
}

export default App;
