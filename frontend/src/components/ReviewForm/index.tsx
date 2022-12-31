import { Typography, Button, Box, Rating } from "@mui/material";
import React from "react";
import type { ReviewerPropsType } from "./type";
import axios, { AxiosResponse } from "axios";
import ReviewInput from "../ReviewInput";
import styles from "./styles";
import { ExerciseReviewsTypes } from "../../screens/ExerciseScreen/type";

const ReviewForm: ({
  exerciseId,
  addReviewOnSubmit,
}: {
  exerciseId: number;
  addReviewOnSubmit: (review: ExerciseReviewsTypes, isSuccess: boolean) => void;
}) => JSX.Element = ({
  exerciseId,
  addReviewOnSubmit,
}: {
  exerciseId: number;
  addReviewOnSubmit: (review: ExerciseReviewsTypes, isSuccess: boolean) => void;
}) => {
  const [reviewer, setReviewer] = React.useState<ReviewerPropsType>({
    first_name: "",
    last_name: "",
    exercise: exerciseId,
    rating: 5,
    comment: "",
  });

  // Function to call the API to submit the review
  const reviewSubmit: () => Promise<void> = async () => {
    try {
      const response: AxiosResponse<any, any> = await axios.post(
        "/review/",
        reviewer
      );
      if (response.status === 201) addReviewOnSubmit(response.data, true);
    } catch (error) {
      console.error(error);
    } finally {
      setReviewer({
        first_name: "",
        last_name: "",
        exercise: exerciseId,
        rating: 5,
        comment: "",
      });
    }
  };

  // Function that is passed to the ReviewInput component as prop to extract data from child to parent component
  const reviewInputOnChangeHandler: (
    reviewer: ReviewerPropsType,
    keyState: string,
    value: string
  ) => void = (
    reviewer: ReviewerPropsType,
    keyState: string,
    value: string
  ) => {
    setReviewer({ ...reviewer, [keyState]: value });
  };

  return (
    <form>
      <Box sx={styles.container}>
        <Box>
          <Typography sx={styles.heading}>Exercise Review</Typography>

          <Box sx={styles.reviewerNameContainer}>
            <ReviewInput
              label={"First Name"}
              keyState={"first_name"}
              reviewer={reviewer}
              onChange={reviewInputOnChangeHandler}
              value={reviewer.first_name}
            />
            <ReviewInput
              label={"Last Name"}
              keyState={"last_name"}
              reviewer={reviewer}
              onChange={reviewInputOnChangeHandler}
              value={reviewer.last_name}
            />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            width={"100%"}
            marginBottom={2}
            sx={{
              "@media only screen and (max-width: 500px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <Typography sx={styles.ratingTitle}>Rating:</Typography>
            <Rating
              name="exercise rating"
              value={reviewer.rating}
              onChange={(event, newValue) => {
                setReviewer({ ...reviewer, rating: newValue });
              }}
              precision={0.5}
              size="small"
            />
          </Box>

          <ReviewInput
            label={"Comment"}
            keyState={"comment"}
            reviewer={reviewer}
            onChange={reviewInputOnChangeHandler}
            value={reviewer.comment}
            isComment={true}
          />

          <Button
            size="small"
            variant="contained"
            sx={styles.submitButton}
            onClick={reviewSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ReviewForm;
