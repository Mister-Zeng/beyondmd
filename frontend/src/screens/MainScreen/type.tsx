type ExerciseSelectPropsType = {
  name?: string;
  exercise_type: string;
  muscle: string;
  difficulty: string;
};

type ExerciseType = {
  id: number;
  name: string;
  exercise_type: string;
  muscle: string;
  difficulty: string;
  description: string;
  instructions: string;
};

export type { ExerciseSelectPropsType, ExerciseType };
