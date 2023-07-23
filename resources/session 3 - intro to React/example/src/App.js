import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [color, setColor] = useState("green");

  // const handleClick = () => {
  //   if (color === "green") {
  //     setColor("red");
  //   } else {
  //     setColor("green");
  //   }
  // };

  // useEffect(() => {
  //   console.log("hello");
  // }, [color]);

  //useEffect without 2nd parameter - execute on every re-render
  //2nd parameter - [] - execute during 1st render
  //2nd parameter - [stateVariable] - execute whenever the given state variable changes

  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="App">
      {/* <button
        style={{ backgroundColor: color, color: "blue" }}
        onClick={handleClick}
      >
        Change color
      </button> */}
      <input
        type="text"
        placeholder="enter something"
        value={textInput}
        onChange={handleChange}
      />
      <p>{textInput}</p>
    </div>
  );
}

export default App;

// import statements

// function componentName(){
//   return JSX component
// }

// export the componentFunction
