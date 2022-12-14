import { Box, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import ExerciseCardTitle from "../../components/ExerciseCardTitle";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import Select from "react-select";
import { typeList, muscleList, difficultyList } from "../../constant/exercise";
import type { ExerciseSelectPropsType } from "../../types/exerciseSelect";

const MainScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const [exerciseSelect, setExerciseSelect] = useState<ExerciseSelectPropsType>(
    {
      name: "",
      type: "",
      muscle: "",
      difficulty: "",
    }
  );

  return (
    <Box
      sx={{
        backgroundColor: "#333533",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBar
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />

      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography>Exercise Type</Typography>
          <Select
            options={typeList}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: 200,
                margin: "10px",
              }),
            }}
            onChange={(selectedOption) => {
              setExerciseSelect({
                ...exerciseSelect,
                type: selectedOption!.value,
              });
            }}
          />
        </Box>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography>Muscle Type</Typography>
          <Select
            options={muscleList}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: 200,
                margin: "10px",
              }),
            }}
            onChange={(selectedOption) => {
              setExerciseSelect({
                ...exerciseSelect,
                muscle: selectedOption!.value,
              });
            }}
          />
        </Box>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography>Difficulty Level</Typography>
          <Select
            options={difficultyList}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: 200,
                margin: "10px",
              }),
            }}
            onChange={(selectedOption) => {
              setExerciseSelect({
                ...exerciseSelect,
                difficulty: selectedOption!.value,
              });
            }}
          />
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{ height: 35, backgroundColor: "#F5CB5C" }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ width: "100%" }}>
        <ExerciseCardTitle />

        <ExerciseCard
          exerciseName="Push Up"
          exerciseType="Strength"
          muscleType="Biceps"
          difficultyLevel="Easy"
          instructions="Bice psBice psBicep sBiceps BicepsB icepsBicep sBicepsBicepsBicepsBicepsBicepsBicepsBicepsBicepsBiceps"
        />
      </Box>

      <Box sx={{ position: "absolute", bottom: 0 }}>
        <Typography sx={{ color: "white" }}>© 2022 Jason Zeng</Typography>
      </Box>
    </Box>
  );
};

export default MainScreen;
