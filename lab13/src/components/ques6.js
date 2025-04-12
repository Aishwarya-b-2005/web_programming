function DayDisplay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
  
    return <h2>Today is {days[today]}.</h2>;
  }
  
  export default DayDisplay;
  
import DayDisplay from "./components/ques6";

function App() {
  return (
    <div>
      <DayDisplay />
    </div>
  );
}

export default App;