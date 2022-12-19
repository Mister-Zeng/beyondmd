import React, { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import type { ExerciseCardProps } from "./ExerciseCard.type";
import { Link } from "react-router-dom";

const ExerciseCard: FC<ExerciseCardProps> = ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
  id,
}: ExerciseCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const styles = {
    exerciseContainer: {
      backgroundColor: "#CFDBD5",
      display: "flex",
      flexDirection: "column",
      width: 200,
      height: 30,
      border: "1px solid gray",
      padding: 1,
      "@media only screen and (max-width: 1200px)": {
        width: 120,
        height: 50,
      },
      "@media only screen and (max-width: 700px)": {
        width: 90,
      },
      "@media only screen and (max-width: 600px)": {
        width: 45,
      },
    },
    exerciseText: {
      "@media only screen and (max-width: 600px)": {
        fontSize: 9,
      },
    },
  };

  return (
    <Link
      to={`exercise/${exerciseName}`}
      state={{
        exerciseName,
        exerciseType,
        muscleType,
        difficultyLevel,
        instructions,
        id,
      }}
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "row",

          cursor: "pointer",
          border: isHover ? "2px solid #F5CB5C" : "none",
        }}
        type="button"
        onClick={() => {}}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Box sx={styles.exerciseContainer}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={styles.exerciseText}
          >
            {exerciseName}
          </Typography>
        </Box>
        <Box sx={styles.exerciseContainer}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={styles.exerciseText}
          >
            {exerciseType}
          </Typography>
        </Box>
        <Box sx={styles.exerciseContainer}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={styles.exerciseText}
          >
            {muscleType}
          </Typography>
        </Box>
        <Box sx={styles.exerciseContainer}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={styles.exerciseText}
          >
            {difficultyLevel}
          </Typography>
        </Box>
        <Box sx={styles.exerciseContainer}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={styles.exerciseText}
          >
            {instructions.slice(0, 20)} ...
          </Typography>
        </Box>
      </button>
    </Link>
  );
};

export default ExerciseCard;
