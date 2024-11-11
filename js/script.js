// elementi
const formElem = document.getElementById("user-form");
const randomNumElem = document.getElementById("random-num");
const resultElem = document.getElementById("result");

// variabile input utente
const allInputs = document.querySelectorAll("input[type=`number`]");

// inserimento numero random
randomNumElem.innerHTML = randomNum(10000, 99999);

// timer 30 secondi numero random
setTimeout(function() {
    randomNumElem.innerHTML = "";
}, 30000);

// evento submit
formElem.addEventListener("submit", function(event) {
    event.preventDefault();
})

// funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max -min + 1) + min);
}
