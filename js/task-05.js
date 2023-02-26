// it`s link to the input element
const inputEL = document.querySelector("#name-input");
// it`s link to the span element
const spanEl = document.querySelector("#name-output");
// it`s hendler
const handleSpanMakePlaceholderInput = (event) => {  
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanEl.textContent = "Anonymous";
    };
};

inputEL.addEventListener("input", handleSpanMakePlaceholderInput);