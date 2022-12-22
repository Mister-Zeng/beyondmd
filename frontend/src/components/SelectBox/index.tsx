import { Box, Typography } from "@mui/material";
import React from "react";
import Select from "react-select";
import type { SelectBoxPropsType } from "./type";
import styles from "./styles";

const SelectBox: ({
  onChange,
  option,
  title,
  stateKey,
}: SelectBoxPropsType) => JSX.Element = ({
  onChange,
  option,
  title,
  stateKey,
}: SelectBoxPropsType) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      sx={styles.container}
    >
      <Typography sx={styles.filterSelectText}>{title}</Typography>
      <Select
        options={option}
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (baseStyles) => ({ ...baseStyles, zIndex: 9999 }),
          control: (baseStyles) => ({
            ...baseStyles,
            ...styles.filterSelectBox,
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            fontSize: "1rem",
            "@media only screen and (max-width: 600px)": {
              fontSize: ".9rem",
            },
          }),
        }}
        onChange={(selectedOption) => onChange(selectedOption!.value, stateKey)}
      />
    </Box>
  );
};

export default SelectBox;
