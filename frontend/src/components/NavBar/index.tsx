import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./styles";

const NavBar: FC = () => {
  return (
    <React.Fragment>
      <AppBar sx={styles.appBar}>
        <Toolbar>
          <Button sx={styles.button} component={NavLink} to="/">
            <img width={"100px"} src={logo} alt="logo" />
          </Button>

          <Box display="flex" marginLeft="auto">
            <Button sx={styles.button} component={NavLink} to="/">
              <HomeIcon />
              <Typography fontSize={".6rem"}>Home</Typography>
            </Button>
            <Button sx={styles.button} component={NavLink} to="/resume">
              <ArticleIcon />
              <Typography fontSize={".6rem"}>Resume</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;
