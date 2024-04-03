const name = document.getElementById("name");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cpf = document.getElementById("cpf");
const weight = document.getElementById("Weight");
const address = document.getElementById("address");
const bloodType = document.getElementById("bloodType");
const submit = document.getElementsByClassName("btnRegistration");
const password = document.getElementById("password");
const buttons = document.getElementsByClassName("btnRegistration");

const data = localStorage

buttons[1].addEventListener("click", (e) => {
    e.preventDefault()

    localStorage.setItem("logado", 'false');

    window.location.href = "../index.html";
});
