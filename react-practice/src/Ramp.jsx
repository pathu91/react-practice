import { useEffect, useState } from "react";
/*
Create a React component that accepts an "props" prop. If the "props" prop is falsy, render a live-updating date and time that 
updates every second. If the "props" prop is an array, render the array's elements in a list. If the "props" prop is anything else, 
render the value in a . Provide a CodeSandbox link
*/

function Ramp(props) {
  const [data, setData] = useState();
  const [type, setType] = useState("");
  const ifArr = [];
  useEffect(() => {
    if (!props.input) {
      setType("falsy");
      setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        setData(currentTime);
      }, 1000);
    } else if (Array.isArray(props.input)) {
      setType("array");
      setData(props.input);
      ifArr.push(data);
    } else {
      setData(props.input);
      setType("else");
    }
    console.log("this is data", data);
    console.log("this is type", type);
    console.log("this is arr", ifArr);
  });

  return (
    <div>
      {type === "falsy" && data}
      {type === "array" && ifArr}
      {type === "else" && data}
    </div>
  );
}
export default Ramp;
