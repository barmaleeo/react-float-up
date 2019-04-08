import React, { Component } from 'react';
import './App.css';
import FloatUp from "./lib/FloatUp";

class App extends Component {
  onClickShow = (show) => {
    this.refs.floatUp.toggle()
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FloatUp ref="floatUp">
            <div>Visible Content
              <button onClick={this.onClickShow.bind(this, true)}>ОК</button>
            </div>
            <div className="float-up-float-content white">
              <div>Floating content 1</div>
              <div>Floating long long long content 2</div>
              <div>Floating content 3</div>
              <div>...</div>
            </div>
          </FloatUp>
         </header>
      </div>
    );
  }
}

export default App;
