import React, { Component } from "react";
import "./App.css";
import StockViewerContainer from "./containers/StockViewerContainer/StockViewerContainer";
const axios = require("axios");
class App extends Component {
  constructor(props) {
    super(props);
    axios
      .get("http://127.0.0.1:3001/?searchText=para")
      .then(data => console.log(data));
  }
  render() {
    return (
      <div className="App">
        <StockViewerContainer />
      </div>
    );
  }
}

export default App;
