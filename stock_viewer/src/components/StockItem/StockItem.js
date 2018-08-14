import React from "react";
import "./StockItem.css";
import { ListItem, ListItemText } from "@material-ui/core/";

const MAXLENGTH = 20;

const StockItem = ({
  onClick,
  currency,
  name,
  currentValue,
  dailyPercentage
}) => {
  const getSecondaryText = percentage => {
    let negativeDaily = dailyPercentage.charAt(0) === "-";
    return (
      <div>
        {currentValue}
        {"  "}
        {currency}
        {"  "}
        <span style={negativeDaily ? { color: "red" } : { color: "green" }}>
          {percentage}
        </span>
      </div>
    );
  };

  return (
    /*
    <ListItem onClick={onClick}>
      <ListItemText inset primary="Chelsea Otakan" />
      <p>{name}</p>
      {currentValue}
      {currency}
      {renderPercentage(dailyPercentage)}
    </ListItem>
  );*/

    <ListItem onClick={onClick} button divider>
      <ListItemText
        primary={name.slice(0, MAXLENGTH)}
        secondary={getSecondaryText(dailyPercentage)}
      />
    </ListItem>
  );
};

export default StockItem;
