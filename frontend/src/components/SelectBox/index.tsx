import { Box, Typography } from "@mui/material";
import React from "react";
import Select from "react-select";
import type { SelectBoxPropsType } from "./SelectBox.type";

const styles = {
  filterSelectBox: {
    width: 200,
    margin: "10px",

    "@media only screen and (max-width: 1200px)": {
      width: 100,
    },
    "@media only screen and (max-width: 800px)": {
      width: 200,
    },
    "@media only screen and (max-width: 600px)": {
      height: 35,
      minHeight: 35,
    },
  },
  filterSelectText: {
    color: "white",
    width: "120px",
    "@media only screen and (max-width: 600px)": {
      fontSize: 14,
    },
  },
};

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
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
      <Typography sx={styles.filterSelectText}>{title}</Typography>
      <Select
        options={option}
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          control: (baseStyles) => ({
            ...baseStyles,
            ...styles.filterSelectBox,
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            "@media only screen and (max-width: 600px)": {
              fontSize: 14,
            },
          }),
        }}
        onChange={(selectedOption) => onChange(selectedOption!.value, stateKey)}
      />
    </Box>
  );
};

export default SelectBox;
