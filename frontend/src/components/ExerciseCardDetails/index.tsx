import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { ExerciseCardDetailsPropsType } from "./type";
import styles from "./styles";

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
            <Typography sx={styles.exerciseKeyText}>Exercise Name:</Typography>
            <Typography sx={styles.exerciseValueText}>
              {exerciseName}
            </Typography>
          </Box>

          <Box sx={styles.exerciseTitleContainer}>
            <Typography sx={styles.exerciseKeyText}>Exericse Type:</Typography>
            <Typography sx={styles.exerciseValueText}>
              {exerciseType}
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.exerciseTitleOuterContainer}>
          <Box sx={styles.exerciseTitleContainer}>
            <Typography sx={styles.exerciseKeyText}>Muscle Type:</Typography>
            <Typography sx={styles.exerciseValueText}>{muscleType}</Typography>
          </Box>

          <Box sx={styles.exerciseTitleContainer}>
            <Typography sx={styles.exerciseKeyText}>Difficuly Type:</Typography>
            <Typography sx={styles.exerciseValueText}>
              {difficultyLevel}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.exerciseTitleContainer}>
        <Typography sx={styles.exerciseKeyText}>Instructions:</Typography>
        <Typography sx={styles.exerciseValueText}>{instructions}</Typography>
        <hr style={styles.lineBreak} />
      </Box>
    </Box>
  );
};

export default ExerciseCardDetails;
