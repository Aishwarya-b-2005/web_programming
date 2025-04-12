import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, message: "Constructor - Component Created" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Checking if component should update...");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component has updated.");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyComponent;
