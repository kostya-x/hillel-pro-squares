const $squares = document.querySelectorAll('.simple-square');
const $plusButton = document.querySelectorAll('.plus-button');
const $minusButton = document.querySelectorAll('.minus-button');
const $colorSquares = document.querySelectorAll('.change-color');
const $shiftSquares = document.querySelectorAll('.shifter');

$squares.forEach(sqr => {
  sqr.addEventListener('click', increseNumber);
});

$plusButton.forEach(sqr => {
  sqr.addEventListener('click', increseNumberButton);
});

$minusButton.forEach(sqr => {
  sqr.addEventListener('click', decreaseNumberButton);
});

$colorSquares.forEach(sqr => {
  sqr.addEventListener('click', changeColor);
});

$shiftSquares.forEach(sqr => {
  sqr.addEventListener('click', shiftSquare);
});

function increseNumber(e) {
  e.target.textContent = +e.target.textContent + 1;
}

function increseNumberButton(e) {
  e.target.parentElement.firstChild.textContent = +e.target.parentElement.firstChild.textContent + 1;
}

function decreaseNumberButton(e) {
  e.target.parentElement.firstChild.textContent = +e.target.parentElement.firstChild.textContent - 1;
}

function changeColor(e) {
  if (e.target.classList.contains('color-blue')) {
    e.target.classList.remove('color-blue');
    e.target.classList.add('color-green');
  } else if (e.target.classList.contains('color-green')) {
    e.target.classList.remove('color-green');
    e.target.classList.add('color-yellow');
  } else if (e.target.classList.contains('color-yellow')) {
    e.target.classList.remove('color-yellow');
    e.target.classList.add('color-blue');
  }
}