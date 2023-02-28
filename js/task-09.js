// It`s function random color 
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// It`s DOM elements 
const ref = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
}
// it`s hendler
const handleChangeBodyColor = (event) => {
  const color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.span.textContent = color;
};

ref.btn.addEventListener("click", handleChangeBodyColor);


