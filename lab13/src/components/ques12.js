import React, { Component } from "react";

class UserGreeting extends Component {
    render() {
        return (
            <div>
                <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>
            </div>
        );
    }
}

export default UserGreeting;

app.js
import React from "react";
import UserGreeting from "./UserGreeting";


function App() {
    return (
        <div>
            <h1>Welcome!</h1>
            <UserGreeting firstName="John" lastName="Doe" />
        </div>
    );
}


export default App;
s