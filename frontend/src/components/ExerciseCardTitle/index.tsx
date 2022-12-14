import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  exerciseCardTitle: {
    backgroundColor: "#CFDBD5",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid gray",
    padding: 1,
  },
};

const ExerciseCardTitle: FC = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} border={"none"}>
      <Box sx={styles.exerciseCardTitle}>
        <Typography variant="body1" color="#242423">
          Exercise Name
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardTitle}>
        <Typography variant="body1" color="#242423">
          Exericse Type
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardTitle}>
        <Typography variant="body1" color="#242423">
          Muscle Type
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardTitle}>
        <Typography variant="body1" color="#242423">
          Difficuly Level
        </Typography>
      </Box>

      <Box sx={styles.exerciseCardTitle}>
        <Typography variant="body1" color="#242423">
          Instructions
        </Typography>
      </Box>
    </Box>
  );
};

export default ExerciseCardTitle;
