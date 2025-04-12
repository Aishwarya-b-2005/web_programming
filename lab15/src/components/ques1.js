import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Header Component: Receives title as a prop
function Header(props) {
    return <h1>{props.title}</h1>;
}

// Joke Component: Displays a joke when called
function Display() {
    return <p>Programmers dont like nature has It has too many bugs!</p>;
}

// Content Component: Shows a joke when the button is clicked
function Content() {
    const [showJoke, setShowJoke] = useState(false);

    return (
        <div>
            <button onClick={() => setShowJoke(true)}>Click me for a joke</button>
            {showJoke && <Display />} {/* Show joke when button is clicked */}
        </div>
    );
}

// Footer Component: Static message
function Footer() {
    return <p>This is the footer part</p>;
}

// App Component: Organizes all other components
function App() {
    return (
        <div>
            <Header title="Welcome to My App!" />
            <Content />
            <Footer />
        </div>
    );
}

export default App;

// Mounting React to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
