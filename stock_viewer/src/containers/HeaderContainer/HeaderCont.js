import React, { Component } from "react";
import "./HeaderContainer.css";
import { Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuContainer from "../MenuContainer/MenuContainer";
import MenuIcon from "@material-ui/icons/Menu";
class HeaderContainer extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = event => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="Menu"
              className="MainMenuButton"
              variant="contained"
              onClick={this.handleClick}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            Menu
          </Toolbar>
        </AppBar>
        <MenuContainer onClose={this.handleClose} open={this.state.open} />
      </div>
      /*
      <div className="header">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              className="MainMenuButton"
              color="inherit"
              variant="contained"
              onClick={this.handleClick}
              aria-label="Menu"
            />
            <MenuContainer onClose={this.handleClose} open={this.state.open} />
          </Toolbar>
        </AppBar>
      </div>*/
    );
  }
}

export default HeaderContainer;
