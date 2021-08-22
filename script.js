const ham = document.getElementById('ham');
const show = document.getElementById('show');

ham.addEventListener ('click', () => {
  console.log('whoody');
 
  show.classList.toggle("appear");
  ham.classList.toggle("appear");
});