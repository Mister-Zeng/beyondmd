const styles = {
  header: {
    marginBottom: 2,
    fontWeight: "bold",
    marginLeft: 6,
    "@media only screen and (max-width: 375px)": {
      marginLeft: 4,
    },
  },
  averageRatingText: {},
  averageRating: {
    marginLeft: 6.5,
    marginRight: 2,
  },
  averageHeader: { marginLeft: 7, fontWeight: "bold", marginBottom: 2 },
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
  exerciseImage: {
    marginTop: 4,
    marginLeft: 7,
    maxHeight: { xs: 150, md: 250, lg: 350 },
    "@media only screen and (max-width: 375px)": {
      marginLeft: 4,
    },
  },
  spinner: {
    margin: 0,
    backgroundColor: "#CFDBD5",
    marginLeft: 7,
    width: { xs: 150, md: 250, lg: 350 },
    height: "100%",
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "@media only screen and (max-width: 375px)": {
      marginLeft: 4,
    },
  },
};

export default styles;
