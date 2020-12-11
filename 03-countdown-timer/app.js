minutesEl = document.getElementById("min");
secondsEl = document.getElementById("sec");

let totalSeconds = parseInt(minutesEl.innerHTML) * 60;

const incrementCounter = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  if (totalSeconds < 0) {
    minutes = 0;
    seconds = 0;
  }

  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  totalSeconds--;
};

setInterval(incrementCounter, 1000);
