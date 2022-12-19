const typeList: { value: string; label: string }[] = [
  { value: "", label: "Select" },
  { value: "cardio", label: "Cardio" },
  { value: "olympic_Weightlifting", label: "Olympic Weightlifting" },
  { value: "plyometrics", label: "Plyometrics" },
  { value: "powerlifting", label: "Powerlifting" },
  { value: "strength", label: "Strength" },
  { value: "stretching", label: "Stretching" },
  { value: "strongman", label: "Strongman" },
];

const muscleList: { value: string; label: string }[] = [
  { value: "", label: "Select" },
  { value: "abdominals", label: "Abdominals" },
  { value: "abductors", label: "Abductors" },
  { value: "biceps", label: "Biceps" },
  { value: "calves", label: "Calves" },
  { value: "chest", label: "Chest" },
  { value: "forearms", label: "Forearms" },
  { value: "glutes", label: "Glutes" },
  { value: "hamstrings", label: "Hamstrings" },
  { value: "lower_back", label: "Lower Back" },
  { value: "middle_back", label: "Middle Back" },
  { value: "neck", label: "Neck" },
  { value: "quadriceps", label: "Quadriceps" },
  { value: "traps", label: "Traps" },
  { value: "triceps", label: "Triceps" },
];

const difficultyList: { value: string; label: string }[] = [
  { value: "", label: "Select" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

export { typeList, muscleList, difficultyList };
