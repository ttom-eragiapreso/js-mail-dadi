
// Prendo l'email dell'utente con un prompt e la salvo in una variabile
let userEmail = prompt("Inserisci la tua email");
// Creo un array di email che sono registrate
emailList = ["nome.cognome@gmail.com", "enrico.michelotto@gmail.com", "tizio.caio@gmail.com"]

// Se l'array di email registrate contiene l'email inserita dall'utente, allora scrivo bentornato, altrimenti un alert dice che non sei in lista.
// Modalità più moderna e veloce
if(emailList.includes(userEmail)){
  console.log("Bentornato Utente")
}else {
  alert("La tua email non è in lista")
}




// Modalità "a mano" con il ciclo e variabile flag.
let isInList = false;

for(let i = 0; i < emailList.length; i++){
  if(userEmail === emailList[i]){
    isInList = true
  }
}

if(isInList){
  console.log("Sei in lista")
}else {
  console.log("Non sei in lista")
}
