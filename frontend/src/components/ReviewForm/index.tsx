import { Typography, Button, Box, TextField, Rating } from "@mui/material";
import React, { FC } from "react";
import type { ReviewerPropsType } from "./ReviewForm.type";
import axios, { AxiosResponse } from "axios";

const ReviewForm: ({ exerciseId }: { exerciseId: number }) => JSX.Element = ({
  exerciseId,
}: {
  exerciseId: number;
}) => {
  const [reviewer, setReviewer] = React.useState<ReviewerPropsType>({
    first_name: "",
    last_name: "",
    exercise: exerciseId,
    rating: 1,
    comment: "",
  });

  const reviewSubmit: () => Promise<void> = async () => {
    try {
      const response: AxiosResponse<any, any> = await axios.post("reviewer/");
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: 3,
      paddingTop: 2,
    },
    textStyle: {
      fontSize: 16,
      width: 100,
      color: "#E8EDDF",
      "@media only screen and (max-width:600px)": {
        fontSize: 12,
      },
    },
    textInput: {
      width: "60%",
      input: { color: "#E8EDDF" },
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={2}
      sx={{
        width: "50%",
        backgroundColor: "#333533",
        "@media only screen and (max-width: 760px)": {
          width: "100%",
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{
          "@media only screen and (max-width: 1500px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={styles.container}>
          <Typography sx={styles.textStyle}>First Name:</Typography>
          <TextField
            id="firstName"
            variant="outlined"
            size="small"
            sx={styles.textInput}
            onChange={(event) => {
              setReviewer({ ...reviewer, first_name: event.target.value });
            }}
          />
        </Box>

        <Box sx={styles.container}>
          <Typography sx={styles.textStyle}>Last Name:</Typography>
          <TextField
            id="lastName"
            variant="outlined"
            size="small"
            sx={styles.textInput}
            onChange={(event) => {
              setReviewer({ ...reviewer, last_name: event.target.value });
            }}
          />
        </Box>
      </Box>

      <Box sx={styles.container}>
        <Typography sx={[styles.textStyle]}>Rating:</Typography>
        <Rating
          name="exercise rating"
          value={reviewer.rating}
          onChange={(event, newValue) => {
            setReviewer({ ...reviewer, rating: newValue });
          }}
        />
      </Box>
      {/* </Box> */}

      <Box sx={styles.container}>
        <Typography sx={styles.textStyle}>Comment:</Typography>
        <TextField
          id="comment"
          variant="outlined"
          size="medium"
          minRows={3}
          multiline={true}
          sx={styles.textInput}
          onChange={(event) => {
            setReviewer({ ...reviewer, comment: event.target.value });
          }}
        />
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F5CB5C",
            width: 100,
            padding: 0,
            color: "#333533",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewForm;
