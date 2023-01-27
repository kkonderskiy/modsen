import React, { useState } from "react";
import Navigations from "./components/Navigations";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Navigations value={"test"} />
    </div>
  );
}

export default App;
