import React, { useState } from "react";

const LeapYearChecker = () => {
    const [year, setYear] = useState("");
    const [result, setResult] = useState("");

    const checkLeapYear = () => {
        const numericYear = parseInt(year);
        if (!isNaN(numericYear)) {
            if ((numericYear % 4 === 0 && numericYear % 100 !== 0) || numericYear % 400 === 0) {
                setResult(`${numericYear} is a Leap Year!`);
            } else {
                setResult(`${numericYear} is NOT a Leap Year.`);
            }
        } else {
            setResult("Please enter a valid year.");
        }
    };

    return (
        <div>
            <h2>Leap Year Checker</h2>
            <input 
                type="number" 
                placeholder="Enter a year" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
            />
            <button onClick={checkLeapYear}>Check</button>
            <p>{result}</p>
        </div>
    );
};

export default LeapYearChecker;

App.js
import LeapYearChecker from "./LeapYearChecker";


function App() {
    return (
        <div>
            <h1>Leap Year Checker</h1>
            <LeapYearChecker />
        </div>
    );
}


export default App;
