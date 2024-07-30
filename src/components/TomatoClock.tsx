import { Button, Card, Progress, Flex, Switch } from "antd";
import { ipcRenderer } from "electron";
import { useCountDown } from "../hooks/useCountDown";

export const TomatoClock = () => {
  const { label, startFn, percent } = useCountDown();
  const onChange = (flag: boolean) => {
    ipcRenderer.send("setAlwaysOnTop", { flag });
  };
  return (
    <>
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
      <Switch style={{ marginTop: 20 }} onChange={onChange} />
    </>
  );
};
