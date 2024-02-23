const authorizedEmail = [
  "topolino@gmail.com",
  "paperino@gmail.com",
  "pippo@gmail.com",
  "pluto@gmail.com",
  "paperonDePaperoni@gmail.com",
];

const userEmail = prompt("Inserisci la tua email: ");
let message = "Spiacenti, non sei autorizzato ad accedere";

console.log(authorizedEmail);
console.log(userEmail);

for (let i = 0; i < authorizedEmail.length; i++) {
  if (userEmail === authorizedEmail[i]) {
    message = "Sei autorizzato ad accedere";
  }
}

console.log(message);
