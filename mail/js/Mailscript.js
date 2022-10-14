
// Prendo l'email dell'utente con un prompt e la salvo in una variabile
let userEmail = prompt("Inserisci la tua email");
// Creo un array di email che sono registrate
emailList = ["nome.cognome@gmail.com", "enrico.michelotto@gmail.com", "tizio.caio@gmail.com"]

// Se l'array di email registrate contiene l'email inserita dall'utente, allora scrivo bentornato, altrimenti un alert dice che non sei in lista.
if(emailList.includes(userEmail)){
  console.log("Bentornato Utente")
}else {
  alert("La tua email non è in lista")
}