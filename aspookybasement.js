const slowText = document.getElementById('slowText');

function showSentences() {
  const text = slowText.innerText;
  const sentences = text.split('.');
  let currentIndex = 0;

  slowText.classList.remove('hidden');
  slowText.innerText = sentences[currentIndex].trim();
  currentIndex++;

  slowText.addEventListener('click', function () {
    if (currentIndex < sentences.length) {
      slowText.innerText = sentences[currentIndex].trim();
      currentIndex++;
    } else {
      slowText.innerText = 'End of story.';
      slowText.removeEventListener('click', arguments.callee);
    }
  });
}

setTimeout(showSentences, 1000);


const clickTextElement = document.getElementById('clickText');


function hideHeader() {
  clickTextElement.style.display = 'none';
}


setTimeout(hideHeader, 7000);
