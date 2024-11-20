document.addEventListener("DOMContentLoaded", () => {
    // Place all the JS code here

  

let timer;
let timepassed = 0;
let its_running = false;

const display = document.getElementById("display");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const restartbtn = document.getElementById("restart");

function updateDisplay() {
    const hours = Math.floor(timepassed / (60 * 60 * 1000));
    const minutes = Math.floor((timepassed % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timepassed % (60 * 1000)) / 1000);

    display.textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function startStopwatch() {
    if (!its_running) {
        its_running = true;
        const startTime = Date.now() - timepassed;
        timer = setInterval(() => {
            timepassed = Date.now() - startTime;
            updateDisplay();
        }, 1000);

    }
}
function stopStopwatch() {
    if (its_running) {
        its_running = false;
        clearInterval(timer); // Stops the interval
    }
}
function resetStopwatch() {
    its_running = false;
    clearInterval(timer); // Stops the timer
    timepassed = 0; // Resets elapsed time to 0
    updateDisplay(); // Resets the display to "00:00:00"
}
startbtn.addEventListener("click", startStopwatch);
stopbtn.addEventListener("click", stopStopwatch);
restartbtn.addEventListener("click", resetStopwatch);


updateDisplay();

  
});