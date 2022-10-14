// Inizializzo le due variabili dei dadi con dei numeri casuali da 1 a 6
let numberUser = Math.ceil(Math.random() * 6);
let numberAi = Math.ceil(Math.random() * 6);

// Se il numero dell'utente è maggiore di quello della AI allora l'utente vince, altrimenti vince l'AI.

// Un check aggiuntivo prende in considerazione anche il caso in cui i dadi abbiano lo stesso valore, caso in cui la console scriverà pareggio.



if(numberUser > numberAi){
  console.log("user wins")
}else if (numberUser === numberAi){
  console.log("Draw")
}else {
  console.log("AI wins")
}

console.log("dado utente", numberUser, "dado AI",numberAi);