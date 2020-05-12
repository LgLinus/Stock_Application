import React from "react";
import { TextField } from "@material-ui/core/";
import StockList from "../StockList/StockList";
import "./SearchComponent.scss";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  handleSearch = e => {
    const value = e.target.value;
    this.setState({ searchValue: value });
    this.props.handleSearch(value);
  };

  handleSelectStock = stock => {
    this.props.handleClick(stock);
  };
  render() {
    return (
      <div className="searchcomponent">
        <TextField
          id="search"
          label="Search stock"
          type="search"
          margin="normal"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <StockList
          stocks={this.props.list}
          stockDetailsHandler={this.handleSelectStock}
        />
      </div>
    );
  }
}
export default SearchComponent;
