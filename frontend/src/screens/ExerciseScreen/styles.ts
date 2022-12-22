const styles = {
  header: {
    marginBottom: 2,
    fontWeight: "bold",
    marginLeft: 6,
    "@media only screen and (max-width: 375px)": {
      marginLeft: 4,
    },
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width:750px)": {
      flexDirection: "column",
    },
  },
  reviewList: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    backgroundColor: "#CFDBD5",
    "@media only screen and (max-width:750px)": {
      width: "100%",
    },
    "@media only screen and (max-width: 375px)": {
      margin: 0,
    },
  },
};

export default styles;
