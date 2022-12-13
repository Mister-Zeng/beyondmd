import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { FC } from "react";

type ExerciseCardProps = {
  exerciseName: string;
  exerciseType: string;
  muscleType: string;
  difficultyLevel: string;
  instructions: string;
};

const ExerciseCard: FC<ExerciseCardProps> = ({
  exerciseName,
  exerciseType,
  muscleType,
  difficultyLevel,
  instructions,
}: ExerciseCardProps) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card sx={{ backgroundColor: "#CFDBD5" }} variant="outlined">
        <CardActions sx={{ float: "right" }}>
          <ClearIcon />
        </CardActions>

        <CardContent>
          <Typography variant="body1" color="#242423">
            Exercise Name:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {exerciseName}
          </Typography>
          <Typography variant="body1" color="#242423">
            Exericse Type:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {exerciseType}
          </Typography>
          <Typography variant="body1" color="#242423">
            Muscle Type:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {muscleType}
          </Typography>
          <Typography variant="body1" color="#242423">
            Difficuly Type:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {difficultyLevel}
          </Typography>
          <Typography variant="body1" color="#242423">
            Instructions:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {instructions}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExerciseCard;
