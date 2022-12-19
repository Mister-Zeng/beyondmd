import { Box, Typography, Button } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import ExerciseCardTitle from "../../components/ExerciseCardTitle";
import SearchBar from "../../components/SearchBar";
import Select from "react-select";
import { typeList, muscleList, difficultyList } from "../../constant/exercise";
import type { ExerciseSelectPropsType, ExerciseType } from "./MainScreen.type";
import axios, { AxiosResponse } from "axios";

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

  const styles = {
    filterSelectBox: {
      width: 200,
      margin: "10px",
      "@media only screen and (max-width: 1200px)": {
        width: 100,
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
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography sx={styles.filterSelectText}>Exercise Type</Typography>
          <Select
            options={typeList}
            styles={{
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
            onChange={(selectedOption) => {
              setExerciseSelect({
                ...exerciseSelect,
                exercise_type: selectedOption!.value,
              });
            }}
          />
        </Box>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography sx={styles.filterSelectText}>Muscle Type</Typography>
          <Select
            options={muscleList}
            styles={{
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
            onChange={(selectedOption) => {
              setExerciseSelect({
                ...exerciseSelect,
                muscle: selectedOption!.value,
              });
            }}
          />
        </Box>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography sx={styles.filterSelectText}>Difficulty Level</Typography>
          <Select
            options={difficultyList}
            styles={{
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

      <Box sx={{ minHeight: "100vh", marginBottom: 5 }}>
        <ExerciseCardTitle />

        {filteredExerciseList.map((exercise, index) => {
          return (
            <ExerciseCard
              key={index}
              id={exercise.id}
              exerciseName={exercise.name}
              exerciseType={exercise.exercise_type}
              muscleType={exercise.muscle}
              difficultyLevel={exercise.difficulty}
              instructions={exercise.instructions}
            />
          );
        })}
      </Box>

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
