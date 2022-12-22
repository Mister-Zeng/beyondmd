const styles = {
  exerciseContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 2,
  },
  exerciseInnerContainer: {
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 375px)": {
      flexDirection: "column",
    },
  },
  exerciseTitleContainer: {
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    width: "80",
    "@media only screen and (max-width: 375px)": {
      padding: 2,
      paddingBottom: 0,
    },
  },
  exerciseTitleOuterContainer: {
    displays: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  exerciseKeyText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginRight: 6,
    fontFamily: "serif",
    color: "black",
    "@media only screen and (max-width: 600px)": {
      fontSize: ".8rem",
      marginRight: 0,
    },
  },
  exerciseValueText: {
    fontSize: "1.1rem",
    fontFamily: "serif",
    color: "#333533",
    "@media only screen and (max-width: 600px)": {
      fontSize: 12,
    },
  },
  lineBreak: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 50,
    border: "none",
  },
};

export default styles;
