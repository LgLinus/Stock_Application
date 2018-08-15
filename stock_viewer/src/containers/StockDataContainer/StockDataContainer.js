import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
import StockItem from "../../components/StockItem/StockItem";
import { TextField } from "@material-ui/core";
const axios = require("axios");

class StockDataContainer extends Component {
  constructor(props) {
    super(props);
    //

    this.state = { searchValue: "" };
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

  handleSearch = e => {
    let searchValue = e.target.value;
    this.setState({ searchValue });
    if (searchValue && searchValue.length >= 3) {
      axios
        .get(`http://127.0.0.1:3001/?searchText=${searchValue}`)
        .then(({ data }) => {
          console.log({ data });
          if (data.length == 1) {
            alert(JSON.stringify(data));
          }
        });
    }
    console.log(searchValue);
  };

  render() {
    // Header (buttons)
    return (
      <div className="stockDataContainer">
        <TextField
          id="search"
          label="Search stock"
          type="search"
          margin="normal"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <StockList
          showStockDetails={this.props.handleStock}
          stocks={this.availableStocks}
        />
      </div>
    );
  }
}

export default StockDataContainer;
