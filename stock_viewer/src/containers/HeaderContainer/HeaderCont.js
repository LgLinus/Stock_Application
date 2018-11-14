import React, {Component} from 'react';
import './HeaderContainer.css';
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuContainer from '../MenuContainer/MenuContainer';
import MenuIcon from '@material-ui/icons/Menu';
class HeaderContainer extends Component {
  state = {
    open: false,
  };

  handleClose = newMenu => {
    this.setState({open: false});
    if (newMenu) {
      this.props.handleChangeMenu(newMenu);
    }
  };

  handleClick = event => {
    this.setState({open: true});
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
              onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            Menu
          </Toolbar>
        </AppBar>
        <MenuContainer onClose={this.handleClose} open={this.state.open} />
      </div>
    );
  }
}

export default HeaderContainer;
