let startbtn = document.getElementById("start");
let resetbtn = document.getElementById("reset");
let pausebtn = document.getElementById("pause");
let lapbtn = document.getElementById("lap");
let hrs = 0;
let min = 0;
let sec = 0;
let msec = 0;
let time;
let lapCount = 1;
const start = function () {
  msec = msec + 1;
  if (msec == 100) {
    msec = 0;
    sec += 1;
  }
  if (sec == 60) {
    sec = 0;
    min += 1;
  }
  if (min == 60) {
    min = 0;
    hrs += 1;
  }
  if (msec < 10) {
    document.getElementById("msec").textContent = "0" + msec;
  } else {
    document.getElementById("msec").textContent = msec;
  }
  if (sec < 10) {
    document.getElementById("sec").textContent = "0" + sec;
  } else {
    document.getElementById("sec").textContent = sec;
  }
  if (min < 10) {
    document.getElementById("min").textContent = "0" + min;
  } else {
    document.getElementById("min").textContent = min;
  }
  if (hrs < 10) {
    document.getElementById("hrs").textContent = "0" + hrs;
  } else {
    document.getElementById("hrs").textContent = hrs;
  }
};
startbtn.onclick = function () {
  clearInterval(time);
  time = setInterval(start, 10);
};
pausebtn.onclick = function () {
  clearInterval(time);
};
resetbtn.onclick = function () {
  clearInterval(time);
  sec = 0;
  msec = 0;
  hrs = 0;
  min = 0;
  document.getElementById("msec").textContent = "00";
  document.getElementById("sec").textContent = "00";
  document.getElementById("min").textContent = "00";
  document.getElementById("hrs").textContent = "00";
  let count = 1;
  while (count <= 5) {
    document.getElementById("msec" + count).textContent = "00";
    document.getElementById("sec" + count).textContent = "00";
    document.getElementById("min" + count).textContent = "00";
    document.getElementById("hrs" + count).textContent = "00";
    count += 1;
  }
};
lapbtn.onclick = function () {
  if (msec < 10) {
    document.getElementById("msec" + lapCount).textContent = "0" + msec;
  } else {
    document.getElementById("msec" + lapCount).textContent = msec;
  }
  if (sec < 10) {
    document.getElementById("sec" + lapCount).textContent = "0" + sec;
  } else {
    document.getElementById("sec" + lapCount).textContent = sec;
  }
  if (min < 10) {
    document.getElementById("min" + lapCount).textContent = "0" + min;
  } else {
    document.getElementById("min" + lapCount).textContent = min;
  }
  if (hrs < 10) {
    document.getElementById("hrs" + lapCount).textContent = "0" + hrs;
  } else {
    document.getElementById("hrs" + lapCount).textContent = hrs;
  }
  lapCount += 1;
  if (lapCount == 6) lapCount = 1;
}
