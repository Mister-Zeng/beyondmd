type SelectBoxPropsType = {
  onChange: (select: string, stateKey: string) => void;
  option: { value: string }[];
  title: string;
  stateKey: string;
};

export type { SelectBoxPropsType };
