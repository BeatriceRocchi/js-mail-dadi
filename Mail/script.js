const authorizedEmail = [
  "topolino@gmail.com",
  "paperino@gmail.com",
  "pippo@gmail.com",
  "pluto@gmail.com",
  "paperonDePaperoni@gmail.com",
];

const btnAccess = document.querySelector(".btn");

btnAccess.addEventListener("click", function () {
  const userEmail = document.getElementById("user-email").value;
  let message = "Spiacenti, non sei autorizzato ad accedere!";
  let classOutput = "not_authorized";

  console.log(authorizedEmail);
  console.log(userEmail);

  for (let i = 0; i < authorizedEmail.length; i++) {
    if (userEmail === authorizedEmail[i]) {
      message = "Sei autorizzato ad accedere";
      classOutput = "authorized";
    }
  }

  console.log(message);
  document.querySelector(".output").innerHTML = `
  <div class="${classOutput}">${message}</div>
  `;
});
