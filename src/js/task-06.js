// it`s link to the input element
const inputEl = document.querySelector("input");
// it`s hendler
const handleInputBlur = (event) => {
    const length = event.currentTarget.value.length;    

    length == inputEl.dataset.length
        ? (inputEl.classList.add("valid"), inputEl.classList.remove("invalid"))
        : (inputEl.classList.add("invalid"), inputEl.classList.remove("valid"))
}

inputEl.addEventListener("blur", handleInputBlur);

