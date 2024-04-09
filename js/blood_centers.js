document.addEventListener("DOMContentLoaded", function() {
    const perfil = document.getElementById("perfil");
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const headerPerfil = document.getElementsByClassName("header-perfil")[0];

    const logged = () => {
        for(let c = 0; c < localStorage.length; c++) {
            let data = JSON.parse(localStorage.getItem('user' + c))
            if(data && data.logged === true) {
                return data
            }
        }
    
        return false
    }
    

    if (logged()) {
        login.style.display = "none";
        register.style.display = "none";
        headerPerfil.style.display = "flex";
    } else {
        login.style.display = "flex";
        register.style.display = "flex";
        headerPerfil.style.display = "none";
    }

    perfil.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "../pages/userData.html";
    });

    login.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "../pages/login.html";
    });

    register.addEventListener("click", (e) => {
        e.preventDefault();

        window.location.href = "../pages/register.html";
    });
});

const mainBloodCenters = document.querySelector('.main__hemocentros')
const estateSelect = document.querySelector('#estado')

let value = estateSelect.options[estateSelect.selectedIndex].value
async function fetchData() {
    const res = await fetch('../js/hemocentros.json')
    const data = await res.json()
    return data
}

function createCard(state, unitTitle, informationUnit, tel, site) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card-hemo');
    card.innerHTML = `
    <h5 ng-bind-html="estado.nome" class="cidade-hemo">${state}</h5>
    <h4 ng-bind-html="unidade.title" class="unidade-hemo">${unitTitle}</h4>

    <p ng-bind-html="unidade.the_content" class="ng-binding">${informationUnit}</p>

    <p ng-bind-html="unidade.tel" class="ng-binding">${tel}</p>
    <a target="_blank" class="flex" href="${site}">
    <img class="sprite-map " src="../img/localizacao.png" alt="">
    Ver
        no
        Google Maps</a>
        `
    
    mainBloodCenters.appendChild(card)

}

async function exposeBloodCenters() {
    const state = estateSelect.options[estateSelect.selectedIndex].value;
    const data = await fetchData();

    let estados = data.estados.flatMap(est => est.estados);
    if (state) {
        estados = estados.filter(est => est.nome === state);
    }

    estados.forEach(est => {
        est.unidades.forEach(unit => {
            createCard(est.nome, unit.title, unit.the_content, unit.tel, unit.map);
        });
    });
}

function apagarCards(){
    const cards = document.querySelectorAll('.card-hemo')
    for(let i = 0; i < cards.length; ++i){
        mainBloodCenters.removeChild(cards[i])
    }
}
exposeBloodCenters()

estateSelect.addEventListener('change', () => {
    apagarCards()
    exposeBloodCenters()
})
