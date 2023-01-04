type ExerciseReviewsTypes = {
  id: number;
  first_name: string;
  last_name: string;
  rating: number;
  comment: string;
  posted: string;
};

type ExerciseType = {
  id: number;
  name: string;
  exercise_type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
};

export type { ExerciseReviewsTypes, ExerciseType };
