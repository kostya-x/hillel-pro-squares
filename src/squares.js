const defaultSquaresNumber = 5;

function createSquares(number = defaultSquaresNumber) {
  const $squareHolder = document.createElement('table');
  const $caption = document.createElement('caption');

  $caption.textContent = 'Просто увеличение на 1 при клике';
  $squareHolder.appendChild($caption);

  for(let i = 0; i < number; i++) {
    const $square = document.createElement('td');
    $square.textContent = 0;
    $square.classList.add('square', 'simple-square');
    $squareHolder.appendChild($square);
  }
  return $squareHolder.outerHTML;
}

function createSquaresWithButtons(number = defaultSquaresNumber) {
  const $squareHolder = document.createElement('table');
  const $caption = document.createElement('caption');

  $caption.textContent = '* квадраты с кнопками +/-';
  $squareHolder.appendChild($caption);

  for(let i = 0; i < number; i++) {
    const $square = document.createElement('td');
    const $p = document.createElement('p');
    const $plusButton = document.createElement('button');
    const $minusButton = document.createElement('button');
    $p.textContent = 0;
    $square.appendChild($p);
    $square.classList.add('square', 'button-square');
    $squareHolder.appendChild($square);
    $plusButton.textContent = '+';
    $minusButton.textContent = '-';
    $plusButton.classList.add('plus-button');
    $minusButton.classList.add('minus-button');
    $square.appendChild($plusButton);
    $square.appendChild($minusButton);
  }
  return $squareHolder.outerHTML;
}

function createColorSquares(number = defaultSquaresNumber) {
  const $squareHolder = document.createElement('table');
  const $caption = document.createElement('caption');

  $caption.textContent = 'Смена цвета при клике';
  $squareHolder.appendChild($caption);

  for(let i = 0; i < number; i++) {
    const $square = document.createElement('td');
    $square.classList.add('square', 'change-color', 'color-blue');
    $squareHolder.appendChild($square);
  }
  return $squareHolder.outerHTML;
}

document.body.innerHTML += createSquares();
document.body.innerHTML += createSquaresWithButtons();
document.body.innerHTML += createColorSquares();