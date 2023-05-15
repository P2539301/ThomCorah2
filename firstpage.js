
const background = document.querySelector('.background');


let position = 0;
let direction = 2;


const speed = 2;

function animateBackground() {

  position += direction * speed;


  if (position >= window.innerHeight || position <= 0) {
    direction *= 1;
  }


  background.style.backgroundPosition = `0 ${position}px`;


  requestAnimationFrame(animateBackground);
}


animateBackground();

document.getElementById('enter-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.body.classList.add('transition-slide-out');
  setTimeout(function() {
    window.location.href = 'secondpage.html';
  }, 500);
});

