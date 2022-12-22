import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import { ReviewCardPropsType } from "./type";
import styles from "./styles";

const ReviewerCard = ({
  rating,
  firstName,
  lastName,
  posted,
  comment,
}: ReviewCardPropsType) => {
  // Uppercase first letter
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  const reviewerName: string = firstName + " " + lastName;

  function stringToColor(string: string) {
    let hash: number = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar() {
    return {
      sx: {
        bgcolor: stringToColor(reviewerName),
        width: 30,
        height: 30,
        fontSize: ".8rem",
      },
      children: `${reviewerName.split(" ")[0][0]}${
        reviewerName.split(" ")[1][0]
      }`,
    };
  }

  return (
    <Box sx={styles.container}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Avatar {...stringAvatar()} />
        <Typography sx={styles.name}>
          {firstName} {lastName}
        </Typography>
      </Box>

      <Rating
        name="exercise rating"
        readOnly
        value={rating}
        precision={0.5}
        size="small"
        sx={styles.rating}
      />

      <Typography sx={styles.posted}>
        Reviewed on {posted.slice(0, 10)}
      </Typography>

      <Typography sx={styles.comment}>{comment}</Typography>
    </Box>
  );
};

export default ReviewerCard;
