import React, { Component } from "react";
import "./HeaderContainer.css";
import { Button } from "@material-ui/core";
import MenuContainer from "../MenuContainer/MenuContainer";
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
      <div className="header">
        <Button
          className="MainMenuButton"
          color="primary"
          variant="contained"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <MenuContainer onClose={this.handleClose} open={this.state.open} />
      </div>
    );
  }
}

export default HeaderContainer;
