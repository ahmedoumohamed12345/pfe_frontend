window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded'
    window.location.reload()
  }
}
function kkol() {
  window.open(document.getElementById('lien').value)
}
const navId = document.getElementById('nav_menu'),
  ToggleBtnId = document.getElementById('toggle_btn'),
  CloseBtnId = document.getElementById('close_btn')
console.log(localStorage.getItem('my'))
var bbb = sessionStorage.getItem('nn')
xx = bbb
// if (window.performance) {
//   console.info('window.performance works fine on this browser')
// }

// console.info(performance.navigation.type)
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
console.log(xx)
fetch('http://localhost:8080/fclient?idc=' + xx, {
  method: 'POST',
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)

    document.getElementById('nom').innerHTML = json.nom
    document.getElementById('prenom').innerHTML = json.prenom
    document.getElementById('mail').innerHTML = json.mail
    document.getElementById('tel').innerHTML = json.tel
    document.getElementById('natio').innerHTML = json.daten
    document.getElementById('nationa').innerHTML = json.natio
    document.getElementById('typeid').innerHTML = json.typeid
    document.getElementById('numid').innerHTML = json.numid
    document.getElementById('idmg').innerHTML = json.idmg

    //   console.log('huhu')

    //   document.getElementById('llien').style.display = 'block'
    // }
  })
fetch('http://localhost:8080/getdd?idc=' + xx, {
  method: 'POST',
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    document.getElementById('statud').innerHTML = json.statud
    console.log(json.lien)
    document.getElementById('statur').innerHTML = json.rendezvous
    if (json.lien != null && json.lien != '') {
      document.getElementById('llien').style.display = 'block'
      document.getElementById('pipi').innerHTML = json.lien
    }
  })
const imageUrl = 'http://localhost:8080/getclientimg?id=' + xx

;(async () => {
  const response = await fetch(imageUrl)

  const imageBlob = await response.blob()
  const reader = new FileReader()
  reader.readAsDataURL(imageBlob)
  reader.onloadend = () => {
    const base64data = reader.result

    document.getElementById('idmg').src = base64data
  }
})()
// } else {
//   fetch('http://localhost:8080/fclient?idc=' + x, {
//     method: 'POST',
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json)
//       document.getElementById('nom').innerHTML = json.nom
//       document.getElementById('prenom').innerHTML = json.prenom
//       document.getElementById('mail').innerHTML = json.mail
//       document.getElementById('tel').innerHTML = json.tel
//       document.getElementById('natio').innerHTML = json.natio
//       document.getElementById('typeid').innerHTML = json.typeid
//       document.getElementById('numid').innerHTML = json.numid
//       document.getElementById('idmg').innerHTML = json.idmg
//       document.getElementById('see').innerHTML = json.id
//     })
// }
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

function kji() {
  document.getElementById('modif').style.display = 'none'
  document.getElementById('statur').style.display = 'none'
  document.getElementById('rrr').style.display = 'block'
  document.getElementById('enrrr').style.display = 'block'
}
function kkgi() {
  var cv = document.getElementById('rrr').value
  console.log(cv)
  var data = new FormData()
  console.log(xx)
  data.append('idc', xx)
  data.append('rendez', cv)
  fetch('http://localhost:8080/modifierrr', {
    method: 'POST',
    body: data,
  })
    .then((response) => response.text())
    .then((text) => {})
  document.location.reload()
}
function kkol() {
  var cc = document.getElementById('pipi')
  console.log(cc.textContent)
  window.open(cc.textContent)
}
