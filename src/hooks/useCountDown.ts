import { useEffect, useState } from "react";

export const useCountDown = () => {
  const [started, seStarted] = useState(false);

  const initData = {
    id: undefined,
    time: 25 * 60,
    label: "00:00",
  };

  const [id, setId] = useState<number | undefined>(initData.id);
  const [time, setTime] = useState(initData.time);
  const [label, setLabel] = useState(initData.label);

  const initFn = () => {
    setId(initData.id);
    setTime(initData.time);
    setLabel(initData.label);
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

    if (time <= 0) {
      seStarted(false);
      clearInterval(id);
      initFn();
    }
  }, [time]);

  const startFn = () => {
    seStarted(true);
  };

  return { time, label, startFn };
};
