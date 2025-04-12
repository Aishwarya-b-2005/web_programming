import React from "react";
function SumOfSquares() {
  const num1 = 3;  
  const num2 = 4;  
  const sumOfSquares = num1 ** 2 + num2 ** 2;
  return (
    <p>The sum of the squares of {num1} and {num2} is: {sumOfSquares}</p>
  );
}
export default SumOfSquares;