import * as React from "react";

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
  return list.map(obj => {
    return (
      <table>
        <tr>
          <th>{obj.title}</th>
          <td>{obj.url}</td>
          <td>{obj.objectId}</td>
        </tr>
      </table>
    );
  })
}

export default App;