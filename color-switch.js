const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startButton: document.querySelector("button[data-action='start']"),
  stopButton: document.querySelector("button[data-action='stop']"),
};

const DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.startButton.addEventListener("click", startColorSwitch);
refs.stopButton.addEventListener("click", stopColorSwitch);

function changeBackground() {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = randomColor;
}

function startColorSwitch() {
  timerId = setInterval(changeBackground, DELAY);
  refs.startButton.disabled = true;
}

function stopColorSwitch() {
  clearInterval(timerId);
  refs.startButton.disabled = false;
}
