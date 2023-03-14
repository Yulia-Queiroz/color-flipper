const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', onToggleBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onToggleBtnClick() {
  sidebar.classList.toggle('show-sidebar');
}

function onCloseBtnClick() {
  sidebar.classList.remove('show-sidebar');
}
