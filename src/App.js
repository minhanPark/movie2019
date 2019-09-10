import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: ["tazza3", "american chef"]
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    const { isLoading, movie } = this.state;
    console.log(isLoading, movie);
    return <div>{isLoading ? "Loading....." : "Loaded!"}</div>;
  }
}

export default App;
