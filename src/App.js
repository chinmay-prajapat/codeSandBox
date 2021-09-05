import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const myRef = useRef(0);
  const [count, setCount] = useState(0);
  const start = () => {
    if (myRef.current) return;
    myRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  const stop = () => {
    clearInterval(myRef.current);

    myRef.current = 0;
    setCount(0);
  };
  const pause = () => {
    clearInterval(myRef.current);
    myRef.current = 0;
  };
  const reset = () => {
    clearInterval(myRef.current);
    myRef.current = 0;
    setCount(0);
  };
  return (
    <div className="App">
      <div>Timer: {count}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
