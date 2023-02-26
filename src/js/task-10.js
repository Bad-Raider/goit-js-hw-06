// It`s function random color 
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// it`s create btn
const btnCreate = document.querySelector("[data-create]");
// it`s destroy btn
const btnDestroy = document.querySelector("[data-destroy]");
// it`s boxes element
const boxesEl = document.querySelector("#boxes");
// It`s input element
const inputEl = document.querySelector('input[type="number"]')
// it`s handler Creator 
const handleCreaterDivElements = () => {

  for (let i = 0; i < inputEl.value; i++) {
    const divBox = document.createElement("div")
    divBox.style.width = `${30 + i * 10}px`;
    divBox.style.height = `${30 + i * 10}px`;
    divBox.textContent = `${i + 1}El`
    divBox.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(divBox)
  }
   
};
// it`s handler Destroyer
const handleDetroyDivElement = () => {
  boxesEl.innerHTML = "";
};

btnCreate.addEventListener("click", handleCreaterDivElements);
btnDestroy.addEventListener("click", handleDetroyDivElement);