document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const temporadasList = document.querySelector('.temporadas');
    const icon = document.querySelector('.toggle-button .icon');

    toggleButton.addEventListener('click', function() {
        const displayStyle = window.getComputedStyle(temporadasList).display;
        if (displayStyle === 'none' || temporadasList.style.display === '') {
            temporadasList.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima
        } else {
            temporadasList.style.display = 'none';
            icon.style.transform = 'rotate(90deg)'; // Seta para baixo
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.elenco-button');
    const elenco = document.querySelector('.elenco');
    const icon = document.querySelector('.elenco-button .icon');

    toggleButton.addEventListener('click', function() {
        const displayStyle = window.getComputedStyle(elenco).display;
        if (displayStyle === 'none' || elenco.style.display === '') {
            elenco.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima
        } else {
            elenco.style.display = 'none';
            icon.style.transform = 'rotate(90deg)'; // Seta para baixo
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.elementos-button');
    const elementos = document.querySelector('.elementos');
    const icon = document.querySelector('.elementos-button .icon');

    toggleButton.addEventListener('click', function() {
        const displayStyle = window.getComputedStyle(elementos).display;
        if (displayStyle === 'none' || elementos.style.display === '') {
            elementos.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima
        } else {
            elementos.style.display = 'none';
            icon.style.transform = 'rotate(90deg)'; // Seta para baixo
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.producao-button');
    const producao = document.querySelector('.producao');
    const icon = document.querySelector('.producao-button .icon');

    toggleButton.addEventListener('click', function() {
        const displayStyle = window.getComputedStyle(producao).display;
        if (displayStyle === 'none' || producao.style.display === '') {
            producao.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima
        } else {
            producao.style.display = 'none';
            icon.style.transform = 'rotate(90deg)'; // Seta para baixo
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.recep-button');
    const recepcao = document.querySelector('.recep');
    const icon = document.querySelector('.recep-button .icon');

    toggleButton.addEventListener('click', function() {
        const displayStyle = window.getComputedStyle(recepcao).display;
        if (displayStyle === 'none' || recepcao.style.display === '') {
            recepcao.style.display = 'block';
            icon.style.transform = 'rotate(180deg)'; // Rotaciona a seta para cima
        } else {
            recepcao.style.display = 'none';
            icon.style.transform = 'rotate(90deg)'; // Seta para baixo
        }
    });
});

