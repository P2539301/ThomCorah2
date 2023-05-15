const paragraphs = document.querySelectorAll('.clickable-paragraph');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url("images/ghost gif.gif")';
  });
});

setTimeout(() => {
  const footer = document.createElement('footer');
  const link = document.createElement('a');
  link.href = 'secondpage.html';
  link.textContent = 'Back To Home Page';
  footer.appendChild(link);
  document.body.appendChild(footer);
  footer.style.backgroundColor = 'black';
  footer.style.color = 'black';
}, 5000);
