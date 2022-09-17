const navId = document.getElementById('nav_menu'),
  ToggleBtnId = document.getElementById('toggle_btn'),
  CloseBtnId = document.getElementById('close_btn')

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener('click', () => {
  navId.classList.add('show')
})

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener('click', () => {
  navId.classList.remove('show')
})

// ==== Animate on Scroll Initialize  ==== //
AOS.init()

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from('.logo', {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
})
// ==== NAV-MENU ==== //
gsap.from('.nav_menu_list .nav_menu_item', {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
})
// ==== TOGGLE BTN ==== //
gsap.from('.toggle_btn', {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
})
// ==== MAIN HEADING  ==== //
gsap.from('.main-heading', {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
})
// ==== INFO TEXT ==== //
gsap.from('.info-text', {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
})
// ==== CTA BUTTONS ==== //
gsap.from('.btn_wrapper', {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
})
// ==== TEAM IMAGE ==== //
gsap.from('.team_img_wrapper img', {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
})
function handleChange(checkbox) {
  if (checkbox.checked == true) {
    document.getElementById('p_scents').style.display = 'none'
    document.getElementById('apii').innerHTML =
      'http://localhost:8080/ajouterenter?=' +
      document.getElementById('raison').value
    document.getElementById('apii').style.display = 'block'
  } else {
    document.getElementById('apii').style.display = 'none'
    document.getElementById('p_scents').style.display = 'block'
  }
}
