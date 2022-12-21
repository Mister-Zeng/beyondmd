import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { ExerciseCardDetailsPropsType } from "./ExerciseCardDetails.type";

const styles = {
  exerciseContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 2,
  },
  exerciseInnerContainer: {
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 375px)": {
      flexDirection: "column",
    },
  },
  exerciseTitleContainer: {
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    width: "80",
    "@media only screen and (max-width: 375px)": {
      padding: 2,
      paddingBottom: 0,
    },
  },
  exerciseTitleOuterContainer: {
    displays: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  exerciseKeyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
    fontFamily: "Georgia",
    color: "#333533",
    "@media only screen and (max-width: 600px)": {
      fontSize: 12,
    },
  },
  exerciseValueText: {
    fontSize: 16,
    fontFamily: "Georgia",
    color: "#333533",
    "@media only screen and (max-width: 600px)": {
      fontSize: 12,
    },
  },
};

const ExerciseCardDetails: FC<ExerciseCardDetailsPropsType> = ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
}: ExerciseCardDetailsPropsType) => {
  return (
    <Box sx={styles.exerciseContainer}>
      <Box sx={styles.exerciseInnerContainer}>
        <Box sx={styles.exerciseTitleOuterContainer}>
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
        </Box>

        <Box sx={styles.exerciseTitleOuterContainer}>
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
        </Box>
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
  );
};

export default ExerciseCardDetails;
