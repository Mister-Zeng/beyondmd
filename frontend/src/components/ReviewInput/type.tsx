type ReviewerPropsType = {
  first_name: string;
  last_name: string;
  exercise: number;
  rating: number | null;
  comment: string;
};

type ReviewInputPropsType = {
  value: string;
  label: string;
  keyState: string;
  reviewer: ReviewerPropsType;
  onChange: (
    reviewer: ReviewerPropsType,
    keyState: string,
    value: string
  ) => void;
  isComment?: boolean;
};

export type { ReviewInputPropsType, ReviewerPropsType };
