import React, { FC } from "react";
import ReviewForm from "../../components/ReviewForm";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ExerciseCardDetails from "../../components/ExerciseCardDetails";

const ExerciseScreen: FC = () => {
  const location = useLocation();
  const object = {
    name: location.state.exerciseName,
    exercise_type: location.state.exerciseType,
    muscle: location.state.muscleType,
    difficulty: location.state.difficultyLevel,
    instructions: location.state.instructions,
    id: location.state.id,
  };
  console.log(object);
  return (
    <Box
      display={"flex"}
      sx={{
        height: "100vh",
        "@media only screen and (max-width: 760px)": {
          flexDirection: "column",
          width: "100%",
        },
      }}
    >
      <ExerciseCardDetails
        exerciseName={location.state.exerciseName}
        exerciseType={location.state.exerciseType}
        muscleType={location.state.muscleType}
        difficultyLevel={location.state.difficultyLevel}
        instructions={location.state.instructions}
        id={location.state.id}
      />

      <ReviewForm exerciseId={location.state.id} />
    </Box>
  );
};

export default ExerciseScreen;
