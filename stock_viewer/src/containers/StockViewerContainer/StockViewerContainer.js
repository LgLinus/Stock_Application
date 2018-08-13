import React, { Component } from "react";
import "./StockViewerContainer.css";
import MenuContainer from "../MenuContainer/MenuContainer";
import HeaderContainer from "../HeaderContainer/HeaderCont";
import StockDataContainer from "../StockDataContainer/StockDataContainer";
class StockViewerContainer extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="MainBody" />
        <StockDataContainer />
      </div>
    );
  }
}

export default StockViewerContainer;
