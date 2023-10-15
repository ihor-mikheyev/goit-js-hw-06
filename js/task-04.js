const addBtn = document.querySelector('[data-action="increment"]');
const subtBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

const addition = () => {
    counterValue = counterValue + 1;
    changeContent();
};

const subtraction = () => {
    counterValue = counterValue - 1;
    changeContent();
};

function changeContent() {
    const span = document.querySelector("#value");
    span.textContent = counterValue;
}

addBtn.addEventListener("click", addition);
subtBtn.addEventListener("click", subtraction);

