import "./App.css";
import { useCountDown } from "./hooks/useCountDown";

function App() {
  const { label, time, startFn } = useCountDown();
  return (
    <>
      <button onClick={startFn}>开始</button>
      <div>{label}</div>
      <div>{time}</div>
    </>
  );
}

export default App;
