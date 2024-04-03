const name = document.getElementById("name");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cpf = document.getElementById("cpf");
const weight = document.getElementById("Weight");
const address = document.getElementById("address");
const bloodType = document.getElementById("bloodType");
const submit = document.getElementsByClassName("btnRegistration");
const password = document.getElementById("password");

class User {
    constructor(
        name,
        email,
        birthDate,
        cpf,
        weight,
        address,
        bloodType,
        password
    ) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.weight = weight;
        this.address = address;
        this.bloodType = bloodType;
        this.password = password;
    }
}

submit[0].addEventListener("click", (event) => {
    event.preventDefault();

    const user = new User(
        name.value,
        email.value,
        birthDate.value,
        cpf.value,
        weight.value,
        address.value,
        bloodType.value,
        password.value
    );

    const data = {
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        cpf: user.cpf,
        weight: user.weight,
        address: user.address,
        bloodType: user.bloodType,
        password: user.password,
    };

    const itemName = "user" + localStorage.length;

    localStorage.setItem(itemName, JSON.stringify(data)); // lembrar de usar JSON.parse pra pegar os users
    localStorage.setItem("logado", 'true');

    window.location.href = "../index.html";
});
