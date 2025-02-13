/*  Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.
:puntare_a_destra: Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
Nota: Non è necessario provvedere alla validazione delle email
:puntina:Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// mi serve la lista delle email
const listInvited = ["nome@gmail.com", "nome2@gmail.com", "nome3@gmail.com", "nome4@gmail.com"]

// devo chiedere all'utente di inserire la sua email
const userEmail = prompt("Inserisci la tua email")

// creo un ciclo per chiedere al programma di controllare se l'email inserita dall'utente è presente nella mia lista o se è un imbucato
for (let i = 0; i < listInvited.length; i++) {
    const thisEmail = listInvited[i];
    // condizione "se l'email dell'utente è presente"
    if (userEmail === thisEmail) {
        console.log("La tua email è nella lista");
        // altrimenti gli diciamo che è un imbucato
    } else {
        console.log("Spiacente, la tua email non è nella lista, sei un imbucato dimmè");
    }
}