// it`s link to at input element
const inputEL = document.querySelector("#name-input");
// it`s link to at span element
const spanEl = document.querySelector("#name-output");
// it`s callback Placeholder fubctions
const handleSpanMakePlaceholderInput = (event) => {  
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanEl.textContent = "Anonymous";
    };
};

inputEL.addEventListener("input", handleSpanMakePlaceholderInput);