let bg = document.querySelector('.background');
let yPos = 0;
let ySpeed = 2;

function moveBackground() {
  yPos -= ySpeed;
  bg.style.backgroundPosition = `0px ${yPos}px`;
  requestAnimationFrame(moveBackground);
}

moveBackground();
