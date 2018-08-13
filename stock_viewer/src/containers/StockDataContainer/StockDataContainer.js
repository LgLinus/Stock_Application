import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
class StockDataContainer extends Component {
  constructor(props) {
    super(props);

    this.availableStocks = [
      {
        name: "NETInsight B",
        currentValue: 3.8,
        currency: "SEK",
        dailyPercentage: "2.32%",
        weeklyPercentage: "-1.2%",
        monthlyPercentage: "50%"
      },
      {
        name: "Paradox Interactive",
        currency: "SEK",
        currentValue: 200,
        dailyPercentage: "-3%",
        weeklyPercentage: "-1.2%",
        monthlyPercentage: "50%"
      }
    ];
  }
  render() {
    // Header (buttons)
    return (
      <div className="stockDataContainer">
        <StockList stocks={this.availableStocks} />
      </div>
    );
  }
}

export default StockDataContainer;
