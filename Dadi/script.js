const btnNumGenerator = document.getElementById("number-generator");
let message = "";

btnNumGenerator.addEventListener("click", function () {

  const userNumber = Math.ceil(Math.random() * 6);
  console.log("User: ", userNumber);
  document.getElementById("user-number").innerHTML = userNumber;

  const computerNumber = Math.ceil(Math.random() * 6);
  console.log("Computer: ", computerNumber);
  document.getElementById("computer-number").innerHTML = computerNumber;

  if (userNumber > computerNumber) {
    message = "Complimenti! Hai vinto!";
  } else if (userNumber < computerNumber) {
    message = "Peccato, questa volta il computer è stato più fortunato!";
  } else {
    message = "Pareggio!";
  }

  console.log(message);
  document.querySelector(".output").innerHTML = message;
});
