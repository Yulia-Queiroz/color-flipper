const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
  }
  content.forEach(function (article) {
    article.classList.remove('active');
  });
  const element = document.getElementById(id);
  element.classList.add('active');
});

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (event) {
//     event.currentTarget.classList.toggle('active');

//     btns.forEach(function (checkBtn) {
//       if (btn !== checkBtn) {
//         checkBtn.classList.remove('active');
//       }
//     });

//     const btnId = event.currentTarget.dataset.id;

//     content.forEach(function (contentItem) {
//       contentItem.classList.remove('active');
//       const element = document.getElementById(btnId);
//       element.classList.add('active');
//     });
//   });
// });
