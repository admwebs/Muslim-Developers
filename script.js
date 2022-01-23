const menu = document.querySelector(".menu");
const times = document.querySelector(".times");
const links = document.querySelector(".links");

menu.addEventListener("click", function () {
  times.style.display = "block";
  this.style.display = "none";
  links.style.display = "flex";
});

times.addEventListener("click", function () {
  this.style.display = "none";
  menu.style.display = "flex";
  links.style.display = "none";
});

// /////////////////////////////////

// window.addEventListener('scroll', function(){
//     let nav = document.querySelector('nav');
//     let position = window.scrollY > 50;
//     nav.classList.toggle('thescroll', position)

// })
