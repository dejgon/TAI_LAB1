let nav = '<nav class="navbar navbar-light bg-light">' +
    '<a class="navbar-brand" href="#">MENU</a>' +
    '<ul class="nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="index.html">HOME</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="">BLOG</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="quiz.html">QUIZ</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="contact.html">KONTAKT</a>' +
    '</li>' +
    '</ul>' +
    '</nav>';

let elem = document.querySelector('.navbar');
elem.innerHTML = nav;
console.log("Done");
let scrollBtn = document.querySelector('.scrollBtn');
let scroll = document.querySelector('.scroll');

scroll.addEventListener('click', topFunction);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scroll.style.display = "block";
    } else {
      scroll.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
