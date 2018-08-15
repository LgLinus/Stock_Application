import React from "react";
import { ListItem, ListItemText, TextField } from "@material-ui/core/";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: null };
  }

  handleSearch = e => {
    const value = e.target.value;
    this.setState({ searchValue: value });
    this.props.handleSearch(value);
  };

  render() {
    return (
      <TextField
        id="search"
        label="Search stock"
        type="search"
        margin="normal"
        value={this.state.searchValue}
        onChange={this.handleSearch}
      />
    );
  }
}
export default SearchComponent;
