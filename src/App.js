import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import BookPage from "./components/pages/BookPage.jsx";
import Navigations from "./components/navigations/Navigations.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigations />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/book_list/*" element={<BookPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
