import React from "react";
import StockItem from "../StockItem/StockItem";
const StockList = ({ stocks, handleStock }) => {
  return (
    <div className="StockList">
      {stocks.map((stock, index) => (
        <div onClick={() => handleStock(stock.name)}>
          <StockItem key={index} {...stock} />
        </div>
      ))}
    </div>
  );
};

export default StockList;
