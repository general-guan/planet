export class CountDown {
  initData = {
    time: 0.1 * 60,
    label: "00:00",
  };

  id: number | undefined;
  time: number = this.initData.time;
  label: string = this.initData.label;

  initFn() {
    this.id && clearInterval(this.id);
    this.id = undefined;
    this.time = this.initData.time;
    this.label = this.initData.label;
  }

  updateCountdown() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;

    const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
    const secondsStr = seconds < 10 ? "0" + seconds : seconds.toString();

    this.label = minutesStr + ":" + secondsStr;

    if (this.time <= 0) {
      console.log(1111);
    } else {
      this.time--;
    }
  }

  start() {
    this.updateCountdown();
    this.id = setInterval(this.updateCountdown, 1000);
  }
}
