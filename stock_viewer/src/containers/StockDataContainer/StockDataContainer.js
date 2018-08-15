import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
import StockItem from "../../components/StockItem/StockItem";
class StockDataContainer extends Component {
  constructor(props) {
    super(props);

    console.log({ props });
    this.availableStocks = [
      <StockItem
        name="NETInsight B"
        currency="SEK"
        currentValue="3.8"
        dailyPercentage="2.32%"
      />,
      <StockItem
        name="Paradox Interactive"
        currency="SEK"
        currentValue="200"
        dailyPercentage="-3%"
      />,
      <StockItem
        name="Episurf B"
        currency="SEK"
        currentValue="5.44"
        dailyPercentage="2.64%"
      />
    ];
  }
  render() {
    // Header (buttons)
    return (
      <div className="stockDataContainer">
        <StockList
          showStockDetails={this.props.handleStock}
          stocks={this.availableStocks}
        />
      </div>
    );
  }
}

export default StockDataContainer;
