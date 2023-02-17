import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import BookPage from "./components/pages/BookPage.jsx";
import Navigations from "./components/navigations/Navigations.jsx";
import { routeList } from "./helpers/routeList.js";

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path={routeList.mainPage} element={<MainPage />}></Route>
        <Route path={routeList.bookPageAll} element={<BookPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
