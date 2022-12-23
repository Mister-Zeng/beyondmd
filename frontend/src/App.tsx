import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExerciseScreen from "./screens/ExerciseScreen";
import MainScreen from "./screens/MainScreen";
import ResumeScreen from "./screens/ResumeScreen";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchDataFromAPI: () => Promise<void> = async () => {
      try {
        await axios.post("/api/exercise");
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataFromAPI();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="resume" element={<ResumeScreen />} />
        <Route path="exercise/:exerciseName" element={<ExerciseScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
