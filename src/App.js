import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import BookPage from "./components/pages/BookPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/book_list/*" element={<BookPage />}></Route>
    </Routes>
  );
}

export default App;
