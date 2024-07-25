import "./App.css";
import { Button } from "@fluentui/react-components";
import { useCountDown } from "./hooks/useCountDown";

function App() {
  const { label, time, startFn } = useCountDown();
  return (
    <>
      <Button onClick={startFn}>开始</Button>
      <div>{label}</div>
      <div>{time}</div>
    </>
  );
}

export default App;
