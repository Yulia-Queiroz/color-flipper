const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

const onButtonClick = function () {
  let hexString = '#';

  for (let i = 0; i < 6; i += 1) {
    const randomNumber = getRandomNumber();
    hexString += hex[randomNumber];
  }
  color.textContent = hexString;
  document.body.style.backgroundColor = hexString;
};

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', onButtonClick);
