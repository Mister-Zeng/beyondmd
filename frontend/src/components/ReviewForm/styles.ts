const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 7,
    paddingTop: 0,
    "@media only screen and (max-width: 1160px)": {
      flexDirection: "column",
    },
    "@media only screen and (max-width: 375px)": {
      paddingLeft: 4,
    },
  },
  reviewerNameContainer: {
    "@media only screen and (max-width: 750px)": {
      display: "flex",
      flexDirection: "row",
    },
  },
  heading: {
    marginBottom: 2,
    fontWeight: "bold",
    "@media only screen and (max-width: 500px)": {},
  },
  submitButton: {
    backgroundColor: "#F5CB5C",
    fontSize: ".8rem",
    color: "#333533",
    ":hover": {
      backgroundColor: "#F5CB5C",
    },
    "@media only screen and (max-width: 750px)": {
      fontSize: ".6rem",
    },
  },
  ratingTitle: {
    fontFamily: "serif",
    marginRight: 6,
    "@media only screen and (max-width:600px)": {
      fontSize: ".8rem",
    },
  },
};

export default styles;
