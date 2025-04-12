import React from "react";
function StyledMessage() {
 const messageStyle = {
 color: "white",
 backgroundColor: "blue",
 padding: "20px",
 borderRadius: "10px",
 textAlign: "center",
 fontSize: "24px",
 fontFamily: "Arial, sans-serif",
 };
 return (
 <div style={messageStyle}>
 React Styling!
 </div>
 );
}
export default StyledMessage;