const searchIcon = document.querySelector('.btn');
const mainContainer = document.querySelector('.main-container');

searchIcon.addEventListener('click', () => {
    mainContainer.classList.toggle('active');
    input.focus();
})

const input = document.querySelector('.input');

