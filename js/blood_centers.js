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
