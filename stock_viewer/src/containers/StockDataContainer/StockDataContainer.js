import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const axios = require("axios");

class StockDataContainer extends Component {
  constructor(props) {
    super(props);
    //
    let availableStocks = [
      {
        title: "NETInsight B",
        reference: "net-insight-b",
        currency: "SEK",
        value: "3.8",
        dailyPercentage: "2.32%"
      },
      {
        title: "Paradox Interactive",
        reference: "paradox-interactive",
        currency: "SEK",
        value: "200",
        dailyPercentage: "-3%"
      },
      {
        title: "Episurf B",
        reference: "episurf-b",
        currency: "SEK",
        value: "5.44",
        dailyPercentage: "2.64%"
      }
    ];
    let searchStock = [];
    this.state = { searchValue: "", availableStocks, searchStock };

    setTimeout(this.setStockData, 3000);
  }

  handleSearch = searchValue => {
    if (searchValue && searchValue.length >= 3) {
      axios
        .get(`http://127.0.0.1:3001/search?searchText=${searchValue}`)
        .then(({ data }) => {
          let searchStock = data;
          searchStock.reference = data.reference;

          this.setState({ searchValue, searchStock });
        });
    } else {
      this.setState({ searchValue: "", searchStock: [] });
    }
  };
  clickStock = newStock => {
    let availableStocks = [...this.state.availableStocks];
    if (
      availableStocks.every(stock => stock.reference !== newStock.reference)
    ) {
      availableStocks.push(newStock);
      this.setState({ availableStocks, searchStock: [] });
    }
  };
  setStockData = () => {
    let stocks = [...this.state.availableStocks];

    const keyList = stocks.map(stock => stock.reference);
    axios
      .post(`http://127.0.0.1:3001/getMetaDatas`, { references: keyList })
      .then(({ data }) => {
        let stockMap = {};
        console.log(data);
        data.forEach(element => {
          let id = element.reference;
          stockMap[id] = { ...element };
        });
        stocks.forEach(stock => {
          let id = stock.reference;
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
        <SearchComponent
          list={this.state.searchStock}
          handleSearch={this.handleSearch}
          handleClick={this.clickStock}
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
