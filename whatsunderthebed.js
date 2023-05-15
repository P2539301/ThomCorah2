window.addEventListener('scroll', function() {
  var parallaxElements = document.querySelectorAll('.parallax-image');
  for (var element of parallaxElements) {
    var distanceFromTop = element.getBoundingClientRect().top;
    var elementSpeed = parseInt(element.getAttribute('data-speed'));
    element.style.transform = 'translateY(' + (-distanceFromTop * elementSpeed) + 'px)';
  }
});


var footer = document.getElementById("footer");
var link = document.getElementById("bottom-link");


window.addEventListener("scroll", function() {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {

    footer.style.display = "block";
    link.setAttribute("href", "secondpage.html");
  } else {

    footer.style.display = "none";
    link.removeAttribute("href");
  }
});
