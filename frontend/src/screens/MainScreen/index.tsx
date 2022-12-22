import { Box, Typography, Button } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { typeList, muscleList, difficultyList } from "../../constant/exercise";
import type { ExerciseSelectPropsType, ExerciseType } from "./type";
import axios, { AxiosResponse } from "axios";
import ExerciseTable from "../../components/ExerciseTable";
import SelectBox from "../../components/SelectBox";
import styles from "./styles";
import SearchIcon from "@mui/icons-material/Search";

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

  // Function that filters the exercise list based on the selected filters
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

  // Function that filters the exercise list based on the search bar input
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

  // Function that is passed to the SelectBox component as prop to extract data from child to parent component
  const selectBoxHandler: (selectedOption: string, stateKey: string) => void = (
    selectedOption: string,
    stateKey: string
  ) => {
    setExerciseSelect({
      ...exerciseSelect,
      [stateKey]: selectedOption,
    });
  };

  // Function that calls the API to get the list of exercises on load
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
    <Box sx={styles.mainContainer}>
      <SearchBar
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchBarHandler(e.target.value);
        }}
      />

      <Box sx={styles.selectBoxContainer}>
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

        <Button sx={styles.searchButton} onClick={searchFilterHandler}>
          <SearchIcon />
        </Button>
      </Box>

      <ExerciseTable exerciseList={filteredExerciseList} />

      <Box sx={styles.footer}>
        <Typography color="white">© 2022 Jason Zeng</Typography>
      </Box>
    </Box>
  );
};

export default MainScreen;
