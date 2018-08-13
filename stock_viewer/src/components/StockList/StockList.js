import React from "react";
import StockItem from "../StockItem/StockItem";
const StockList = ({ stocks }) => {
  const renderStocks = () => {
    return stocks.map((stock, index) => {
      let key = "stockItem" + index;
      return <StockItem key={key} {...stock} />;
    });
  };
  return <div className="StockList">{renderStocks()}</div>;
};

export default StockList;
