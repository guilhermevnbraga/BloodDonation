const name = document.getElementById("name");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cpf = document.getElementById("cpf");
const weight = document.getElementById("Weight");
const address = document.getElementById("address");
const bloodType = document.getElementById("bloodType");
const submit = document.getElementsByClassName("btnRegistration");

class User {
    constructor(
        userName,
        name,
        email,
        birthDate,
        cpf,
        weight,
        address,
        bloodType,
        password,
        logged
    ) {
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.weight = weight;
        this.address = address;
        this.bloodType = bloodType;
        this.password = password;
        this.logged = logged;
    }
}

submit[0].addEventListener("click", (event) => {
    event.preventDefault();

    itemName = "user" + localStorage.length;

    const user = new User(
        itemName,
        name.value,
        email.value,
        birthDate.value,
        cpf.value,
        weight.value,
        address.value,
        bloodType.value,
        password.value,
        true
    );

    const data = {
        userName: user.userName,
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        cpf: user.cpf,
        weight: user.weight,
        address: user.address,
        bloodType: user.bloodType,
        password: user.password,
        logged: user.logged,
    };

    localStorage.setItem(data.userName, JSON.stringify(data));

    window.location.href = "../index.html";
});
