import { Box, TextField } from "@mui/material";
import React from "react";
import { ReviewerPropsType } from "../ReviewForm/ReviewForm.type";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 200,
  },
  textInput: {
    width: "80%",
    input: {
      color: "black",
      fontSize: 16,
      "@media only screen and (max-width:600px)": {
        fontSize: 12,
      },
    },
  },
};

const ReviewInput = ({
  label,
  keyState,
  reviewer,
  onChange,
}: {
  label: string;
  keyState: string;
  reviewer: ReviewerPropsType;
  onChange: (
    reviewer: ReviewerPropsType,
    keyState: string,
    value: string
  ) => void;
}) => {
  return (
    <Box sx={styles.container}>
      <TextField
        variant="standard"
        label={label}
        color="warning"
        size="small"
        sx={styles.textInput}
        onChange={(event) => {
          onChange(reviewer, keyState, event.target.value);
        }}
      />
    </Box>
  );
};

export default ReviewInput;
