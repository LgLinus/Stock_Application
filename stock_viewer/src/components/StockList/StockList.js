import React from "react";
import { List } from "@material-ui/core";
import StockItem from "../StockItem/StockItem";

class StockList extends React.Component {
  renderItems = () => {
    let stocks = this.props.stocks;
    if (stocks) {
      return stocks.map((object, index) => {
        return (
          <StockItem
            {...object}
            key={index}
            stockDetailsHandler={this.props.stockDetailsHandler}
          />
        );
      });
    }
  };

  render() {
    return <List component="nav">{this.renderItems()}</List>;
  }
}

export default StockList;
