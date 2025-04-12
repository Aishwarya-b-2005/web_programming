import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types"; // Import PropTypes

class Parent extends React.Component {
  render() {
    return <Child msg="Hello everyone!!" />;
  }
}

class Child extends React.Component {
  render() {
    return <h2>Message: {this.props.msg}</h2>;
  }
}

// Prop Validation for Child Component
Child.propTypes = {
  msg: PropTypes.string.isRequired, // msg must be a required string
};

function App() {
  return (
    <div>
      <h1>React Props Validation</h1>
      <Parent />
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
