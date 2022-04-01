import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  let [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {!isError ? <h1>No Error</h1> : <h1>Error</h1>}
    </>
  );
};

export default ShortCircuit;
