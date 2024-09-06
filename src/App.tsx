import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  let incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div>
        <h1 className="mb-10">Counter</h1>
        <br />
        <p className="text-6xl">{counter}</p>
      </div>

      <div className="m-10">
        <button onClick={incrementCounter} className="mr-2">
          Increment
        </button>
        <button onClick={decrementCounter} className="mt-5">
          Decrement
        </button>

        <br />
        <button onClick={resetCounter} className="mt-5">Reset</button>
      </div>
    </>
  );
}

export default App;
