// elementi
const formElem = document.getElementById("user-form");
const randomNumElem = document.getElementById("random-num");
const resultElem = document.getElementById("result");

// variabile input utente
const allInputs = document.querySelectorAll("input[type='number']");

// inserimento numero random
const randomNumber = randomNum(10000, 99999);
randomNumElem.innerHTML = randomNumber;

// timer 30 secondi numero random
setTimeout(function() {
    randomNumElem.innerHTML = "";
}, 30000);

// evento submit
formElem.addEventListener("submit", function(event) {
    event.preventDefault();

    // estrarre numeri utente e metterli in un array
    const userNumbers = [];
    for (let i = 0; i < allInputs.length; i++) {
        userNumbers.push(allInputs[i].value.trim());
    }

    // estrarre numeri random e metterli in un array
    const randomNumArray = randomNumElem.innerHTML.split("");
    
    // confrontare i due array
    const matchedNumbers = [];
    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumArray.includes(userNumbers[i])) {
            matchedNumbers.push(userNumbers[i]);
        }
    }
    
    // inserire risultato
    resultElem.innerHTML = `Complimenti, hai indovinato ${matchedNumbers.length} numeri! (${matchedNumbers})`
})

// funzione numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max -min + 1) + min);
}
