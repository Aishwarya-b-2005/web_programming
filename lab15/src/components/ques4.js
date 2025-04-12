import React from "react";
import ReactDOM from "react-dom/client";
import button from "./components/button.css"
function buttondraw(){
    return (
        <div>
            <button className="custom-button">Click me</button>
        </div>
    );
}
export default buttondraw;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<buttondraw />);
