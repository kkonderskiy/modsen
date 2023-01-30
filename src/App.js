import React, { useState } from "react";
import Navigations from "./components/navigations/Navigations.jsx";
import BookContainer from "./components/Book_section/BookContainer.jsx";

//import "./styles/App.css";

function App() {
  const [bookData, setBookData] = useState([]);

  function testCallBack(test) {
    setBookData(test);
    console.log(bookData);
  }

  return (
    <div className="App">
      <Navigations test1={testCallBack} />
      <h2>Количество</h2>
      <BookContainer />
    </div>
  );
}

export default App;
