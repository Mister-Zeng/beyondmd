import React, { FC, useEffect, useState } from "react";
import ReviewForm from "../../components/ReviewForm";
import { Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ExerciseCardDetails from "../../components/ExerciseCardDetails";

import axios, { AxiosResponse } from "axios";
import ReviewerCard from "../../components/ReviewerCard";
import { ExerciseReviewsTypes } from "./type";
import styles from "./styles";

const ExerciseScreen: FC = () => {
  const location = useLocation();

  const [exerciseReviews, setExerciseReviews] = useState<
    ExerciseReviewsTypes[]
  >([]);

  const addReviewOnSubmit: (review: ExerciseReviewsTypes) => void = (
    review: ExerciseReviewsTypes
  ) => {
    setExerciseReviews([...exerciseReviews, review]);
  };

  useEffect(() => {
    const getReviewFromExercise: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse<any, any> = await axios.get(
          `${location.state.id}/reviews`
        );
        const datas: ExerciseReviewsTypes[] = await response.data;

        setExerciseReviews(datas);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewFromExercise();
  }, [location]);

  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "#CFDBD5",
        }}
      >
        <ExerciseCardDetails
          exerciseName={location.state.exerciseName}
          exerciseType={location.state.exerciseType}
          muscleType={location.state.muscleType}
          difficultyLevel={location.state.difficultyLevel}
          instructions={location.state.instructions}
          id={location.state.id}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            "@media only screen and (max-width:750px)": {
              flexDirection: "column",
            },
          }}
        >
          <ReviewForm
            exerciseId={location.state.id}
            addReviewOnSubmit={addReviewOnSubmit}
          />

          <Box sx={styles.reviewList}>
            <Typography sx={styles.header}>Recent Reviews</Typography>

            {exerciseReviews.map((review) => {
              return (
                <ReviewerCard
                  key={review.id}
                  rating={review.rating}
                  firstName={review.first_name}
                  lastName={review.last_name}
                  posted={review.posted}
                  comment={review.comment}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ExerciseScreen;
