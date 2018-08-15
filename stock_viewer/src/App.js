import React, { Component } from "react";
import "./App.css";
import StockViewerContainer from "./containers/StockViewerContainer/StockViewerContainer";
const axios = require("axios");
class App extends Component {
  constructor(props) {
    super(props);
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
