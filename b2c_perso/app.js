let y = 0
let z = 0

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
      a = 0

      if (y == 0) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        a = 0
        if ($('#r_nationilite :selected').text() == 'nationalite') {
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
          console.log('nerere')
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
        if (document.getElementById('d_n_tel').value == '') {
          document.getElementById('d_n_tel').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_n_tel').style.borderColor = 'lightgrey'
        }
        if (!document.getElementById('d_mail').value.match(mailformat)) {
          document.getElementById('d_mail').style.borderColor = 'red'
          a = 1
        } else {
          document.getElementById('d_mail').style.borderColor = 'lightgrey'
        }
        // if (document.getElementById('d_mail').value == '') {
        //   document.getElementById('d_mail').style.borderColor = 'red'

        //   a = 1
        // } else {
        //   document.getElementById('d_mail').style.borderColor = 'lightgrey'
        // }
        fetch(
          'http://localhost:8080/testalreqdy?mail=' +
            document.getElementById('d_mail').value,
          {
            method: 'POST',
            body: data,
          }
        )
          .then((response) => response.text())
          .then((text) => {
            if (text == '1') {
              Swal.fire('email deja utiliser').then((result) => {
                if (result.isConfirmed) {
                  window.open('../b2c_perso/steps.pro.html', '_self')
                } else {
                  window.open('../b2c_perso/steps.pro.html', '_self')
                }
              })
            }
          })
      }

      if (y == 1) {
        a = 0

        document.getElementById('e_rne_vide').innerHTML = ''

        let dc = document.getElementById('e_rne').files.length
        console.log(dc)
        if (dc == 0) {
          a = 1
          document.getElementById('e_rne_vide').innerHTML = 'peut pas etre vide'
        } else {
          let v = document.getElementById('e_rne').files[0].size
          if (v >= 500000) {
            a = 1
            document.getElementById('e_rne_vide').innerHTML =
              'Taille max : 500KO'
          }
        }
      }

      if (y == 3) {
        a = 0
        document.getElementById('accepta').style.borderColor = 'lightgrey'
        if (document.getElementById('accepta').checked == false) {
          document.getElementById('accepta').style.borderColor = 'red'
          a = 1
        }

        var l6 = $('#r_nationilite :selected').text()
        var l7 = document.getElementById('d_nom').value
        var l8 = document.getElementById('d_prenom').value
        var l9 = document.getElementById('d_birth').value
        var l0 = $('#tp1 :selected').text()
        var m = document.getElementById('d_n_id').value
        var m1 = document.getElementById('d_mail').value
        var ee = document.getElementById('d_n_tel').value
        var today = new Date()
        console.log($('#d_natio :selected').text())
        var ddi =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate()
        var data = new FormData()
        //

        data.append('id_client', '45')
        data.append('numid', m)
        data.append('typeid', l0)
        data.append('natio', l6)
        data.append('paysenrg', l6)
        data.append('datn', l9)
        data.append('nom', l7)
        data.append('prenom', l8)
        data.append('type', '')
        data.append('mail', m1)
        data.append('tel', ee)
        data.append('datd', ddi)
        data.append('statud', 'attend apple-video')
        data.append('statur', 'non-passe')
        var kkk = $('#sla :selected').text()
        data.append('sla', kkk)
        var kkkk = $('#rv :selected').text()
        data.append('Rendezvous', kkkk)
        data.append('type', 'non-prepaye-perso')
        var hu = e_rne.files[0]
        data.append('imageid', hu)
        fetch('http://localhost:8080/demnderperso', {
          method: 'POST',
          body: data,
        }).then((response) => response.text())
        fetch(
          'http://localhost:8080/testprepaye?mail=' +
            document.getElementById('d_mail').value,
          {
            method: 'POST',
            body: data,
          }
        )
          .then((response) => response.text())
          .then((text) => {
            if (text == '1') {
              Swal.fire(
                'vous benificier dune demande prepaye',
                'veillez saisir votre mail et numero telephone pour completer votre demande'
              ).then((result) => {
                if (result.isConfirmed) {
                  window.open('../logclient/index.html', '_self')
                } else {
                  window.open('../logclient/index.html', '_self')
                }
              })
            }
          })
        //   fetch(
        //     'http://localhost:8080/getclient?=' +
        //       document.getElementById('d_mail').value,
        //     {
        //       method: 'POST',
        //       body: data,
        //     }
        //   )
        //     .then((response) => response.json())
        //     .then((json) => {
        //       if (json != null) {
        //         var ane = json.id
        //         localStorage.setItem('my', ane)
        //         window.location.href = '../b2c_perso/page16/index.html'
        //       }
        //     })
      }
      a = 0
      if (a == 0) {
        console.log(y)
        y = y + 1

        $('#prev').removeClass('disabled')
        if (child > length) {
          $(this).addClass('disabled')
          $('#submit').removeClass('disabled')

          // var m5 = document.getElementById('r_nom').value
          // var m6 = document.getElementById('r_prenom').value
          // var m7 = document.getElementById('r_birth').value
          // var m8 = document.getElementById('r_id').value
          // var m9 = document.getElementById('r_tel').value
          // var m = document.getElementById('r_mail').value

          // var l = document.querySelector('.prix').innerHTML
          // var l1 = document.querySelector('.rat').value
          // var l2 = document.querySelector('.dl').value
          // var l3 = document.querySelector('.lm').value
          // var l4 = document.querySelector('.j').value
          // var l5 = document.querySelector('.prix_j').innerHTML
          // console.log($('#d_natio :selected').text())
          // var l6 = $('#d_natio :selected').text()
          // var l7 = document.getElementById('d_nom').value
          // var l8 = document.getElementById('d_prenom').value
          // var l9 = document.getElementById('d_birth').value
          // var l0 = $('#tp1 :selected').text()
          // var m = document.getElementById('d_n_id').value
          // var m1 = document.getElementById('d_mail').value
          // var ee = document.getElementById('d_n_tel').value
          // var today = new Date()

          // var ddi =
          //   today.getFullYear() +
          //   '/' +
          //   (today.getMonth() + 1) +
          //   '/' +
          //   today.getDate()
          // var data = new FormData()

          // data.append('numid', m)
          // data.append('typeid', l0)
          // data.append('natio', $('#d_natio :selected').text())
          // data.append('image_id', e_rne.files[0])

          // data.append('nom', l7)
          // data.append('prenom', l8)
          // data.append('type', 'B2C_PERSO')
          // data.append('mail', m1)
          // data.append('tel', ee)
          // data.append('datn', l9)
          // data.append('datd', ddi)
          // data.append('statud', 'attend apple_video')
          // data.append('statur', 'non_passe')
          // data.append('sla', $('#sla :selected').text())
          // data.append('Rendezvous', $('#rv :selected').text())
          // data.append('type', 'non_prepaye_perso')
          // fetch('http://localhost:8080/demnderperso', {
          //   method: 'POST',
          //   body: data,
          // }).then((response) => response.text())

          // // var dati = new FormData()

          // // dati.append('numid', m81)
          // // dati.append('typeid', rtpid)
          // // dati.append('natio', rnatio)
          // // dati.append('enter', m2)
          // // dati.append('date', m71)
          // // dati.append('nom', m51)
          // // dati.append('prenom', m61)
          // // dati.append('mail', m212)
          // // dati.append('tel', m91)
          // // fetch('http://localhost:8080/addrep', {
          // //   method: 'POST',
          // //   body: dati,
          // // }).then((response) => response.text())

          // // var dodo = new FormData()
          // // dodo.append('image', r_file_id.files[0])
          // // dodo.append('nomimage', ' pièce didentité')
          // // dodo.append('nomcl', m1)
          // // fetch('http://localhost:8080/upload/image', {
          // //   method: 'POST',
          // //   body: dodo,
          // // }).then((response) => response.json())

          // // var dada = new FormData()
          // // dada.append('image', e_c_f.files[0])
          // // dada.append('nomimage', 'carte didentification fiscale')
          // // dada.append('nomcl', m1)
          // // fetch('http://localhost:8080/upload/image', {
          // //   method: 'POST',
          // //   body: dada,
          // // })
          // //   .then((response) => response.json())
          // //   .then((json) => console.log(json))

          // // var titi = new FormData()
          // // titi.append('image', e_rne.files[0])
          // // titi.append('nomimage', 'RNE')
          // // titi.append('nomcl', m1)
          // // fetch('http://localhost:8080/upload/image', {
          // //   method: 'POST',
          // //   body: titi,
          // // })
          // //   .then((response) => response.json())
          // //   .then((json) => {
          // //     if (json.message == 'true') {
          // //       Swal.fire(
          // //         'Felistation!',
          // //         'Votre demande a eté emise avec succes',
          // //         'success'
          // //       ).then((result) => {
          // //         if (result.isConfirmed) {
          // //           window.open('../page16/index.html', '_self')
          // //         } else {
          // //           window.open('../page16/index.html', '_self')
          // //         }
          // //       })

          // //     } else {
          // //       Swal.fire({
          // //         icon: 'error',
          // //         title: 'Oops...',
          // //         text: 'Something went wrong!',
          // //       })
          // //     }
          // //   })

          // // var today = new Date()
          // // var dele =
          // //   today.getFullYear() +
          // //   '-' +
          // //   (today.getMonth() + 1) +
          // //   '-' +
          // //   today.getDate()
          // // fetch('http://localhost:8080/upload/image', {
          //   method: 'POST',
          //   body: titi,
          // })
          //   .then((response) => response.json())
          //   .then((json) => {
          //     alert(json)
          //     window.open('../page16/index.html', '_self')
          //   })
          console.log('hu' + document.getElementById('d_mail').value)
          var vv = document.getElementById('d_mail').value
          fetch('http://localhost:8080/testprepaye?mail=' + vv, {
            method: 'POST',
          })
            .then((response) => response.text())
            .then((text) => {
              console.log(text)
              if (text == '1') {
                Swal.fire(
                  'vous benificier dune demande prepaye',
                  'veillez saisir votre mail et numero telephone pour completer votre demande'
                ).then((result) => {
                  if (result.isConfirmed) {
                    window.open('../logclient/index.html', '_self')
                  } else {
                    window.open('../logclient/index.html', '_self')
                  }
                })
              }
              if (text == '0') {
                // window.open('../b2c_perso/steps.pro%20copy.html', '_self')
                Swal.fire(
                  'vous serais redriger vers la template de paiement'
                ).then((result) => {
                  if (result.isConfirmed) {
                    window.open('../b2c_perso/steps.pro%20copy.html', '_self')
                  } else {
                    window.open('../b2c_perso/steps.pro%20copy.html', '_self')
                  }
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
function fii() {
  if ($('#sla :selected').text() == 'Real time') {
    document.getElementById('rt').style.display = 'block'
    document.getElementById('12h').style.display = 'none'
    document.getElementById('24h').style.display = 'none'
    document.getElementById('ss').style.display = 'none'
    document.getElementById('dfd').style.display = 'none'
  }
  if ($('#sla :selected').text() == '12H') {
    document.getElementById('rv').style.display = 'block'
    document.getElementById('rt').style.display = 'none'
    document.getElementById('24h').style.display = 'none'
    document.getElementById('dfd').style.display = 'none'
  }
  if ($('#sla :selected').text() == '24H') {
    document.getElementById('rv').style.display = 'block'
    document.getElementById('rt').style.display = 'none'
    document.getElementById('12h').style.display = 'none'
    document.getElementById('ss').style.display = 'none'
  }
}
function fk() {
  if ($('#sla :selected').text() == '12H') {
    document.getElementById('rv').style.display = 'block'
    document.getElementById('12h').innerHTML =
      'Votre Rendez-vous serait  demain a ' + $('#rv :selected').text()
    document.getElementById('12h').style.display = 'block'
    document.getElementById('24h').style.display = 'none'
  }
  if ($('#sla :selected').text() == '24H') {
    document.getElementById('rv').style.display = 'block'
    document.getElementById('24h').innerHTML =
      'Votre Rendez-vous serait après demain a ' + $('#rv :selected').text()
    document.getElementById('24h').style.display = 'block'
    document.getElementById('12h').style.display = 'none'
  }
}
function f1() {
  var getValue = document.getElementById('tp').selectedOptions[0].value

  if (getValue == 'Oui') {
    document.getElementById('n').style.display = 'none'
    // document.getElementById('r_nom').value =

    // var e = document.getElementById('r_nom').value
    const val = document.querySelector('r_nom').value
    log(val)
  }
  if (getValue == 'Non') {
    document.getElementById('n').style.display = 'block'
  }
}
