import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button className="decrement" onClick={this.decrement}>-</button>
        <button className="increment" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
