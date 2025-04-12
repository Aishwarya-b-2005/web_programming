import React, { useState, useEffect } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("Loading joke...");

  // Function to fetch a joke from an API
  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to load joke, try again!");
    }
  };

  // Fetch joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default JokeFetcher;

// import React from "react";
// import JokeFetcher from "./components/ques7";
// function App() {
//   return (
//     <div>
//       <h1>Joke App</h1>
//       <JokeFetcher />
//     </div>
//   );
// }

// export default App;
