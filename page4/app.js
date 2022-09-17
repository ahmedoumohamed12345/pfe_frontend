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
      a = 1

      if (y == 0) {
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
        if (document.getElementById('d_mail').value == '') {
          document.getElementById('d_mail').style.borderColor = 'red'

          a = 1
        } else {
          document.getElementById('d_mail').style.borderColor = 'lightgrey'
        }
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
          if (v >= 10000) {
            a = 1
            document.getElementById('e_rne_vide').innerHTML =
              'Taille max : 500KO'
          }
        }
      }

      if (y == 2) {
        a = 0
        document.getElementById('accepta').style.borderColor = 'lightgrey'
        if (document.getElementById('accepta').checked == false) {
          document.getElementById('accepta').style.borderColor = 'red'
          a = 1
        }
      }

      if (a == 0) {
        console.log(y)
        y = y + 1

        $('#prev').removeClass('disabled')
        if (child > length) {
          $(this).addClass('disabled')
          $('#submit').removeClass('disabled')

          if ($('#tp :selected').val() == 'Oui') {
            document.getElementById('r_nom').value =
              document.getElementById('d_nom').value
            document.getElementById('r_prenom').value =
              document.getElementById('d_prenom').value
            document.getElementById('r_birth').value =
              document.getElementById('d_birth').value
            var rnatio = $('#d_natio :selected').text()
            document.getElementById('r_id').value =
              document.getElementById('d_n_id').value
            document.getElementById('r_tel').value =
              document.getElementById('d_n_tel').value
            document.getElementById('r_mail').value =
              document.getElementById('d_mail').value
          }
          if ($('#tp :selected').val() == 'Non') {
            var m5 = document.getElementById('r_nom').value
            var m6 = document.getElementById('r_prenom').value
            var m7 = document.getElementById('r_birth').value
            var m8 = document.getElementById('r_id').value
            var m9 = document.getElementById('r_tel').value
            var m = document.getElementById('r_mail').value
          }
          var l = document.querySelector('.prix').innerHTML
          var l1 = document.querySelector('.rat').value
          var l2 = document.querySelector('.dl').value
          var l3 = document.querySelector('.lm').value
          var l4 = document.querySelector('.j').value
          var l5 = document.querySelector('.prix_j').innerHTML
          console.log($('#d_natio :selected').text())
          var l6 = $('#d_natio :selected').text()
          var l7 = document.getElementById('d_nom').value
          var l8 = document.getElementById('d_prenom').value
          var l9 = document.getElementById('d_birth').value
          var l0 = $('#tp1 :selected').text()
          var m = document.getElementById('d_n_id').value
          var m1 = document.getElementById('d_mail').value
          var m2 = document.getElementById('e_r_s').value
          var m3 = $('#e_p_e :selected').text()
          var m4 = document.getElementById('e_m_f').value
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
function f5() {
  var a = document.querySelector('.rat')
  var b = a.value
  var c = document.querySelector('.dl')
  var d = c.value
  var e = document.querySelector('.lm')
  var f = e.value
  if (b == '') {
    b = 0
  }
  if (d == '') {
    d = 0
  }
  if (f == '') {
    f = 0
  }

  var r = parseInt(b) * 60 + parseInt(d) * 45 + parseInt(f) * 20
  // console.log(r)
  document.querySelector('.prix').innerHTML = r + 'DN'
}
function f7() {
  var a = document.querySelector('.j')
  var b = a.value
  if (b == '') {
    b = 0
  }

  var r = parseInt(b) * 2

  document.querySelector('.prix_j').innerHTML = r + 'DN'
  console.log(toString(document.querySelector('.prix_j')))
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
