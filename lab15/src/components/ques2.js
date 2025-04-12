import React from "react";
import ReactDOM from "react-dom/client"; // Correct spelling (ReactDOM)

function Click() {
  return (
    <div>
      <button style={{ backgroundColor: "pink" ,padding:50,fontSize:50}}>CLICK ME!!!</button>
    </div>
  );
}

export default Click;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Click />);
