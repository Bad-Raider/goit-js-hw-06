// Decrement Btn
const btnDecrementEl = document.querySelector("#counter").firstElementChild;
// Increment Btn
const btnIncrementEl = document.querySelector("#counter").lastElementChild;
//  Span tag --> counter
const counterEl = document.querySelector("#value");
//  it`s counter
let counter = 0;
// function - 1 --> counter
const handleButtonDecrementClick = () => {
    counter -= 1;
    counterEl.textContent = counter
    console.log("лог по -")
    console.log(counter)
};
// function + 1 --> counter
const handleButtonIncrementClick = () => {
    counter += 1;
    counterEl.textContent = counter
    console.log("лог по +")
    console.log(counter)
}; 

// Event DecrementEl btn 
btnDecrementEl.addEventListener("click", handleButtonDecrementClick);
// Event Increment btn
btnIncrementEl.addEventListener("click", handleButtonIncrementClick);
