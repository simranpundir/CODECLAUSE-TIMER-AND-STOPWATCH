// Timer
var timerInterval;
var timerSeconds = 0;
var timerMinutes = 0;
var timerHours = 0;

function startTimer() {
  document.getElementById("startTimer").disabled = true;
  document.getElementById("pauseTimer").disabled = false;
  document.getElementById("resetTimer").disabled = false;

  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  document.getElementById("startTimer").disabled = false;
  document.getElementById("pauseTimer").disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerSeconds").textContent = "00";
  document.getElementById("timerMinutes").textContent = "00";
  document.getElementById("timerHours").textContent = "00";
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  document.getElementById("startTimer").disabled = false;
  document.getElementById("pauseTimer").disabled = true;
  document.getElementById("resetTimer").disabled = true;
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds > 59) {
    timerSeconds = 0;
    timerMinutes++;
    if (timerMinutes > 59) {
      timerMinutes = 0;
      timerHours++;
    }
  }

  document.getElementById("timerSeconds").textContent = padNumber(timerSeconds);
  document.getElementById("timerMinutes").textContent = padNumber(timerMinutes);
  document.getElementById("timerHours").textContent = padNumber(timerHours);
}

// Stopwatch
var stopwatchInterval;
var stopwatchMilliseconds = 0;
var stopwatchSeconds = 0;
var stopwatchMinutes = 0;
var stopwatchHours = 0;

function startStopwatch() {
  document.getElementById("startStopwatch").disabled = true;
  document.getElementById("pauseStopwatch").disabled = false;
  document.getElementById("resetStopwatch").disabled = false;

  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("startStopwatch").disabled = false;
  document.getElementById("pauseStopwatch").disabled = true;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("stopwatchMilliseconds").textContent = "000";
  document.getElementById("stopwatchSeconds").textContent = "00";
  document.getElementById("stopwatchMinutes").textContent = "00";
  document.getElementById("stopwatchHours").textContent = "00";
  stopwatchMilliseconds = 0;
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  document.getElementById("startStopwatch").disabled = false;
  document.getElementById("pauseStopwatch").disabled = true;
  document.getElementById("resetStopwatch").disabled = true;
}

function updateStopwatch() {
  stopwatchMilliseconds++;
  if (stopwatchMilliseconds > 999) {
    stopwatchMilliseconds = 0;
    stopwatchSeconds++;
    if (stopwatchSeconds > 59) {
      stopwatchSeconds = 0;
      stopwatchMinutes++;
      if (stopwatchMinutes > 59) {
        stopwatchMinutes = 0;
        stopwatchHours++;
      }
    }
  }

  document.getElementById("stopwatchMilliseconds").textContent = padNumber(stopwatchMilliseconds, 3);
  document.getElementById("stopwatchSeconds").textContent = padNumber(stopwatchSeconds);
  document.getElementById("stopwatchMinutes").textContent = padNumber(stopwatchMinutes);
  document.getElementById("stopwatchHours").textContent = padNumber(stopwatchHours);
}

function padNumber(number, length = 2) {
  return String(number).padStart(length, "0");
}
