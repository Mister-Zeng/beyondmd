import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { ReviewInputPropsType } from "./type";
import styles from "./styles";

const ReviewInput: ({
  label,
  keyState,
  reviewer,
  onChange,
  value,
  isComment,
}: ReviewInputPropsType) => JSX.Element = ({
  label,
  keyState,
  reviewer,
  onChange,
  value,
  isComment,
}: ReviewInputPropsType) => {
  const [error, setError] = useState(false);

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.textLabel}>{label}</Typography>
      <FormControl error={error}>
        {isComment ? (
          <TextField
            size="small"
            sx={styles.textInput}
            onChange={(event) => {
              onChange(reviewer, keyState, event.target.value);
              setError(event.target.value === "");
            }}
            value={value}
            required
            multiline
            rows={4}
          />
        ) : (
          <TextField
            size="small"
            sx={styles.textInput}
            onChange={(event) => {
              onChange(reviewer, keyState, event.target.value);
              setError(event.target.value === "");
            }}
            value={value}
            required
            multiline
          />
        )}

        {error && <FormHelperText>This field is required</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default ReviewInput;
