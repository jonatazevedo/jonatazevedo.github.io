const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`;
});