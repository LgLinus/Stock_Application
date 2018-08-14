import React, { Component } from "react";
import "./MenuContainer.css";
import MainDrawer from "../../components/MainDrawer/MainDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
class StockContainer extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      <ListItem button onClick={this.options}>
        <ListItemText primary="Options" />
      </ListItem>,
      <ListItem button onClick={this.calendar}>
        <ListItemText primary="Calendar" />
      </ListItem>,
      <ListItem button onClick={this.exit}>
        <ListItemText primary="Exit" />
      </ListItem>
    ];
  }

  options = () => {
    console.log("Options");
    this.props.onClose();
  };

  exit = () => {
    console.log("Exit");
    this.props.onClose();
  };

  calendar = () => {
    console.log("Calendar");
    this.props.onClose();
  };

  render() {
    return (
      <div className="Menu">
        <MainDrawer {...this.props}>{this.buttons}</MainDrawer>
      </div>
    );
  }
}

export default StockContainer;
