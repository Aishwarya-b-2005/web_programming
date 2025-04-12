import React from "react";

const ReverseString = ({ inputString }) => {
 const reversedString = inputString.split("").reverse().join("");
 const isPalindrome = inputString.toLowerCase() === reversedString.toLowerCase();

 return (
 <div>
 <p>Reversed String: {reversedString}</p>
 <p>{isPalindrome ? "It's a palindrome!" : "It's not a palindrome."}</p>
</div>
 );
};

export default ReverseString;

app.js
import React from "react";
import ReverseString from "./ReverseString";


function App() {
   return (
       <div>
           <h1>String Reversal & Palindrome Check</h1>
           <ReverseString inputString="React" />
       </div>
   );
}


export default App;