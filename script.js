let [second, minute, hour] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopwatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : "" + minute;
  let s = second < 10 ? "0" + second : second;

  displaytime.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchstop() {
  clearInterval(timer);
}
function watchreset() {
  clearInterval(timer);
  [second, minute, hours] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
}
