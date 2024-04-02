const name = document.getElementById("name");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cpf = document.getElementById("cpf");
const weight = document.getElementById("Weight");
const phoneNumber = document.getElementById("phoneNumber");
const address = document.getElementById("address");
const bloodType = document.getElementById("bloodType");
const submit = document.getElementsByClassName("btnRegistration");

class User {
    constructor(
        name,
        email,
        birthDate,
        cpf,
        weight,
        phoneNumber,
        address,
        bloodType
    ) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.weight = weight;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.bloodType = bloodType;
    }
}

submit[0].addEventListener('click', (event) => {
    event.preventDefault();

    const user = new User(
        name.value,
        email.value,
        birthDate.value,
        cpf.value,
        weight.value,
        phoneNumber.value,
        address.value,
        bloodType.value
    );

    const data = {
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        cpf: user.cpf,
        weight: user.weight,
        phoneNumber: user.phoneNumber,
        address: user.address,
        bloodType: user.bloodType,
    };

    const itemName = 'user' + localStorage.length;

    localStorage.setItem(itemName, data);
    console.log(localStorage.getItem(itemName));

    window.location.href = '../index.html';
});
