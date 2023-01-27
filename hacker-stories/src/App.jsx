import * as React from "react";

const title = {
  greeting: "Hey",
  name: "React"
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    objectId: 0
  }, {
    title: "Redux",
    url: "https://redux.js.org",
    objectId: 1
  }
]

function App() {
  return (
    <div>
      <h1>{title.greeting}, {title.name}</h1>
      <label>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"></input>
      </label>
      <table>
        <tr>
          <th>title</th>
          <th>url</th>
          <th>id</th>
        </tr>
        {
          list.map(obj => {
            return (
              <tr>
                <td>{obj.title}</td>
                <td>{obj.url}</td>
                <td>{obj.objectId}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
}

export default App;