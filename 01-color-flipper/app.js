const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

const onButtonClick = function () {
  const randomNumber = Math.floor(Math.random() * colors.length);

  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
};

btn.addEventListener('click', onButtonClick);
