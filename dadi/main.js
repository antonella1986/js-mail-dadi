/* 📌 Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

// faccio generare i numeri
let randomNumberPC = (Math.floor(Math.random() * 6) + 1);
let randomNumberPlayer = (Math.floor(Math.random() * 6) + 1);

// stampo i numeri generati
console.log("Punteggio PC:" + randomNumberPC);
console.log("Punteggio giocatore:" + randomNumberPlayer);

// dichiaro il vincitore del gioco
if (randomNumberPC > randomNumberPlayer) {
    console.log("Ha vinto la tecnologia!");
} else if (randomNumberPC < randomNumberPlayer) {
    console.log("Ha vinto la natura!");    
} else {
    console.log("Avete vinto entrambi!");
}
    
