import React, { Component } from "react";
import "./HeaderContainer.css";
import { Button, IconButton, MenuItem } from "@material-ui/core";
import MenuContainer from "../MenuContainer/MenuContainer";
class HeaderContainer extends Component {
  state = {
    anchorEl: null
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    return (
      <div className="header">
        <Button
          className="MainMenuButton"
          color="primary"
          variant="contained"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <MenuContainer
          onClose={this.handleClose}
          anchorEl={this.state.anchorEl}
        />
      </div>
    );
  }
}

export default HeaderContainer;
