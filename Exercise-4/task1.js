const today = new Date();

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const day = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();

const newDate = `${day} ${monthNames[monthIndex]} ${year}`;

console.log(newDate);

let date = document.querySelector("#date");
date.innerHTML = newDate;

function timeFunc() {
  const today = new Date();
  const hr = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  const newTime = `${hr}:${min}:${sec}`;

  let time = document.querySelector("#time");
  time.innerHTML = newTime;
}

setInterval(timeFunc, 1000);

function watch() {
  let hr = 0;
  let min = 0;
  let sec = 0;
  let milisec = 0;
  let timeinterval;

  return {
    start: function () {
      timeinterval = setInterval(timer, 100);
      document.getElementById("start").disabled = true;
      document.getElementById("resume").disabled = true;
      document.getElementById("stop").disabled = false;
      document.getElementById("reset").disabled = false;
    },
    stop: function () {
      clearinterval = clearInterval(timeinterval);
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = true;
      document.getElementById("resume").disabled = false;
      document.getElementById("reset").disabled = false;
    },
    resume: function () {
      timeinterval = setInterval(timer, 100);
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
      document.getElementById("resume").disabled = true;
      document.getElementById("reset").disabled = false;
    },
    reset: function () {
      hr = min = sec = milisec = 0;
      clearinterval = clearInterval(timeinterval);
      let time = document.querySelector("#stopTime");
      const newTime = `${hr}:${min}:${sec}:${milisec}`;
      time.innerHTML = newTime;
      document.getElementById("start").disabled = false;
      document.getElementById("stop").disabled = true;
      document.getElementById("resume").disabled = true;
      document.getElementById("reset").disabled = true;
    },
  };

  function timer() {
    milisec += 10;
    if (milisec >= 100) {
      milisec = 0;
      sec++;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hr++;
    }
    const newTime = `${hr}:${min}:${sec}:${milisec}`;
    let time = document.querySelector("#stopTime");
    time.innerHTML = newTime;
  }
}

let sw = new watch();

let start_button = document.getElementById("start");
start_button.addEventListener("click", sw.start);

let stop_button = document.getElementById("stop");
stop_button.addEventListener("click", sw.stop);

let resume_button = document.getElementById("resume");
resume_button.addEventListener("click", sw.resume);

let reset_button = document.getElementById("reset");
reset_button.addEventListener("click", sw.reset);
