let interval;
let totalSeconds = 0;
const timeLabel = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const datePicker = document.getElementById("datePicker");

datePicker.valueAsDate = new Date();

function updateTime() {
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  timeLabel.textContent = `${hours}:${minutes}:${seconds}`;
}

async function start() {
  startBtn.disabled = true;
  interval = setInterval(() => {
    totalSeconds++;
    updateTime();
  }, 1000);
  await new Promise(resolve => setTimeout(resolve, 0));
}

function stop() {
  clearInterval(interval);
  enableStartButtonAsync();
}

function reset() {
  stop();
  totalSeconds = 0;
  updateTime();
}

async function enableStartButtonAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  startBtn.disabled = false;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);