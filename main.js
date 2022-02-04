
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggle) {
navToggle.addEventListener('click', () =>{
navMenu.classList.add("show-menu")
})
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
})
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName("commands_content"),
  skillsHeader = document.querySelectorAll(".commands_header")

function toggleSkills() {
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "commands_content commands_close"
  }
  if(itemClass === "commands_content commands_close") {
    this.parentNode.className = "commands_content commands_open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills)
})


    let swiper = new Swiper('.developer_container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      /*mousewheel: true,
      keyboard: true, */
    });

const typed = new Typed(".auto-input", {
  strings: ["A gaming",],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
