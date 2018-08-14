import React from "react";
import "./StockItem.css";

const MenuButton = ({ currency, name, currentValue, dailyPercentage }) => {
  const renderPercentage = percentage => {
    let negativeDaily = dailyPercentage.charAt(0) === "-";
    return (
      <span style={negativeDaily ? { color: "red" } : null}>{percentage}</span>
    );
  };

  return (
    <div className="stockItem">
      <p>{name}</p>
      {currentValue}
      {currency}
      {renderPercentage(dailyPercentage)}
    </div>
  );
};

export default MenuButton;
