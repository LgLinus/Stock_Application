import React from "react";
import "./StockItem.css";

const MenuButton = ({ currency, name, currentValue, dailyPercentage }) => {
  let negativeDaily = dailyPercentage.charAt(0) === "-";
  return (
    <div className="stockItem">
      {name}
      {"  "}
      {currentValue}
      {currency}
      <p>
        {negativeDaily ? (
          <span className="redText"> {dailyPercentage} </span>
        ) : (
          <span>{dailyPercentage}</span>
        )}
      </p>
    </div>
  );
};

export default MenuButton;
