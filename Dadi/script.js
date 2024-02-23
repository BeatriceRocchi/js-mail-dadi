const userNumber = Math.ceil(Math.random() * 6);
const computerNumber = Math.ceil(Math.random() * 6);
let message = "";

console.log("User: ", userNumber);
console.log("Computer: ", computerNumber);

if (userNumber > computerNumber) {
  message = "Ha vinto l'utente";
} else if (userNumber < computerNumber) {
  message = "Ha vinto il PC";
} else {
  message = "Pareggio!";
}

console.log(message);
