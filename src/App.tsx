import "./App.css";
import { useCountDown } from "./hooks/useCountDown";
import { Button, Card, Progress, Flex } from "antd";
function App() {
  const { label, startFn, percent } = useCountDown();
  return (
    <Card style={{ width: 240 }}>
      <Flex vertical align="center" gap={20}>
        <Progress
          type="circle"
          percent={percent}
          size={140}
          format={() => label}
        />
        <Button type="primary" onClick={startFn} block>
          开始
        </Button>
      </Flex>
    </Card>
  );
}

export default App;
