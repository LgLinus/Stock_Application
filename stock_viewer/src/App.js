import React, { Component } from "react";
import "./App.css";
import StockViewerContainer from "./containers/StockViewerContainer/StockViewerContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <StockViewerContainer />
      </div>
    );
  }
}

export default App;
