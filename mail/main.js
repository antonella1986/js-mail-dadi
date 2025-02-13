/* 📌 Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’. */


// mi serve la lista delle email
const listInvited = ["nome@gmail.com", "nome2@gmail.com", "nome3@gmail.com", "nome4@gmail.com"]

// chiedo all'utente di inserire la sua email
const userEmail = prompt("Inserisci la tua email")
console.log(userEmail);


// creo un ciclo per chiedere al programma di controllare se l'email inserita dall'utente è presente nella mia lista o se è un imbucato
let emailTrovata = false

for (let i = 0; i < listInvited.length; i++) {
    const thisEmail = listInvited[i];
    // condizione "se l'email dell'utente è presente"
    if (userEmail === thisEmail) {
        emailTrovata = true
    }
}

// se l'email è presente glielo diciamo
if (emailTrovata === true) {
    console.log("La tua email è presente");
    
// altrimenti gli diciamo che è un imbucato, perché la sua email non è presente
} else {
    console.log("Spiacenti, la tua email non è presente");
}