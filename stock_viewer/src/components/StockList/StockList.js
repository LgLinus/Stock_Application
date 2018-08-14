import React from "react";
import { List } from "@material-ui/core";
const StockList = ({ stocks }) => {
  return <List component="nav">{stocks}</List>;
};

export default StockList;
