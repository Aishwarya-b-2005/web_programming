function PrimeChecker({ number }) {
    function isPrime(n) {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  
    return <h2>{number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}.</h2>;
  }
  
  export default PrimeChecker;
  


  // import PrimeChecker from "./components/ques7";

  // function App() {
  //   return (
  //     <div>
  //       <PrimeChecker number={7} />
  //     </div>
  //   );
  // }
  
  // export default App;
  