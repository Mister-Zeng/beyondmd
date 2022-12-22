const styles = {
  mainContainer: {
    backgroundColor: "#333533",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  selectBoxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    "@media only screen and (max-width: 800px)": {
      flexDirection: "column",
    },
  },
  searchButton: {
    "&:hover": { backgroundColor: "#F5CB5C", color: "white" },
    height: 10,
    padding: 2,
    backgroundColor: "#F5CB5C",
    color: "black",
    borderRadius: 5,
    fontSize: ".8rem",
    "@media only screen and (max-width: 1200px)": {
      marginBottom: 1,
    },
    "@media only screen and (max-width: 600px)": {
      width: 70,
      height: 25,
      fontSize: ".8rem",
    },
  },
  footer: {
    position: "absolute",
    bottom: 0,
    color: "white",
    flexDirection: "row",
    margin: 2,
  },
};

export default styles;
