document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const birthDateInput = document.getElementById("birthDate");
    const cpfInput = document.getElementById("cpf");
    const weightInput = document.getElementById("Weight");
    const addressInput = document.getElementById("address");
    const bloodTypeInput = document.getElementById("bloodType");
    const passwordInput = document.getElementById("password"); 
    const submitButton = document.querySelector(".btnRegistration");
    const date = new Date();

    actualMonth = date.getMonth();
    actualDay = date.getDay();
    minYear = date.getFullYear() - 69;
    maxYear = date.getFullYear() - 16;
    console.log(actualDay)
    birthDate.min = minYear + '-' + '0' + actualMonth + '-' + '0' + actualDay;
    birthDate.max = maxYear + '-' + '0' + actualMonth + '-' + '0' + actualDay;

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

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        function displayError(inputField, message) {
            const item = inputField.parentElement;
            const errorMessage = item.querySelector("p");

            errorMessage.innerText = message;
            item.classList.add("error");
        }

        function clearErrors() {
            const errorMessages = document.querySelectorAll("p");
            errorMessages.forEach(errorMessage => {
                errorMessage.innerText = "";
                errorMessage.parentElement.classList.remove("error");
            });
        }

        clearErrors();

        if (!nameInput.value.trim()) {
            displayError(nameInput, "O nome é obrigatório");
            return;
        }

        if (!emailInput.value.trim()) {
            displayError(emailInput, "O email é obrigatório");
            return;
        }

        if (!cpfInput.value.trim()) {
            displayError(cpfInput, "O CPF é obrigatório");
            return;
        }

        if (!/^\d{11}$/.test(cpfInput.value)) {
            displayError(cpfInput, "CPF inválido");
            return;
        }

        if (!weightInput.value.trim()) {
            displayError(weightInput, "O peso é obrigatório");
            return;
        }

        let weight = parseFloat(weightInput.value); 

        if (isNaN(weight) || weight < 50) {
            displayError(weightInput, "Peso inválido");
            return;
        }

        if (!addressInput.value.trim()) {
            displayError(addressInput, "O endereço é obrigatório");
            return;
        }

        if (!passwordInput.value.trim()) {
            displayError(passwordInput, "A senha é obrigatória");
            return;
        }

        if (!birthDateInput.value.trim()) {
            displayError(birthDateInput, "A data de nascimento é obrigatório");
            return;
        }





        const user = new User(
            "user" + localStorage.length,
            nameInput.value,
            emailInput.value,
            birthDateInput.value,
            cpfInput.value,
            weightInput.value,
            addressInput.value,
            bloodTypeInput.value,
            passwordInput.value,
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
});
