import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
import { TextField } from "@material-ui/core";
const axios = require("axios");

class StockDataContainer extends Component {
  constructor(props) {
    super(props);
    //
    let availableStocks = [
      {
        name: "NETInsight B",
        key: "net-insight-b",
        currency: "SEK",
        currentValue: "3.8",
        dailyPercentage: "2.32%"
      },
      {
        name: "Paradox Interactive",
        key: "paradox-interactive",
        currency: "SEK",
        currentValue: "200",
        dailyPercentage: "-3%"
      },
      {
        name: "Episurf B",
        key: "episurf-b",
        currency: "SEK",
        currentValue: "5.44",
        dailyPercentage: "2.64%"
      }
    ];
    this.state = { searchValue: "", availableStocks };

    setTimeout(this.setStockData, 3000);
  }

  handleSearch = e => {
    let searchValue = e.target.value;
    this.setState({ searchValue });
    if (searchValue && searchValue.length >= 3) {
      axios
        .get(`http://127.0.0.1:3001/search?searchText=${searchValue}`)
        .then(({ data }) => {
          console.log({ data });
          if (data.length === 1) {
            alert(JSON.stringify(data));
          }
        });
    }
  };

  setStockData = () => {
    console.log("stockdata");
    let stocks = [...this.state.availableStocks];

    const keyList = stocks.map(stock => stock.key);
    axios
      .post(`http://127.0.0.1:3001/getMetaDatas`, { keys: keyList })
      .then(({ data }) => {
        let stockMap = {};
        data.forEach(element => {
          let id = element.ref;
          stockMap[id] = { ...element };
        });
        stocks.forEach(stock => {
          let id = stock.key;
          stock.currentValue = stockMap[id].value;
        });
        this.setState({ availableStocks: stocks });
      });

    setTimeout(this.setStockData, 1000 * 60 * 2);
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
          stockDetailsHandler={this.props.stockDetailsHandler}
          stocks={this.state.availableStocks}
        />
      </div>
    );
  }
}

export default StockDataContainer;
