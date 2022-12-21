import { Box, Typography, Button } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Select from "react-select";
import { typeList, muscleList, difficultyList } from "../../constant/exercise";
import type { ExerciseSelectPropsType, ExerciseType } from "./MainScreen.type";
import axios, { AxiosResponse } from "axios";
import ExerciseTable from "../../components/ExerciseTable";
import SelectBox from "../../components/SelectBox";

const MainScreen: FC = () => {
  const [exerciseList, setExerciseList] = useState<ExerciseType[]>([]);

  const [filteredExerciseList, setFilteredExerciseList] = useState<
    ExerciseType[]
  >([]);

  const [exerciseSelect, setExerciseSelect] = useState<ExerciseSelectPropsType>(
    {
      name: "",
      exercise_type: "",
      muscle: "",
      difficulty: "",
    }
  );

  const searchFilterHandler: () => void = () => {
    function filterExercises(
      exercises: ExerciseType[],
      filters: ExerciseSelectPropsType
    ) {
      return exercises.filter((exercise: any) => {
        return Object.entries(filters).every(([key, value]) => {
          if (value === "") {
            return true;
          }
          return exercise[key] === value;
        });
      });
    }

    const filteredList: ExerciseType[] = filterExercises(exerciseList, {
      exercise_type: exerciseSelect.exercise_type,
      muscle: exerciseSelect.muscle,
      difficulty: exerciseSelect.difficulty,
    });

    setFilteredExerciseList(filteredList);
  };

  const searchBarHandler: (searchWord: string) => void = (
    searchWord: string
  ) => {
    function filterExercisesByName(exercises: ExerciseType[], name: string) {
      return exercises.filter((exercise) => {
        return exercise.name.toLowerCase().includes(name);
      });
    }

    const filteredList: ExerciseType[] = filterExercisesByName(
      exerciseList,
      searchWord
    );

    setFilteredExerciseList(filteredList);
  };

  const selectBoxHandler: (selectedOption: string, stateKey: string) => void = (
    selectedOption: string,
    stateKey: string
  ) => {
    setExerciseSelect({
      ...exerciseSelect,
      [stateKey]: selectedOption,
    });
  };

  useEffect(() => {
    const getExercises: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse<any, any> = await axios.get("exercises/");

        const data: ExerciseType[] = response.data;

        setExerciseList(data);
        setFilteredExerciseList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getExercises();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#333533",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <SearchBar
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchBarHandler(e.target.value);
        }}
      />

      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        sx={{
          marginBottom: 2,
          "@media only screen and (max-width: 800px)": {
            flexDirection: "column",
          },
        }}
      >
        <SelectBox
          onChange={selectBoxHandler}
          option={typeList}
          title={"Exercise Type"}
          stateKey={"exercise_type"}
        />

        <SelectBox
          onChange={selectBoxHandler}
          option={muscleList}
          title={"Muscle Type"}
          stateKey={"muscle"}
        />

        <SelectBox
          onChange={selectBoxHandler}
          option={difficultyList}
          title={"Difficulty Level"}
          stateKey={"difficulty"}
        />

        <Button
          variant="contained"
          size="small"
          sx={{
            height: 35,
            backgroundColor: "#F5CB5C",
            color: "#333533",
            borderRadius: 5,
            "@media only screen and (max-width: 1200px)": {
              marginBottom: 1,
            },
            "@media only screen and (max-width: 600px)": {
              width: 70,
              height: 25,
              fontSize: 11,
            },
          }}
          onClick={searchFilterHandler}
        >
          Search
        </Button>
      </Box>

      <ExerciseTable exerciseList={filteredExerciseList} />

      <Box sx={{ position: "absolute", bottom: 0 }}>
        <Typography
          sx={{
            color: "white",
          }}
        >
          © 2022 Jason Zeng
        </Typography>
      </Box>
    </Box>
  );
};

export default MainScreen;
