import React from "react";

function Greeting({ food, beverage }) {
  console.log();
  return (
    <h3>
      this is {food} and {beverage}
    </h3>
  );
}

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <Greeting food="bread" beverage="water" />.
      <Greeting food="kimchi" beverage="saida" />
      <Greeting food="meet" beverage="cola" />
    </div>
  );
}

export default App;
