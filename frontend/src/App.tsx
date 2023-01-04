import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExerciseScreen from "./screens/ExerciseScreen";
import MainScreen from "./screens/MainScreen";
import ResumeScreen from "./screens/ResumeScreen";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="resume" element={<ResumeScreen />} />
          <Route path="exercise/:id" element={<ExerciseScreen />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
