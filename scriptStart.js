const checkbox = document.querySelector("#security-check");
const button = document.querySelector("#proceed-btn");

checkbox.addEventListener("change", function (event) {
  button.disabled = !event.target.checked;
});

button.addEventListener("click", initializeQuiz);