import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const ExerciseCardTitle: FC = () => {
  const styles = {
    exerciseCardContainer: {
      backgroundColor: "#CFDBD5",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      border: "1px solid gray",
      textAlign: "center",
      padding: 1,
      "@media only screen and (max-width: 1200px)": {
        width: 120,
      },
      "@media only screen and (max-width: 700px)": {
        width: 90,
      },
      "@media only screen and (max-width: 600px)": {
        width: 45,
      },
    },
    exerciseCardTitle: {
      "@media only screen and (max-width: 600px)": {
        fontSize: 9,
      },
    },
  };

  return (
    <Box display={"flex"} flexDirection={"row"} border={"none"}>
      <Box sx={styles.exerciseCardContainer}>
        <Typography
          variant="body1"
          color="#242423"
          sx={styles.exerciseCardTitle}
        >
          Exercise Name
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardContainer}>
        <Typography
          variant="body1"
          color="#242423"
          sx={styles.exerciseCardTitle}
        >
          Exericse Type
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardContainer}>
        <Typography
          variant="body1"
          color="#242423"
          sx={styles.exerciseCardTitle}
        >
          Muscle Type
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardContainer}>
        <Typography
          variant="body1"
          color="#242423"
          sx={styles.exerciseCardTitle}
        >
          Difficuly Level
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardContainer}>
        <Typography
          variant="body1"
          color="#242423"
          sx={styles.exerciseCardTitle}
        >
          Instructions
        </Typography>
      </Box>
    </Box>
  );
};

export default ExerciseCardTitle;
