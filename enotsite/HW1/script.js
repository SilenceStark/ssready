let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
    page.classList.toggle('dark-theme');
};
let testButton = document.querySelector('.test-button');
let test2Button = document.querySelector('.test2-button');
let message = document.querySelector('.section-title')
testButton.onclick = function() {
    message.textContent = 'Я необычный Енот';
};
test2Button.onclick = function() {
    message.textContent = 'Я Эпический Енот!';
};
