type Column = {
  id: "name" | "exercise_type" | "muscle" | "difficulty" | "instructions";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
};

type ExerciseType = {
  id: number;
  name: string;
  exercise_type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
};

export type { Column, ExerciseType };
