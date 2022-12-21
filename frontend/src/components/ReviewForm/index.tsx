import { Typography, Button, Box, Rating } from "@mui/material";
import React from "react";
import type { ReviewerPropsType } from "./ReviewForm.type";
import axios, { AxiosResponse } from "axios";
import ReviewInput from "../ReviewInput";

const ReviewForm: ({ exerciseId }: { exerciseId: number }) => JSX.Element = ({
  exerciseId,
}: {
  exerciseId: number;
}) => {
  const [reviewer, setReviewer] = React.useState<ReviewerPropsType>({
    first_name: "",
    last_name: "",
    exercise: exerciseId,
    rating: 5,
    comment: "",
  });

  const reviewSubmit: () => Promise<void> = async () => {
    try {
      const response: AxiosResponse<any, any> = await axios.post(
        "reviewers/",
        reviewer
      );
      if (response.status === 201) {
        console.log("success");
        setReviewer({
          first_name: "",
          last_name: "",
          exercise: exerciseId,
          rating: 5,
          comment: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          "@media only screen and (max-width: 1160px)": {
            flexDirection: "column",
          },
          "@media only screen and (max-width: 700px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <ReviewInput
            label={"First Name"}
            keyState={"first_name"}
            reviewer={reviewer}
            onChange={reviewInputOnChangeHandler}
          />
          <ReviewInput
            label={"Last Name"}
            keyState={"last_name"}
            reviewer={reviewer}
            onChange={reviewInputOnChangeHandler}
          />
          <ReviewInput
            label={"Comment"}
            keyState={"comment"}
            reviewer={reviewer}
            onChange={reviewInputOnChangeHandler}
          />
        </Box>

        <Box display={"flex"} flexDirection={"row"}>
          <Box display={"flex"} flexDirection={"row"} sx={{ padding: 0 }}>
            <Typography component="legend" sx={{ fontFamily: "Georgia" }}>
              Rating:
            </Typography>
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

          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#F5CB5C",
              fontSize: 10,
              color: "#333533",
              marginLeft: 4,
              ":hover": {
                backgroundColor: "#F5CB5C",
                border: "1px solid black",
              },
            }}
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
