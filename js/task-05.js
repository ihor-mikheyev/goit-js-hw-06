const textInput = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

textInput.addEventListener("input", updateName);

function updateName(event) {
  if (event.target.value === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = event.target.value;
  }
}