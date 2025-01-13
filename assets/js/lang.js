const subtituloHab = document.querySelector('.subtituloSecao.hab');
const cardHabilidades = document.querySelectorAll('.cardHabilidades')

cardHabilidades.forEach(card => {
    card.addEventListener('mouseover', () => {
        subtituloHab.textContent = card.getAttribute('data-descricao');
    });

    card.addEventListener('mouseout', () => {
        subtituloHab.textContent = 'Passe o cursor do mouse nas habilidades para interação.'
    });

});