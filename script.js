var timer = 60;
var score = 0;
var hit = 0;
var interval;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hit;
}

function runTimer() {
  clearInterval(interval);

  timer = 60;
  document.querySelector("#timerVal").textContent = timer;

  interval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(interval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function makeBubbles() {
  clutter = "";

  for (var i = 1; i <= 96; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hit) {
    increaseScore();
    makeBubbles();
    getNewHit();
  }
});

document.querySelector("button").addEventListener("click", function () {
  score = 0;
  document.querySelector("#scoreVal").textContent = score;

  getNewHit();
  makeBubbles();
  runTimer(); // Ensures only one timer starts
});

makeBubbles();
getNewHit();
runTimer();
