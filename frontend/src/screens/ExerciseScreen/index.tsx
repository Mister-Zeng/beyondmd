import React, { FC, useEffect, useState } from "react";
import ReviewForm from "../../components/ReviewForm";
import { Box, Container, Rating, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ExerciseCardDetails from "../../components/ExerciseCardDetails";
import axios, { AxiosResponse } from "axios";
import ReviewerCard from "../../components/ReviewerCard";
import { ExerciseReviewsTypes } from "./type";
import styles from "./styles";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { BallTriangle } from "react-loader-spinner";
const ExerciseScreen: FC = () => {
  const location = useLocation();

  const [showAlert, setShowAlert] = useState(false);

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const [exerciseImage, setExerciseImage] = useState<string>("");

  const [exerciseReviews, setExerciseReviews] = useState<
    ExerciseReviewsTypes[]
  >([]);

  const addReviewOnSubmit: (
    review: ExerciseReviewsTypes,
    isSuccess: boolean
  ) => void = (review: ExerciseReviewsTypes, isSuccess: boolean) => {
    setExerciseReviews([...exerciseReviews, review]);
    setShowAlert(isSuccess);
  };

  const popUpOnClose: (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => void = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const averageReview: () => number = () => {
    let total: number = 0;
    if (exerciseReviews) {
      exerciseReviews.forEach((review) => {
        total += review.rating;
      });
    }

    return parseFloat((total / exerciseReviews.length).toFixed(1));
  };

  useEffect(() => {
    const getReviewFromExercise: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse<any, any> = await axios.get(
          `/exercise/${location.state.id}/reviews`
        );
        const datas: ExerciseReviewsTypes[] = await response.data;

        setExerciseReviews(datas);
      } catch (error) {
        console.error(error);
      }
    };

    const getExercisePicture: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse<any, any> = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
            },
            params: {
              query: `${location.state.exerciseName} exercises`,
              orientation: "landscape",
            },
          }
        );
        const datas: string = await response.data.results[0].urls.regular;

        setExerciseImage(datas);
      } catch (error) {
        console.error(error);
      } finally {
        setIsImageLoaded(true);
      }
    };

    getReviewFromExercise();

    getExercisePicture();
  }, [location.state.exerciseName, location.state.id]);

  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "#CFDBD5",
        }}
      >
        <Snackbar
          open={showAlert}
          autoHideDuration={5000}
          onClose={popUpOnClose}
        >
          <Alert onClose={popUpOnClose} severity="success">
            Review posted
          </Alert>
        </Snackbar>

        {!isImageLoaded ? (
          <Box sx={styles.spinner}>
            <BallTriangle
              height={50}
              width={30}
              radius={5}
              color="gray"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
            <Typography fontSize={10}>Loading...</Typography>
          </Box>
        ) : (
          <Box
            component="img"
            sx={styles.exerciseImage}
            alt="Exercise Picture"
            src={exerciseImage}
          />
        )}

        <ExerciseCardDetails
          exerciseName={location.state.exerciseName}
          exerciseType={location.state.exerciseType}
          muscleType={location.state.muscleType}
          difficultyLevel={location.state.difficultyLevel}
          instructions={location.state.instructions}
          id={location.state.id}
        />

        <Box sx={styles.reviewContainer}>
          <Box>
            <Box marginBottom={4}>
              <Typography sx={styles.averageHeader}>Average Reviews</Typography>

              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Rating
                  name="average exercise rating"
                  readOnly
                  value={averageReview()}
                  precision={0.1}
                  sx={styles.averageRating}
                  size="medium"
                />

                <Typography sx={styles.averageRatingText}>
                  {exerciseReviews.length !== 0
                    ? averageReview() + " out of 5"
                    : "No Reviews Yet"}
                </Typography>
              </Box>
            </Box>

            <ReviewForm
              exerciseId={location.state.id}
              addReviewOnSubmit={addReviewOnSubmit}
            />
          </Box>

          <Box sx={styles.reviewList}>
            <Typography sx={styles.header}>Recent Reviews</Typography>

            {exerciseReviews ? (
              exerciseReviews.map((review) => {
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
              })
            ) : (
              <p>No reviews yet</p>
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ExerciseScreen;
