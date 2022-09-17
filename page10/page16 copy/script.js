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
var xx = localStorage.getItem('ddd')
console.log('ddd=' + xx)
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
    console.log('njnj' + json)
    document.getElementById('statur').innerHTML = json.rendezvous
    document.getElementById('lien').innerHTML = json.lien
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
function gb() {
  document.getElementById('lien').style.display = 'none'
  document.getElementById('mmdf').style.display = 'none'
  document.getElementById('llien').style.display = 'block'
  document.getElementById('enrg').style.display = 'block'
  console.log(localStorage.getItem('ddd'))
}

function gf() {
  var data = new FormData()
  data.append('idc', xx)
  data.append('lien', document.getElementById('llien').value)

  fetch('http://localhost:8080/ajouterlien', {
    method: 'POST',
    body: data,
  })
    .then((response) => response.text())
    .then((text) => {})
  document.location.reload()
}
function CreatePDFfromHTML() {
  var HTML_Width = $('#about').width()
  var HTML_Height = $('#about').height()
  var top_left_margin = 15
  var PDF_Width = HTML_Width + top_left_margin * 2
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2
  var canvas_image_width = HTML_Width
  var canvas_image_height = HTML_Height

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1

  html2canvas($('#about')[0]).then(function (canvas) {
    var imgData = canvas.toDataURL('image/jpeg', 1.0)
    var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height])
    pdf.addImage(
      imgData,
      'JPG',
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    )
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height)
      pdf.addImage(
        imgData,
        'JPG',
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      )
    }
    pdf.save('Your_PDF_Name.pdf')
    $('.html-content').hide()
  })
}

function fgf() {
  var dc = document.getElementById('vii').files.length
  if (dc == 0) {
    Swal.fire('veillez ajouter enregistrement video')
  } else {
    Swal.fire('Demande envoie')
  }
}
