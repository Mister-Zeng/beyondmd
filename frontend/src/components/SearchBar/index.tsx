const SearchBar: ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => JSX.Element = ({ onChange }: { onChange: React.ChangeEventHandler }) => {
  const styles = {
    search: {
      margin: 10,
      width: 180,
      marginBottom: 50,
      padding: 10,
      border: "none",
      borderRadius: 50,
      fontSize: 14,
      alignSelf: "flex-end",
      display: "flex",
    },
  };
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
