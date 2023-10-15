const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", () => {
    const expectedLength = textInput.getAttribute("data-length");
    const actualLength = textInput.value.length;

    if (expectedLength == actualLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});

