// It`s link to the form element
const formEl = document.querySelector(".login-form");
// it`s link to the input email
const inputEmailEl = formEl.firstElementChild.firstElementChild;
// it`s link to the input password
const inputPasswordEl = formEl.children[1].firstElementChild;
// it`s hendler
const handleFormSubmit = (event) => {
  event.preventDefault();
  
    if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
       return alert("Чуваче, заповни форму!")
    }
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    const formData = {
        email,
        password,
    }
    console.log(formData);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleFormSubmit);








