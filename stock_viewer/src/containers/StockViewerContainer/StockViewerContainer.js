import React, {Component} from 'react';
import './StockViewerContainer.css';
import StockDataContainer from '../StockDataContainer/StockDataContainer';
class StockViewerContainer extends Component {
  state = {
    currentStock: 'None',
  };

  stockDetailsHandler = ({title}) => {
    if (title === this.state.currentStock) {
      return;
    }
    this.setState({currentStock: title});
  };

  render() {
    return (
      <div>
        <StockDataContainer stockDetailsHandler={this.stockDetailsHandler} />
        <div>{this.state.currentStock}</div>
      </div>
    );
  }
}

export default StockViewerContainer;
