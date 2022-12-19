import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import type { ExerciseCardProps } from "./ExerciseCard.type";

const styles = {
  exerciseContainer: {
    backgroundColor: "#CFDBD5",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid gray",
    padding: 1,
  },
};

const ExerciseCard: FC<ExerciseCardProps> = ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
}: ExerciseCardProps) => {
  return (
    <Box display={"flex"} flexDirection={"row"} border={"none"}>
      <Box sx={styles.exerciseContainer}>
        <Typography variant="body1" color="text.secondary">
          {exerciseName}
        </Typography>
      </Box>

      <Box sx={styles.exerciseContainer}>
        <Typography variant="body1" color="text.secondary">
          {exerciseType}
        </Typography>
      </Box>

      <Box sx={styles.exerciseContainer}>
        <Typography variant="body1" color="text.secondary">
          {muscleType}
        </Typography>
      </Box>

      <Box sx={styles.exerciseContainer}>
        <Typography variant="body1" color="text.secondary">
          {difficultyLevel}
        </Typography>
      </Box>

      <Box sx={styles.exerciseContainer}>
        <Typography variant="body1" color="text.secondary">
          {instructions.slice(0, 30)} ...
        </Typography>
      </Box>
    </Box>
  );
};

export default ExerciseCard;
