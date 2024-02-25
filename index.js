
const btnStopAnimation = document.getElementById('btn-stop-animation');

const btnAdd = document.getElementById('btn-add');

btnStopAnimation.addEventListener('click', () => {
  document.getElementById('alarm-clock').style.animation = 'none';
});

btnAdd.addEventListener('click', () => {
  const formContainer = document.getElementById('form-container');
  formContainer.style.display = 'block';
});





