const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: 2,
    marginRight: 2,
    "@media only screen and (max-width: 500px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    "@media (min-width:375px) and (max-width:450px)": {
      width: "100%",
    },
  },
  textInput: {
    input: {
      width: "100%",
      color: "black",
      fontSize: ".8rem",
      height: 10,
      fontFamily: "arial",
      padding: 1,
      "@media only screen and (max-width:750px)": {
        marginRight: 5,
      },
      "@media only screen and (max-width:600px)": {
        fontSize: ".8rem",
      },
    },
  },
  textLabel: {
    width: 80,
    fontFamily: "serif",
    marginRight: 3,
    "@media only screen and (max-width: 750px)": {
      width: 90,
      marginRight: 1,
    },
    "@media only screen and (max-width:600px)": {
      fontSize: ".8rem",
    },
  },
  commentTextInput: {},
};

export default styles;
