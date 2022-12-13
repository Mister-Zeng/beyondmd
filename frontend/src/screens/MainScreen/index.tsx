import { Box } from "@mui/material";
import React from "react";
import ExerciseCard from "../../components/ExerciseCard";
import ReviewForm from "../../components/ReviewForm";

const MainScreen = () => {
  return (
    <Box sx={{ backgroundColor: "#333533", height: "100vh" }}>
      <ReviewForm />
      <ExerciseCard
        exerciseName="Push Up"
        exerciseType="Strength"
        muscleType="Biceps"
        difficultyLevel="Easy"
        instructions="step1"
      />
    </Box>
  );
};

export default MainScreen;
