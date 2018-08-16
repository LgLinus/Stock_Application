import React from "react";
import "./StockItem.css";
import { ListItem, ListItemText } from "@material-ui/core/";

const MAXLENGTH = 20;

const StockItem = ({
  stockDetailsHandler,
  currency,
  name,
  currentValue,
  dailyPercentage
}) => {
  const getSecondaryText = percentage => {
    let negativeDaily = dailyPercentage.charAt(0) === "-";
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          {currentValue}
          {currency}
        </span>
        <span style={negativeDaily ? { color: "red" } : { color: "green" }}>
          {percentage}
        </span>
      </div>
    );
  };

  return (
    <ListItem button divider onClick={() => stockDetailsHandler(name)}>
      <ListItemText
        primary={name.slice(0, MAXLENGTH)}
        secondary={getSecondaryText(dailyPercentage)}
      />
    </ListItem>
  );
};

export default StockItem;
