const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    question.classList.toggle('show-text');
    questions.forEach(function (checkQuestion) {
      if (checkQuestion !== question) {
        checkQuestion.classList.remove('show-text');
      }
    });
  });
});
