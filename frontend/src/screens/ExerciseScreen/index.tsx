import React, { FC } from "react";
import ReviewForm from "../../components/ReviewForm";
import { Box, Typography } from "@mui/material";
import type { ExerciseCardProps } from "../../types/ExerciseType";

const ExerciseScreen: FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{ backgroundColor: "#333533", height: "100vh", width: "100%" }}
    >
      <Box>
        <Box>
          <Typography variant="body1" color="#242423">
            Exercise Name
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="#242423">
            Exericse Type
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="#242423">
            Muscle Type
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="#242423">
            Difficuly Type
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="#242423">
            Instructions
          </Typography>
        </Box>
      </Box>

      <ReviewForm />
    </Box>
  );
};

export default ExerciseScreen;
