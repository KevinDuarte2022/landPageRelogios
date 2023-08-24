// Seletor do botão "Ver Relógios"
const ctaButton = document.querySelector('.cta-button');

// Função de rolagem suave ao clicar no botão "Ver Relógios"
ctaButton.
ctaButton

cta
addEventListener('click', function (event) {
    event.preventDefault();
    const section = document.querySelector('.featured-watches');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
});