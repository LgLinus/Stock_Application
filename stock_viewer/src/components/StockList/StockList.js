import React from "react";
import { List } from "@material-ui/core";
import StockItem from "../StockItem/StockItem";
const StockList = ({ stocks, stockDetailsHandler }) => {
  const renderItems = () => {
    return stocks.map((object, index) => (
      <StockItem
        {...object}
        key={index}
        stockDetailsHandler={stockDetailsHandler}
      />
    ));
  };
  return <List component="nav">{renderItems()}</List>;
};

export default StockList;
