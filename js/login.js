const name = document.getElementById('name');
const erro = document.getElementById('erro')
const submit = document.getElementsByClassName('btnRegistration')[0]

const login = () => {
    for(let c = 0; c < localStorage.length; c++) {
        let data = JSON.parse(localStorage.getItem('user' + c))
        if(data.password === password.value && (data.name === name.value || data.email === name.value)) {
            return data
        }
    }

    return false
}

submit.addEventListener('click', e => {
    e.preventDefault();

    data = login()

    if(data) {
        data.logged = true;
        localStorage.setItem(data.userName, JSON.stringify(data))
        window.location.href = '../index.html'
    } else {
        erro.innerHTML = 'Nome/Email ou Senha incorretos'
    }
})
