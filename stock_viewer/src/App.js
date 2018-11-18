import React, {Component} from 'react';
import './App.scss';
import MainContainer from './containers/MainContainer/MainContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
