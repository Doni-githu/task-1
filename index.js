const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    let remainingSeconds = seconds;

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        const formattedTime = formatTime(remainingSeconds);
        timerEl.textContent = formattedTime;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = padZero(hours);
  const formattedMinutes = padZero(minutes);
  const formattedSeconds = padZero(remainingSeconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const padZero = (value) => {
  return String(value).padStart(2, '0');
};

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});