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