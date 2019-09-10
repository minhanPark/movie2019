import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    number: 0,
    safari: 10
  };

  add = () => {
    this.setState({ number: this.state.number + 1 });
  };

  minus = () => {
    this.setState(current => {
      console.log(current);
      return {
        number: current.number - 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>My number is {this.state.number}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
