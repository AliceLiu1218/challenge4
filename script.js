
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#start");
var h1El = document.querySelector("h1");
var pEl = document.querySelector("p");
var resultEl = document.querySelector(".result");
var infoEl = document.querySelector(".info");
//var initialInputEl = document.querySelector("#msg");
//var sbmBtnEl = document.querySelector("#save");
var secondsLeft = 100;
timeEl.textContent = "Time: 0" ;

var question = document.createElement("h2");
var answer = document.createElement("ul");
var answer_1 = document.createElement("li");
var answer_2 = document.createElement("li");
var answer_3 = document.createElement("li");
var answer_4 = document.createElement("li");


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      alert("Time up, Quiz is done!!!")
    }

  }, 1000);
  setQuestion1();
}

function quizStart(){
  startButton.remove();
  h1El.remove();
  pEl.remove();
}
function Question1Result(){
  answer_2.addEventListener("click", function(){
    resultEl.textContent = "Correct!";
     document.body.appendChild(resultEl);
     setQuestion2();
  })
  answer_1.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion2();
  })
  answer_3.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion2();
  })
  answer_4.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion2();
  })
}
function Question2Result(){
  answer_1.addEventListener("click", function(){
    resultEl.textContent = "Correct!";
     document.body.appendChild(resultEl);
     setQuestion3();
  })
  answer_2.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion3();
  })
  answer_3.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion3();
  })
  answer_4.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion3();
  })
}
function Question3Result(){
  answer_3.addEventListener("click", function(){
    resultEl.textContent = "Correct!";
     document.body.appendChild(resultEl);
     setQuestion4();
  })
  answer_1.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion4();
  })
  answer_2.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion4();
  })
  answer_3.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     setQuestion4();
  })
}
function Question4Result(){
  answer_4.addEventListener("click", function(){
    resultEl.textContent = "Correct!";
     document.body.appendChild(resultEl);
     resultConclude()
  })
  answer_1.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     resultConclude()
  })
  answer_2.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     resultConclude()
  })
  answer_3.addEventListener("click", function(){
     resultEl.textContent = "Wrong!";
     document.body.appendChild(resultEl);
     resultConclude()
  })
}

function resultConclude(){
  question.remove();
  answer_1.remove();
  answer_2.remove();
  answer_3.remove();
  answer_4.remove();
  resultEl.remove();
  h1El.textContent = "ALL DONE!"
  pEl.textContent = "Your fnal score is "
  document.body.appendChild(h1El);
  document.body.appendChild(pEl);
}
function setQuestion1(){
  quizStart();
  question.textContent = "kjfkhfm";
  answer_1.textContent = "hjfhkjfkf";
  answer_2.textContent = "hjfhkjfkf";
  answer_3.textContent = "hjfhkjfkf";
  answer_4.textContent = "hjfhkjfkf";
  document.body.appendChild(question);
  document.body.appendChild(answer_1);
  document.body.appendChild(answer_2);
  document.body.appendChild(answer_3);
  document.body.appendChild(answer_4);
  Question1Result();
  
  infoEl.setAttribute("display:none;");
}

function setQuestion2(){
  quizStart();
  question.textContent = "qetrweyertyidykkgu";
  answer_1.textContent = "xgjxcjxcvhjfj";
  answer_2.textContent = "xgjsxdthjstf";
  answer_3.textContent = "xtjxjcxj";
  answer_4.textContent = "xcgjxcgjxcgj";
  document.body.appendChild(question);
  document.body.appendChild(answer_1);
  document.body.appendChild(answer_2);
  document.body.appendChild(answer_3);
  document.body.appendChild(answer_4);
  Question2Result();
}
function setQuestion3(){
  quizStart();
  question.textContent = "asdryhftgjk";
  answer_1.textContent = "xfjcvhjcvhery";
  answer_2.textContent = "sdhxhxc";
  answer_3.textContent = "cghhxcgjxghjxcgh";
  answer_4.textContent = "xghxgchjxcgjxj";
  document.body.appendChild(question);
  document.body.appendChild(answer_1);
  document.body.appendChild(answer_2);
  document.body.appendChild(answer_3);
  document.body.appendChild(answer_4);
  Question3Result();
}
function setQuestion4(){
  quizStart();
  question.textContent = "1111111";
  answer_1.textContent = "111111";
  answer_2.textContent = "111111";
  answer_3.textContent = "11111";
  answer_4.textContent = "111111";
  document.body.appendChild(question);
  document.body.appendChild(answer_1);
  document.body.appendChild(answer_2);
  document.body.appendChild(answer_3);
  document.body.appendChild(answer_4);
  Question4Result();
}
startButton.addEventListener("click", function() {
  setTime();
  console.log(secondsLeft);
});



