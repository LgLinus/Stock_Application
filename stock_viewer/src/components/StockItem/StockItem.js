import React from 'react';
import './StockItem.scss';
import {ListItem, ListItemText} from '@material-ui/core/';

const MAXLENGTH = 20;

const StockItem = ({
  stockDetailsHandler,
  stockRemoveHandler,
  currency,
  title,
  reference,
  value,
  dailyPercentage,
  ...rest
}) => {
  if (!dailyPercentage) dailyPercentage = '0';
  const getSecondaryText = percentage => {
    let negativeDaily = dailyPercentage.charAt(0) === '-';
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>
          {value}
          {currency}
        </span>
        <span style={negativeDaily ? {color: 'red'} : {color: 'green'}}>
          {percentage}
        </span>
      </div>
    );
  };

  return (
    <div>
      <ListItem
        className="stockitem"
        button
        divider
        onClick={() =>
          stockDetailsHandler({
            currency,
            title,
            value,
            dailyPercentage,
            reference,
          })
        }>
        <ListItemText
          primary={title.slice(0, MAXLENGTH)}
          secondary={getSecondaryText(dailyPercentage)}
        />
        {stockRemoveHandler && (
          <p
            className="stockitem--remove"
            onClick={() => stockRemoveHandler(title)}>
            X
          </p>
        )}
      </ListItem>
    </div>
  );
};

export default StockItem;
