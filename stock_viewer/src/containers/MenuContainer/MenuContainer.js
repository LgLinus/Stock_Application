import React, { Component } from "react";
import "./MenuContainer.css";
import MainMenu from "../../components/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem";
class StockContainer extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      <MenuItem color="primary" onClick={this.options}>
        Options
      </MenuItem>,
      <MenuItem color="primary" onClick={this.calendar}>
        Calendar
      </MenuItem>,
      <MenuItem color="primary" onClick={this.exit}>
        Exit
      </MenuItem>
    ];
  }

  options = () => {
    alert("Options");
    this.props.onClose();
  };

  exit = () => {
    alert("Exit");
    this.props.onClose();
  };

  calendar = () => {
    alert("Calendar");
    this.props.onClose();
  };

  render() {
    return (
      <div className="Menu">
        <MainMenu {...this.props}>{this.buttons}</MainMenu>
      </div>
    );
  }
}

export default StockContainer;
