import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar: FC = () => {
  const buttonStyles = { margin: 1, color: "black" };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#F5CB5C",
        }}
      >
        <Toolbar>
          <Typography variant="h4">
            <img width={"70px"} src={logo} alt="logo" />
          </Typography>

          <Box display="flex" marginRight="auto">
            <Button sx={buttonStyles} component={NavLink} to="/">
              Home
            </Button>
          </Box>

          <Box display="flex" marginLeft="auto">
            <Button sx={buttonStyles} component={NavLink} to="/resume">
              View Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;
