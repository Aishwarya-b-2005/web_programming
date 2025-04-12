import React from "react";
import ReactDOM from "react-dom/client";  

class Parent extends React.Component {  
  render() {
    return <Child msg="greeting everyone!!" />;
  }
}

class Child extends React.Component { 
  render() {
    return <h1>{this.props.msg}</h1>;  
  }
}

function App() {
  return (
    <div>
      <h2>Message from Parent:</h2>
      <Parent />
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<App />);
