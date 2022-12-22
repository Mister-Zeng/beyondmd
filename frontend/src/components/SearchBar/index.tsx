import styles from "./styles";

const SearchBar: ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => JSX.Element = ({ onChange }: { onChange: React.ChangeEventHandler }) => {
  return (
    <input
      style={styles.search}
      type="text"
      onChange={onChange}
      placeholder="Search by exercise name"
    />
  );
};

export default SearchBar;
