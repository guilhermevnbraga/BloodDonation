const mainBloodCenters = document.querySelector('.main__hemocentros')
const estateSelect = document.querySelector('#estado')

let value = estateSelect.options[estateSelect.selectedIndex].value
console.log(value)
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
    let state = estateSelect.options[estateSelect.selectedIndex].value
    const data = await fetchData()
    console.log(data)
    if (state == '') {
        for (let i = 0; i < data.estados.length; ++i) {
            for (let k = 0; k < data.estados[i].estados.length; ++k) {
                for (let j = 0; j < data.estados[i].estados[k].unidades.length; ++j) {
                    console.log(j)
                    createCard(data.estados[i].estados[k].nome, data.estados[i].estados[k].unidades[j].title, data.estados[i].estados[k].unidades[j].the_content, data.estados[i].estados[k].unidades[j].tel, data.estados[i].estados[k].unidades[j].map)
                }
            }
        }
    }else{
        for(let i=0; i < data.estados.length;++i){
            for(let k =0; k <data.estados[i].estados.length;++k){
                if(state == data.estados[i].estados[k].nome ){
                    for(let j =0; j <data.estados[i].estados[k].unidades.length;++j){
                        console.log(j)
                        createCard(data.estados[i].estados[k].nome,data.estados[i].estados[k].unidades[j].title,data.estados[i].estados[k].unidades[j].the_content,data.estados[i].estados[k].unidades[j].tel,data.estados[i].estados[k].unidades[j].map)
                    }
                    break
                }
            }
        }
    }

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