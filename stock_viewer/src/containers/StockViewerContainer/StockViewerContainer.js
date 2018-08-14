import React, { Component } from "react";
import "./StockViewerContainer.css";
import HeaderContainer from "../HeaderContainer/HeaderCont";
import StockDataContainer from "../StockDataContainer/StockDataContainer";
class StockViewerContainer extends Component {
  state = {
    currentStock: "None"
  };

  handleStock = name => {
    if (name === this.state.currentStock) {
      return;
    }
    this.setState({ currentStock: name });
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="MainBody" />
        <StockDataContainer handleStock={this.handleStock} />
        <p>{this.state.currentStock}</p>
      </div>
    );
  }
}

export default StockViewerContainer;
