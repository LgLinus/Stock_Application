import React, { Component } from "react";
import "./MenuContainer.css";
import MainMenu from "../../components/Menu/Menu";
class StockContainer extends Component {
  constructor(props) {
    super(props);
    this.menu_buttons = [
      { image: "Options", action: this.options },
      { image: "Exit", action: this.exit }
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

  render() {
    return (
      <div className="Menu">
        <MainMenu menuButtons={this.menu_buttons} {...this.props} />
      </div>
    );
  }
}

export default StockContainer;
