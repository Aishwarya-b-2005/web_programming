import React from "react";
import ReactDOM from "react-dom/client";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being created");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: State has been updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being unmounted");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

function App() {
  const [showComponent, setShowComponent] = React.useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
