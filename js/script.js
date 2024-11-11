// elementi
const formElem = document.getElementById("user-form");
const randomNumElem = document.getElementById("random-num");

// variabile input utente
const allInputs = document.querySelectorAll("input[type=`number`]");

// evento submit
formElem.addEventListener("submit", function(event) {
    setTimeout(function() {
        
    }, 30000);
});

// inserimento valori
randomNumElem.innerHTML = randomNum(10000, 99999);

// funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max -min + 1) + min);
}
