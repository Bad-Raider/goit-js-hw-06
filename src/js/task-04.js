// Decrement Btn
const btnDecrementEl = document.querySelector("#counter").firstElementChild;
// Increment Btn
const btnIncrementEl = document.querySelector("#counter").lastElementChild;
//  Span tag --> counter
const counterEl = document.querySelector("#value");
//  it`s counter
let counter = 0;
// function - 1 --> counter
const onBtnSubtraction = () => {
    counter -= 1;
    counterEl.textContent = counter
    console.log("лог по -")
    console.log(counter)
};
// function + 1 --> counter
const onBtAnaddition = () => {
    counter += 1;
    counterEl.textContent = counter
    console.log("лог по +")
    console.log(counter)
}; 

// Event DecrementEl btn 
btnDecrementEl.addEventListener("click", onBtnSubtraction);
// Event Increment btn
btnIncrementEl.addEventListener("click", onBtAnaddition);
