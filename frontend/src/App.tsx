import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExerciseScreen from "./screens/ExerciseScreen";
import MainScreen from "./screens/MainScreen";
import ResumeScreen from "./screens/ResumeScreen";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="resume" element={<ResumeScreen />} />
        <Route path="exercise" element={<ExerciseScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
