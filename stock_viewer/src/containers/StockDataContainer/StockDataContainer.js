import React, { Component } from "react";
import "./StockDataContainer.css";
import StockList from "../../components/StockList/StockList";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import api from "../../api/api";

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
  }

  async componentDidMount() {
    let stocks = await api.getStocks();
    console.log("FETCHED STOCKS", stocks);
    if (!stocks) {
      return;
    }

    this.setState({ availableStocks: stocks });
  }
  handleSearch = async searchValue => {
    if (searchValue && searchValue.length >= 3) {
      let searchStock = await api.getStockSearch(searchValue);
      this.setState({ searchValue, searchStock });
    } else {
      this.setState({ searchValue: "", searchStock: [] });
    }
  };
  clickStock = async newStock => {
    await api.saveStock(newStock.reference);
    let availableStocks = await api.getStocks();
    this.setState({ availableStocks, searchStock: [] });
  };
  stockRemoveHandler = async reference => {
    console.log(reference);
    await api.deleteStock(reference);
    let availableStocks = await api.getStocks();
    if (!availableStocks) {
      availableStocks = [];
    }
    //let availableStocks = this.state.availableStocks.filter(
    //      stock => stock.title !== title
    //);
    this.setState({ availableStocks, searchStock: [] });
  };
  setStockData = async () => {
    /*    let stocks = [...this.state.availableStocks];

    const keyList = stocks.map(stock => stock.reference);
    const updatedStocks = await api.postMetaData(stocks, keyList);
    this.setState({ availableStocks: updatedStocks });

    setTimeout(this.setStockData, 1000 * 60 * 2);*/
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
          stockRemoveHandler={this.stockRemoveHandler}
          stocks={this.state.availableStocks}
        />
      </div>
    );
  }
}

export default StockDataContainer;
