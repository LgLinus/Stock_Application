import React from "react";
import StockItem from "../StockItem/StockItem";
const StockList = ({ stocks }) => (
  <div className="StockList">
    {stocks.map((stock, index) => (
      <StockItem key={index} {...stock} />
    ))}
  </div>
);

export default StockList;
