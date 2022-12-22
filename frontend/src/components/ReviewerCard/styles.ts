const styles = {
  container: {
    marginLeft: 6,
    width: "80%",
    "@media only screen and (max-width: 375px)": {
      marginLeft: 4,
    },
  },
  name: {
    fontSize: "1rem",
    marginLeft: 2,
    fontFamily: "serif",
    "@media only screen and (max-width:600px)": {
      fontSize: ".8rem",
    },
  },
  posted: { color: "gray", fontSize: ".8rem" },
  rating: {
    marginTop: 1,
  },
  comment: {
    fontSize: "1rem",
    fontFamily: "serif",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 4,
    "@media only screen and (max-width:600px)": {
      fontSize: ".8rem",
    },
  },
};

export default styles;
