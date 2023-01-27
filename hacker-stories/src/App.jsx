import * as React from "react";

const title = {
  greeting: "Hey",
  name: "React"
};

function App() {
  return (
    <div>
      <h1>{title.greeting}, {title.name}</h1>
      <label>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"></input>
      </label>
    </div>
  );
}

export default App;