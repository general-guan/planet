import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

export const useCountDown = () => {
  const [started, seStarted] = useState(false);

  const initData = {
    id: undefined,
    time: 25 * 60,
    label: "00:00",
  };

  const [id, setId] = useState<NodeJS.Timeout | undefined>(initData.id);
  const [time, setTime] = useState(initData.time);
  const [label, setLabel] = useState(initData.label);
  const [percent, setPercent] = useState(0);

  const initFn = () => {
    setId(initData.id);
    setTime(initData.time);
    setLabel(initData.label);
  };

  const notifications = () => {
    ipcRenderer.send("notifications", { title: "番茄时钟", body: "时间到！" });
  };

  useEffect(() => {
    if (started) {
      setId(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    }
  }, [started]);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
    const secondsStr = seconds < 10 ? "0" + seconds : seconds.toString();

    setLabel(minutesStr + ":" + secondsStr);

    const num = ((initData.time - time) / initData.time) * 100;
    setPercent(Math.floor(num * 100) / 100);

    if (time <= 0) {
      seStarted(false);
      clearInterval(id);
      initFn();
      notifications();
    }
  }, [time]);

  const startFn = () => {
    seStarted(true);
  };

  return { label, startFn, percent };
};
