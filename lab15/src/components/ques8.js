import React, { useRef } from "react";

function Form() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <form>
      <input type="text" name="name" ref={inputRef} />
      <button type="button" onClick={handleFocus}>Click here to focus</button>
    </form>
  );
}

export default Form;
/*import React from "react";
import Form from "./components/ques8"
function App(){
    return (
        <div>
            <h4>Form focussing: </h4>
            <Form />
        </div>
    )

}
export default App; */
