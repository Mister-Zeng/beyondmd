import styles from "./styles.module.css";

const SearchBar: ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => JSX.Element = ({ onChange }: { onChange: React.ChangeEventHandler }) => {
  return (
    <input
      className={styles.search}
      type="text"
      onChange={onChange}
      placeholder="Search by exercise name"
    />
  );
};

export default SearchBar;
