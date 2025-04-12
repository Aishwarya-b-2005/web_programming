const RandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const num = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(num);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
        </div>
    );
};

export default RandomNumber;

app.js
import React from "react";
import RandomNumber from "./RandomNumber";


function App() {
    return (
        <div>
            <h1>Random Number Generator</h1>
            <RandomNumber />
        </div>
    );
}


export default App;
