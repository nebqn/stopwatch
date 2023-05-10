var timer;
var hr = 0;
var min = 0;
var sec = 0;
var lap = 1;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(runStopwatch, 1000);
    document.getElementById("startstop").innerHTML = "Stop";
    document.getElementById("log").innerHTML +=
      "<div>Lap " +
      lap++ +
      ": " +
      getTime() +
      "</div>";
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById("startstop").innerHTML = "Start";
  }
}

function runStopwatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }
  var stopwatchDisplay = document.getElementById("display");
  stopwatchDisplay.innerHTML =
    (hr ? (hr > 9 ? hr : "0" + hr) : "00") +
    ":" +
    (min ? (min > 9 ? min : "0" + min) : "00") +
    ":" +
    (sec > 9 ? sec : "0" + sec);
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  hr = 0;
  min = 0;
  sec = 0;
  lap = 1;
  var stopwatchDisplay = document.getElementById("display");
  stopwatchDisplay.innerHTML = "00:00:00";
  document.getElementById("startstop").innerHTML = "Start";
  document.getElementById("log").innerHTML = "";
}

function getTime() {
  var time =
    (hr ? (hr > 9 ? hr : "0" + hr) : "00") +
    ":" +
    (min ? (min > 9 ? min : "0" + min) : "00") +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  return time;
}

document.getElementById("startstop").addEventListener("click", startStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
