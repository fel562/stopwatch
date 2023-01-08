const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const pause = document.querySelector("#pause");
const time = document.querySelector("#time");
let counter = 0;
let timeoutID;
start.addEventListener("click", startFunc);
function startFunc(event) {
  event.preventDefault();
  timeoutID = setInterval(function () {
    counter++;
    time.innerText = counter;
    console.log(counter);
  }, 1000);

  console.log("start btn");
}
pause.addEventListener("click", pauseFunc);
function pauseFunc(event) {
  event.preventDefault();
  clearInterval(timeoutID);
  console.log(counter);

  console.log("pause btn");
}

reset.addEventListener("click", resetFunc);
function resetFunc(event) {
  event.preventDefault();
  clearInterval(timeoutID);
  counter = 0;
   time.innerText = 0;
  console.log(counter);
 

  console.log("reset btn");
}
