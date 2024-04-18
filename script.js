// FUNÇÃO PARA ABRIR E FECHAR O MENU MOBILE
function openNavMobile() {
    var element = document.querySelector('.nav-mobile');
    var img = document.getElementById('hamburger');

    if (element.style.display === 'flex') {
        element.style.display = 'none';
        img.src = 'img/hamburger.png';
    } else {
        element.style.display = 'flex';
        img.src = 'img/cancel.png';
    }
}

// Adicione um evento de redimensionamento para atualizar o estado da navegação móvel
window.addEventListener('resize', function () {
    var elemento = document.querySelector('.nav-mobile');
    var img = document.getElementById('hamburger');

    if (window.innerWidth > 991) { // Verifica se a largura da janela é maior que 991px
        elemento.style.display = 'none';
        img.src = 'img/hamburger.png';
    }
});
