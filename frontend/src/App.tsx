import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import MainScreen from "./screens/MainScreen";
import ResumeScreen from "./screens/ResumeScreen";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="resume" element={<ResumeScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
