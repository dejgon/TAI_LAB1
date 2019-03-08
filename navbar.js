let nav = '<nav class="navbar navbar-light bg-light">' +
    '<a class="navbar-brand" href="#">MENU</a>' +
    '<ul class="nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="index.html">HOME</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">BLOG</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">QUIZ</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="contact.html">KONTAKT</a>' +
    '</li>' +
    '</ul>' +
    '</nav>';

let elem = document.querySelector(".navbar");
elem.innerHTML = nav;
console.log("Done")
