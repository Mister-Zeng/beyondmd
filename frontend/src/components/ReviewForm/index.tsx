import { Typography, Button, Box, TextField, Rating } from "@mui/material";
import React, { FC } from "react";

type ReviewerPropsType = {
  firstName: string;
  lastName: string;
  exercise: string;
  rating: number | null;
  comment: string;
};

const ReviewForm: FC = () => {
  const [reviewer, setReviewer] = React.useState<ReviewerPropsType>({
    firstName: "",
    lastName: "",
    exercise: "",
    rating: 1,
    comment: "",
  });

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: 1,
    },
    textStyle: {
      width: 120,
      color: "#E8EDDF",
    },
    textInput: {
      width: 300,
    },
  };
  return (
    <Box display={"flex"} flexDirection={"column"} width={350} border={1}>
      <Box sx={styles.container}>
        <Typography sx={styles.textStyle}>First Name:</Typography>
        <TextField
          id="firstName"
          variant="outlined"
          size="small"
          sx={styles.textInput}
          onChange={(event) => {
            setReviewer({ ...reviewer, firstName: event.target.value });
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
            setReviewer({ ...reviewer, lastName: event.target.value });
          }}
        />
      </Box>

      <Box sx={styles.container}>
        <Typography sx={styles.textStyle}>Exercise:</Typography>
        <TextField
          id="exercise"
          variant="outlined"
          size="small"
          sx={styles.textInput}
          onChange={(event) => {
            setReviewer({ ...reviewer, exercise: event.target.value });
          }}
        />
      </Box>

      <Box sx={styles.container}>
        <Typography sx={styles.textStyle}>Rating:</Typography>
        <Rating
          name="exercise rating"
          value={reviewer.rating}
          onChange={(event, newValue) => {
            setReviewer({ ...reviewer, rating: newValue });
          }}
        />
      </Box>

      <Box sx={styles.container}>
        <Typography sx={styles.textStyle}>Comment:</Typography>
        <TextField
          id="comment"
          variant="outlined"
          size="medium"
          minRows={6}
          multiline={true}
          sx={styles.textInput}
          onChange={(event) => {
            setReviewer({ ...reviewer, comment: event.target.value });
          }}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#F5CB5C", width: 100, margin: "auto" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewForm;
