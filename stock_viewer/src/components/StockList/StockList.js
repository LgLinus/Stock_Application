import React from "react";
import { List } from "@material-ui/core";
const StockList = ({ stocks, showStockDetails }) => {
  
  return (
    <List component="nav" showStockDetails={showStockDetails}>
      {stocks}
    </List>
  );
};

export default StockList;
