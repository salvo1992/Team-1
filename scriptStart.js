const checkbox = document.querySelector("#security-check");
const button = document.querySelector("#proceed-btn");

checkbox.addEventListener("change", function () {
  button.disabled = !this.checked;
});

button.addEventListener("click", initializeQuiz);