import React from "react";
import "./MainMenu.css";
import { Drawer } from "@material-ui/core";
class MainDrawer extends React.Component {
  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.onClose}>
        {this.props.children}{" "}
      </Drawer>
    );
  }
}
export default MainDrawer;
