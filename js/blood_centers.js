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

const mainBloodCenters = document.querySelector('.main__bloodcenters')
const stateSelect = document.querySelector('#state')

let value = stateSelect.options[stateSelect.selectedIndex].value
async function fetchData() {
    const res = await fetch('../js/hemocentros.json')
    const data = await res.json()
    return data
}

function createCard(state, unitTitle, informationUnit, tel, site) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card-hemo');
    card.innerHTML = `
    <h5 ng-bind-html="state.name" class="hemo-city">${state}</h5>
    <h4 ng-bind-html="unity.title" class="hemo-unity">${unitTitle}</h4>

    <p ng-bind-html="unity.the_content" class="ng-binding">${informationUnit}</p>

    <p ng-bind-html="unity.tel" class="ng-binding">${tel}</p>
    <a target="_blank" class="flex" href="${site}">
    <img class="sprite-map " src="../img/localizacao.png" alt="">
    Ver
        no
        Google Maps</a>
        `
    
    mainBloodCenters.appendChild(card)

}

async function exposeBloodCenters() {
    const state = stateSelect.options[stateSelect.selectedIndex].value;
    const data = await fetchData();

    let states = data.states.flatMap(est => est.states);
    if (state) {
        states = states.filter(est => est.name === state);
    }

    states.forEach(est => {
        est.unity.forEach(unit => {
            createCard(est.name, unit.title, unit.the_content, unit.tel, unit.map);
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

stateSelect.addEventListener('change', () => {
    apagarCards()
    exposeBloodCenters()
})
