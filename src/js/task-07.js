// it`s link to the input element
const inputEl = document.querySelector("#font-size-control");
// it`s link to the span element
const spanEL = document.querySelector("#text");
// it`s hendler
const handleSpanTextMakeSize = (event) => {
    spanEL.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener("input", handleSpanTextMakeSize);
