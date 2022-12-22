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
      color: "black",
      fontSize: "1rem",
      height: 10,
      fontFamily: "arial",
      "@media only screen and (max-width:750px)": {
        marginRight: 5,
      },
      "@media only screen and (max-width:600px)": {
        fontSize: ".8rem",
      },
    },
  },
  textLabel: {
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
};

export default styles;
