
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#start");

var secondsLeft = 100;
timeEl.textContent = "Time: 0" ;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      prompt("Time up, Quiz is done!!!")
    }

  }, 1000);
}



startButton.addEventListener("click", function() {
  setTime();
  console.log(secondsLeft);
});



