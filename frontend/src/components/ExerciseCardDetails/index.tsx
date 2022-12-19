import { Box, Typography } from "@mui/material";
import React from "react";
import { ExerciseCardDetailsPropsType } from "./ExerciseCardDetails.type";

const ExerciseCardDetails: ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
}: ExerciseCardDetailsPropsType) => JSX.Element = ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
}: ExerciseCardDetailsPropsType) => {
  const styles = {
    exerciseContainer: {
      backgroundColor: "#CFDBD5",
      display: "flex",
      flexDirection: "column",
      padding: 2,
      width: "50%",
      "@media only screen and (max-width: 760px)": {
        width: "100%",
      },
    },
    exerciseTitleContainer: {
      display: "flex",
      flexDirection: "row",
      padding: 2,
    },
    exerciseKeyText: {
      fontSize: 16,
      width: 130,
      paddingLeft: 2,
      paddingRight: 2,
      color: "#333533",
      "@media only screen and (max-width: 600px)": {
        fontSize: 12,
      },
    },
    exerciseValueText: {
      fontSize: 16,
      paddingLeft: 2,
      paddingRight: 2,
      color: "#333533",
      width: 300,
      "@media only screen and (max-width: 600px)": {
        fontSize: 12,
      },
    },
  };

  return (
    <React.Fragment>
      <Box sx={styles.exerciseContainer}>
        <Box sx={styles.exerciseTitleContainer}>
          <Typography variant="body1" sx={styles.exerciseKeyText}>
            Exercise Name:
          </Typography>
          <Typography variant="body1" sx={styles.exerciseValueText}>
            {exerciseName}
          </Typography>
        </Box>

        <Box sx={styles.exerciseTitleContainer}>
          <Typography variant="body1" sx={styles.exerciseKeyText}>
            Exericse Type:
          </Typography>
          <Typography variant="body1" sx={styles.exerciseValueText}>
            {exerciseType}
          </Typography>
        </Box>

        <Box sx={styles.exerciseTitleContainer}>
          <Typography variant="body1" sx={styles.exerciseKeyText}>
            Muscle Type:
          </Typography>
          <Typography variant="body1" sx={styles.exerciseValueText}>
            {muscleType}
          </Typography>
        </Box>

        <Box sx={styles.exerciseTitleContainer}>
          <Typography variant="body1" sx={styles.exerciseKeyText}>
            Difficuly Type:
          </Typography>
          <Typography variant="body1" sx={styles.exerciseValueText}>
            {difficultyLevel}
          </Typography>
        </Box>

        <Box sx={styles.exerciseTitleContainer}>
          <Typography variant="body1" sx={styles.exerciseKeyText}>
            Instructions:
          </Typography>
          <Typography variant="body1" sx={styles.exerciseValueText}>
            {instructions}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ExerciseCardDetails;
