const name = document.getElementById("name");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cpf = document.getElementById("cpf");
const weight = document.getElementById("Weight");
const address = document.getElementById("address");
const bloodType = document.getElementById("bloodType");
const submit = document.getElementsByClassName("btnRegistration");
const buttons = document.getElementsByClassName("btnRegistration");

const logged = () => {
    for(let c = 0; c < localStorage.length; c++) {
        let data = JSON.parse(localStorage.getItem('user' + c))
        if(data.logged === true) {
            return data
        }
    }

    return false
}

data = logged();

name.value = data.name;
email.value = data.email;
birthDate.value = data.birthDate;
cpf.value = data.cpf;
weight.value = data.weight;
address.value = data.address;
bloodType.value = data.bloodType;
password.value = data.password

buttons[0].addEventListener('click', (e) => {
    e.preventDefault()
    
    data.name = name.value;
    data.email = email.value;
    data.birthDate = birthDate.value;
    data.cpf = cpf.value;
    data.weight = weight.value;
    data.address = address.value;
    data.bloodType = bloodType.value;
    data.password = password.value;

    localStorage.setItem(data.userName, JSON.stringify(data))
    window.location.href = "../index.html"
})

buttons[1].addEventListener("click", (e) => {
    e.preventDefault()

    data.logged = true;
    localStorage.setItem(data.userName, JSON.stringify(data))

    window.location.href = "../index.html";
});
