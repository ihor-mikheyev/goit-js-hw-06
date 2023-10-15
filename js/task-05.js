const textInput = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

console.log(greeting.textContent);
function updateName() {
    if (textInput !== ' ') {
        textInput.addEventListener("input", (event) => {
            greeting.textContent = event.currentTarget.value;
        });
    } else {
        textInput.innerHTML = value;
    }
}
updateName();