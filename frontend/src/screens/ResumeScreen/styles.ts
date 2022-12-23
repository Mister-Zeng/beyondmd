const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  downloadContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
