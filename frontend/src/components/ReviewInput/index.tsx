import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { ReviewInputPropsType } from "./type";
import styles from "./styles";

const ReviewInput: ({
  label,
  keyState,
  reviewer,
  onChange,
  value,
}: ReviewInputPropsType) => JSX.Element = ({
  label,
  keyState,
  reviewer,
  onChange,
  value,
}: ReviewInputPropsType) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.textLabel}>{label}</Typography>
      <TextField
        size="small"
        sx={styles.textInput}
        onChange={(event) => {
          onChange(reviewer, keyState, event.target.value);
        }}
        value={value}
      />
    </Box>
  );
};

export default ReviewInput;
