const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "@media only screen and (max-width: 950px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  downloadContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 6,
    borderRadius: 10,
    "@media only screen and (max-width: 950px)": {
      marginTop: 0,
    },
  },
  downloadTitle: { color: "#333533", fontFamily: "serif", padding: 2 },
  downloadButton: {
    backgroundColor: "#F5CB5C",
    borderRadius: 5,
    "&:hover": { backgroundColor: "#ffbb00" },
  },
  downloadButtonText: {
    textDecoration: "none",
    color: "white",
    width: 45,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
};

export default styles;
