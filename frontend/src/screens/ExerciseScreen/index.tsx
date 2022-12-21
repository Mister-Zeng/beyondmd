import React, { FC } from "react";
import ReviewForm from "../../components/ReviewForm";
import { Box, Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import ExerciseCardDetails from "../../components/ExerciseCardDetails";

const ExerciseScreen: FC = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ backgroundColor: "#CFDBD5" }}
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
      </Container>
    </React.Fragment>
  );
};

export default ExerciseScreen;
