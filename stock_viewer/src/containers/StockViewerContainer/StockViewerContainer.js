import React, { Component } from "react";
import "./StockViewerContainer.css";
import HeaderContainer from "../HeaderContainer/HeaderCont";
import StockDataContainer from "../StockDataContainer/StockDataContainer";
class StockViewerContainer extends Component {
  state = {
    currentStock: "None"
  };

  stockDetailsHandler = name => {
    console.log("Called stock", name);
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
        <StockDataContainer stockDetailsHandler={this.stockDetailsHandler} />
        <div>{this.state.currentStock}</div>
      </div>
    );
  }
}

export default StockViewerContainer;
