const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media only screen and (max-width: 450px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  filterSelectBox: {
    width: 200,
    margin: "10px",
    height: 35,
    minHeight: 35,
    "@media only screen and (max-width: 1200px)": {
      width: 150,
    },

    "@media only screen and (max-width: 1000px)": {
      width: 100,
    },
    "@media only screen and (max-width: 800px)": {
      width: 200,
    },
  },
  filterSelectText: {
    color: "white",
    width: "120px",
    fontFamily: "serif",
    "@media only screen and (max-width: 600px)": {
      fontSize: ".9rem",
    },
    "@media only screen and (max-width: 450px)": {
      marginLeft: 1.5,
    },
  },
};

export default styles;
