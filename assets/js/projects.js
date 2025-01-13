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
