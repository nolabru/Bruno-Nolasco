const setaDireita = document.querySelector(".imgSeta.direita");
const setaEsquerda = document.querySelector(".imgSeta.esquerda");
const projetosPrincipal = document.querySelector(".projetosPrincipal");
const projetosSecundario = document.querySelector(".projetosPrincipal.dois");

setaDireita.addEventListener('click', () => {
    projetosPrincipal.classList.add('active');
    projetosSecundario.classList.add('active');
});

setaEsquerda.addEventListener('click', () => {
    projetosPrincipal.classList.remove('active');
    projetosSecundario.classList.remove('active');
});

const body = document.body;
const infos = document.querySelectorAll('.infos');
const bgInfos = document.querySelectorAll('.bgInfos');

const cards = [
    { infoClass: '.infos.ax', bgClass: '.bgInfos.ax'},
    { infoClass: '.infos.dr', bgClass: '.bgInfos.dr'},
    { infoClass: '.infos.imc', bgClass: '.bgInfos.imc'},
    { infoClass: '.infos.cake', bgClass: '.bgInfos.cake'},
    { infoClass: '.infos.bel', bgClass: '.bgInfos.bel'},
    { infoClass: '.infos.log', bgClass: '.bgInfos.log'}
];

cards.forEach(card => {
    const infosElement = document.querySelector(card.infoClass);
    const bgInfosElement = document.querySelector(card.bgClass);

    if (infosElement && bgInfosElement) {
        infosElement.addEventListener('click', () => {
            bgInfosElement.classList.add('active');
            body.classList.add('active')
        });
    }
});

const closeCards = document.querySelectorAll('.close');
closeCards.forEach((closeCard, index) => {
    closeCard.addEventListener('click', () => {
        bgInfos[index].classList.remove('active');
        body.classList.remove('active')
    });
});
