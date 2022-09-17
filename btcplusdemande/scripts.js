let y = 0
let z = 0
var cn = localStorage.getItem('sla')
var cbg = localStorage.getItem('enter')
var ee = localStorage.getItem('ee')
var m1 = localStorage.getItem('mm')
console.log(ee)
console.log(m1)
$(document).ready(function () {
  var base_color = 'rgb(230,230,230)'
  var active_color = '#673AB7'

  var child = 1
  var length = $('section').length - 1
  $('#prev').addClass('disabled')
  $('#submit').addClass('disabled')

  $('section').not('section:nth-of-type(1)').hide()
  $('section')
    .not('section:nth-of-type(1)')
    .css('transform', 'translateX(100px)')

  var svgWidth = length * 200 + 24
  $('#svg_wrap').html(
    '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
      svgWidth +
      ' 24" xml:space="preserve"></svg>'
  )

  function makeSVG(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag)
    for (var k in attrs) el.setAttribute(k, attrs[k])
    return el
  }

  for (i = 0; i < length; i++) {
    var positionX = 12 + i * 200
    var rect = makeSVG('rect', { x: positionX, y: 9, width: 200, height: 6 })
    document.getElementById('svg_form_time').appendChild(rect)
    // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
    var circle = makeSVG('circle', {
      cx: positionX,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6,
    })
    document.getElementById('svg_form_time').appendChild(circle)
  }

  var circle = makeSVG('circle', {
    cx: positionX + 200,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6,
  })
  document.getElementById('svg_form_time').appendChild(circle)

  $('#svg_form_time rect').css('fill', base_color)
  $('#svg_form_time circle').css('fill', base_color)
  $('circle:nth-of-type(1)').css('fill', active_color)

  $('.button').click(function () {
    $('#svg_form_time rect').css('fill', active_color)
    $('#svg_form_time circle').css('fill', active_color)
    var id = $(this).attr('id')

    if (id == 'next') {
      a = 1

      if (y == 0) {
        a = 0
        if ($('#d_natio :selected').text() == 'nationalite') {
          document.querySelector('.d_natio_vide').innerHTML =
            ' veillez choisir natio'

          a = 1
        } else {
          document.querySelector('.d_natio_vide').innerHTML = ' '
        }
        if (document.getElementById('d_nom').value == '') {
          document.getElementById('d_nom').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_nom').style.borderColor = 'lightgrey'
        }
        if (document.getElementById('d_prenom').value == '') {
          document.getElementById('d_prenom').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_prenom').style.borderColor = 'lightgrey'
        }
        if (document.getElementById('d_birth').value == '') {
          document.getElementById('d_birth').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_birth').style.borderColor = 'lightgrey'
        }
        if ($('#tp1 :selected').val() == 'r') {
          document.querySelector('.tp_vide').innerHTML =
            ' veillez choisir type de id'
          a = 1
        } else {
          document.querySelector('.tp_vide').innerHTML = ' '
        }

        if (document.getElementById('d_n_id').value == '') {
          document.getElementById('d_n_id').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_n_id').style.borderColor = 'lightgrey'
        }
        // if (document.getElementById('d_n_tel').value == '') {
        //   document.getElementById('d_n_tel').style.borderColor = 'red'

        //   a = 1
        // } else {
        //   document.getElementById('d_n_tel').style.borderColor = 'lightgrey'
        // }
        // if (document.getElementById('d_mail').value == '') {
        //   document.getElementById('d_mail').style.borderColor = 'red'

        //   a = 1
        // } else {
        //   document.getElementById('d_mail').style.borderColor = 'lightgrey'
        // }
        // fetch(
        //   'http://localhost:8080/testmailo?mail=' +
        //     document.getElementById('d_mail').value,
        //   {
        //     method: 'POST',
        //     body: data,
        //   }
        // )
        //   .then((response) => response.text())
        //   .then((text) => {
        //     console.log(text)
        //     if (text == 'true') {
        //       Swal.fire(
        //         'email deja enregistre comme un client b2c'
        //         // 'vous serais envoyez pour completes votre demande'
        //       ).then((result) => {
        //         if (result.isConfirmed) {
        //           window.open('../b2c_perso/steps.pro.html', '_self')
        //         } else {
        //           window.open('../b2c_perso/steps.pro.html', '_self')
        //         }
        //       })
        //     }
        //   })
      }
      if (y == 1) {
        a = 0

        if (document.getElementById('e_r_s').value == '') {
          document.getElementById('e_r_s').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('e_r_s').style.borderColor = 'lightgrey'
        }
        if ($('#e_p_e :selected').val() == 'x') {
          document.querySelector('.e_p_e_vide').innerHTML =
            ' veillez choisir natio'

          a = 1
        } else {
          document.querySelector('.e_p_e_vide').innerHTML = ' '
        }
        if (document.getElementById('e_m_f').value == '') {
          document.getElementById('e_m_f').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('e_m_f').style.borderColor = 'lightgrey'
        }
      }
      if (y == 2) {
        a = 0
        document.getElementById('e_c_f_vide').innerHTML = ''
        document.getElementById('e_rne_vide').innerHTML = ''

        let dc = document.getElementById('e_rne').files.length
        console.log(dc)
        if (dc == 0) {
          a = 1
          document.getElementById('e_rne_vide').innerHTML = 'peut pas etre vide'
        } else {
          let v = document.getElementById('e_rne').files[0].size
          if (v >= 10000) {
            a = 1
            document.getElementById('e_rne_vide').innerHTML =
              'Taille max : 500KO'
          }
        }
        let dl = document.getElementById('e_c_f').files.length

        if (dl == 0) {
          a = 1
          document.getElementById('e_c_f_vide').innerHTML = 'peut pas etre vide'
        } else {
          let valeur = document.getElementById('e_c_f').files[0].size
          if (valeur >= 10000) {
            a = 1
            document.getElementById('e_c_f_vide').innerHTML =
              'Taille max : 500KO'
          }
        }
      }
      if (y == 3) {
        if ($('#tp :selected').val() == 'Oui') {
          a = 0
        }
        if ($('#tp :selected').val() == 'Non') {
          a = 0
          if ($('#r_natio :selected').text() == 'nationalite') {
            document.querySelector('.r_natio_vide').innerHTML =
              ' veillez choisir natio'

            a = 1
          } else {
            document.querySelector('.r_natio_vide').innerHTML = ' '
          }
          if (document.getElementById('r_nom').value == '') {
            document.getElementById('r_nom').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_nom').style.borderColor = 'lightgrey'
          }
          if (document.getElementById('r_prenom').value == '') {
            document.getElementById('r_prenom').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_prenom').style.borderColor = 'lightgrey'
          }
          if (document.getElementById('r_birth').value == '') {
            document.getElementById('r_birth').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_birth').style.borderColor = 'lightgrey'
          }
          if ($('#tp2 :selected').val() == 'r') {
            console.log('nerere')
            document.querySelector('.tp2_vide').innerHTML =
              ' veillez choisir type de id'
            a = 1
          } else {
            document.querySelector('.tp2_vide').innerHTML = ' '
          }
          if (document.getElementById('r_id').value == '') {
            document.getElementById('r_id').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_id').style.borderColor = 'lightgrey'
          }
          if (document.getElementById('r_tel').value == '') {
            document.getElementById('r_tel').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_tel').style.borderColor = 'lightgrey'
          }
          if (document.getElementById('r_mail').value == '') {
            document.getElementById('r_mail').style.borderColor = 'red'

            a = 1
          } else {
            document.getElementById('r_mail').style.borderColor = 'lightgrey'
          }
        }
      }
      if (y == 4) {
        a = 0

        document.getElementById('r_file_id_vide').innerHTML = ''

        let dc = document.getElementById('r_file_id').files.length
        console.log(dc)
        if (dc == 0) {
          a = 1
          document.getElementById('r_file_id_vide').innerHTML =
            'peut pas etre vide'
        } else {
          let v = document.getElementById('r_file_id').files[0].size
          if (v >= 10000) {
            a = 1
            document.getElementById('r_file_id_vide').innerHTML =
              'Taille max : 500KO'
          }
        }
      }

      if (y == 5) {
        a = 0
        document.getElementById('accepta').style.borderColor = 'lightgrey'
        if (document.getElementById('accepta').checked == false) {
          document.getElementById('accepta').style.borderColor = 'red'
          a = 1
        }
      }

      if (y == 6) {
        a = 0
      }
      if (a == 0) {
        console.log(y)
        y = y + 1

        $('#prev').removeClass('disabled')
        if (child > length) {
          $(this).addClass('disabled')
          $('#submit').removeClass('disabled')
          const r_file_id = document.getElementById('r_file_id')
          const e_c_f = document.getElementById('e_c_f')
          const e_rne = document.getElementById('e_rne')
          if ($('#tp :selected').val() == 'Oui') {
            document.getElementById('r_nom').value =
              document.getElementById('d_nom').value
            document.getElementById('r_prenom').value =
              document.getElementById('d_prenom').value
            document.getElementById('r_birth').value =
              document.getElementById('d_birth').value
            var rnatio = $('#d_natio :selected').text()
            var rtpid = $('#tp1 :selected').text()
            document.getElementById('r_id').value =
              document.getElementById('d_n_id').value
            document.getElementById('r_tel').value = ee
            document.getElementById('r_mail').value = m1
            var m51 = document.getElementById('r_nom').value
            var m61 = document.getElementById('r_prenom').value
            var m71 = document.getElementById('r_birth').value
            var m81 = document.getElementById('r_id').value
            var m91 = document.getElementById('r_tel').value
            var m212 = document.getElementById('r_mail').value
          }
          if ($('#tp :selected').val() == 'Non') {
            var m51 = document.getElementById('r_nom').value
            var m61 = document.getElementById('r_prenom').value
            var m71 = document.getElementById('r_birth').value
            var m81 = document.getElementById('r_id').value
            var m91 = document.getElementById('r_tel').value
            var m212 = document.getElementById('r_mail').value
            var rnatio = $('#r_natio :selected').text()
            var rtpid = $('#tp2 :selected').text()
          }
          // var l = document.querySelector('.prix').innerHTML
          // var l1 = document.querySelector('.rat').value
          // var l2 = document.querySelector('.dl').value
          // var l3 = document.querySelector('.lm').value
          // var l4 = document.querySelector('.j').value
          // var l5 = document.querySelector('.prix_j').innerHTML
          console.log($('#d_natio :selected').text())
          var l6 = $('#d_natio :selected').text()
          var l7 = document.getElementById('d_nom').value
          var l8 = document.getElementById('d_prenom').value
          var l9 = document.getElementById('d_birth').value
          var l0 = $('#tp1 :selected').text()
          var m = document.getElementById('d_n_id').value
          // var m1 = document.getElementById('d_mail').value
          var m2 = document.getElementById('e_r_s').value
          var m3 = $('#e_p_e :selected').text()

          var m4 = document.getElementById('e_m_f').value
          // var ee = document.getElementById('d_n_tel').value
          var bibi = localStorage.getItem('myValue')
          //  alert('The Value Received is ' + bibi)
          // var ee = localStorage.getItem('ee')
          // var m1 = localStorage.getItem('m1')
          var dati = new FormData()

          dati.append('numid', m81)
          dati.append('typeid', rtpid)
          dati.append('natio', rnatio)
          dati.append('enter', m2)
          dati.append('date', m71)
          dati.append('nom', m51)
          dati.append('prenom', m61)
          dati.append('mail', m212)
          dati.append('tel', m91)

          fetch('http://localhost:8080/addrep', {
            method: 'POST',
            body: dati,
          }).then((response) => response.json())

          var dodo = new FormData()
          dodo.append('image', r_file_id.files[0])
          dodo.append('nomimage', ' pièce didentité')
          dodo.append('nomcl', m1)
          fetch('http://localhost:8080/upload/image', {
            method: 'POST',
            body: dodo,
          }).then((response) => response.json())

          var dada = new FormData()
          dada.append('image', e_c_f.files[0])
          dada.append('nomimage', 'carte didentification fiscale')
          dada.append('nomcl', m1)
          fetch('http://localhost:8080/upload/image', {
            method: 'POST',
            body: dada,
          }).then((response) => response.json())

          var titi = new FormData()
          titi.append('image', e_rne.files[0])
          titi.append('nomimage', 'RNE')
          titi.append('nomcl', m1)
          fetch('http://localhost:8080/upload/image', {
            method: 'POST',
            body: titi,
          }).then((response) => response.json())
          var ee = localStorage.getItem('ee')
          var today = new Date()
          var dele =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()

          var today = new Date()
          var ddi =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
          var data = new FormData()
          data.append('matricule', m4)
          data.append('numid', m)
          data.append('typeid', l0)
          data.append('natio', l6)
          data.append('paysenrg', m3)
          data.append('enter', cbg)
          console.log(document.getElementById('e_r_s').value)
          data.append('raison', document.getElementById('e_r_s').value)
          data.append('date', l9)
          data.append('nom', l7)
          data.append('prenom', l8)
          data.append('type', 'B2C+PRO')
          data.append('mail', m1)
          data.append('tel', ee)
          data.append('sla', cn)
          data.append('today', ddi)
          fetch('http://localhost:8080/btcplusdemande', {
            method: 'POST',
            body: data,
          })
            .then((response) => response.text())
            .then((text) => {
              if (text == 'complited') {
                var aki = text
                Swal.fire(
                  'Felistation!',
                  'Votre demande est complet',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed) {
                    window.open('../page16/index.html', '_self')
                  } else {
                    window.open('../page16/index.html', '_self')
                  }
                })
              } else {
                var aki = text
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: aki,
                })
              }
            })
        }

        if (child <= length) {
          child++
        }
      }
    } else if (id == 'prev') {
      $('#next').removeClass('disabled')
      $('#submit').addClass('disabled')
      y = y - 1
      console.log('nerele bb')
      if (child <= 2) {
        $(this).addClass('disabled')
      }
      if (child > 1) {
        child--
      }
    }
    var circle_child = child + 1
    $('#svg_form_time rect:nth-of-type(n + ' + child + ')').css(
      'fill',
      base_color
    )
    $('#svg_form_time circle:nth-of-type(n + ' + circle_child + ')').css(
      'fill',
      base_color
    )
    var currentSection = $('section:nth-of-type(' + child + ')')
    currentSection.fadeIn()
    currentSection.css('transform', 'translateX(0)')
    currentSection.prevAll('section').css('transform', 'translateX(-100px)')
    currentSection.nextAll('section').css('transform', 'translateX(100px)')
    $('section').not(currentSection).hide()
  })
})
// function f5() {
//   var a = document.querySelector('.rat')
//   var b = a.value
//   var c = document.querySelector('.dl')
//   var d = c.value
//   var e = document.querySelector('.lm')
//   var f = e.value
//   if (b == '') {
//     b = 0
//   }
//   if (d == '') {
//     d = 0
//   }
//   if (f == '') {
//     f = 0
//   }

//   var r = parseInt(b) * 60 + parseInt(d) * 45 + parseInt(f) * 20
//   // console.log(r)
//   document.querySelector('.prix').innerHTML = r + 'DN'
// }
// function f7() {
//   var a = document.querySelector('.j')
//   var b = a.value
//   if (b == '') {
//     b = 0
//   }

//   var r = parseInt(b) * 2

//   document.querySelector('.prix_j').innerHTML = r + 'DN'
//   console.log(toString(document.querySelector('.prix_j')))
// }
function f1() {
  var getValue = document.getElementById('tp').selectedOptions[0].value

  if (getValue == 'Oui') {
    document.getElementById('n').style.display = 'none'
    // document.getElementById('r_nom').value =

    // var e = document.getElementById('r_nom').value
  }
  if (getValue == 'Non') {
    document.getElementById('n').style.display = 'block'
  }
}
// function myf() {}
