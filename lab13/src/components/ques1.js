import React from "react";

function App() {
 return React.createElement("h1", null, "Hello, React!");
}

export default App;


App.js
import React from "react";

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;

import React from "react";
function App() {
  const message = "Hello, React!";
  return <h1>{message}</h1>;
}
export default App;