/* 📌 Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

// dichiaro la variabile
let randomNumber = [];

// faccio generare il numero random
for (let i = 0; i < 6; i++) {
    randomNumber.push(Math.floor(Math.random() * 6) + 1);
    console.log(randomNumber);
}