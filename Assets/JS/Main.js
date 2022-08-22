const navToggle = document.querySelector("#nav-toggle")

const navMenu = document.querySelector("#nav-menu")

const navClose = document.querySelector("#nav-close")

navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu")
})

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})

// Change Background On Scroll ===================

const header = document.querySelector("#header")

function changeHeaderColor() {
  if (this.scrollY >= 200) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}

window.addEventListener("scroll", changeHeaderColor)

// Swiper JS ============================

var swiper = new Swiper(".popular_container", {
  pagination: {
    el: ".swiper-pagination",
  },
})

// Scroll-Up ===========
var scrollUp = document.getElementById("scrollup")

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.documentElement.scrollTop > 1000) {
    scrollUp.style.display = "block"
  } else {
    scrollUp.style.display = "none"
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

// Scroll Animation

const Sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
})

Sr.reveal(".home_sub")
Sr.reveal(".home_title", { delay: 500 })
Sr.reveal(".home_description", { delay: 600 })
Sr.reveal(".home-btn", { delay: 700 })
