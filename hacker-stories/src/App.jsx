import * as React from "react";

const title = "Hello, World!";

function App() {
  return (
    <div>
      <h1>{title}</h1>
      <label>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"></input>
      </label>
    </div>
  );
}

export default App;