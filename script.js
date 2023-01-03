const displayBeforeValue = document.getElementById(`before-value`);
const displayActualValue = document.getElementById(`actual-value`);
const numbersButton = document.querySelectorAll(`.number`);
const operatorButton = document.querySelectorAll (`.operator`);

const display = new Display(displayBeforeValue, displayActualValue);

numbersButton.forEach(button => {
    button.addEventListener(`click`, () => display.addNum(button.innerHTML));
});

operatorButton.forEach(button => {
    button.addEventListener(`click`, () => display.compute(button.value))
})