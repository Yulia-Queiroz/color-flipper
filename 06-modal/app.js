// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', onModalBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);
modalOverlay.addEventListener('click', onOverlayClick);

function onModalBtnClick() {
  window.addEventListener('keydown', onEscKeyPress);
  modalOverlay.classList.add('open-modal');
}

function onCloseBtnClick() {
  window.removeEventListener('keydown', onEscKeyPress);
  modalOverlay.classList.remove('open-modal');
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    modalOverlay.classList.remove('open-modal');
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick();
  }
}
