document.getElementById('en').innerHTML = 2
let tab =
  '<thead><tr>' + '<td>Client</td><td>Numero</td><td></td></tr></thead><tbody>'
function f() {
  let x = document.getElementById('mail').value
  let y = document.getElementById('tel').value
  tab =
    tab +
    '<tr><td>' +
    x +
    '</td><td>' +
    y +
    '</td><td><a href="#" style="color: rgb(0, 142, 161); " class="fa fa-trash">Suprime</a></td></tr></tbody>'
  console.log(tab)
  document.querySelector('.Ent').innerHTML = tab
  document.getElementById('mail').value = null
  document.getElementById('tel').value = null
  console.log(tab.length)
  let a = 215
  let b = a - tab.length
  document.getElementById('en').innerHTML = b
}
console.log(tab.toString.length)
function f5() {
  Swal.fire({
    title: '<strong>ADD  <u>Certifie</u></strong>',
    icon: 'info',
    html:
      '<input id="email" type="email" class="login__input" placeholder="Email"/> <br/>' +
      '<input id="tel" type="text" class="login__input" placeholder="Tel"/> ',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Save!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> Cancel',
    cancelButtonAriaLabel: 'Thumbs down',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      console.log(document.getElementById('email').value)
      Swal.fire({
        title: 'Do you want to save the changes?',
        html:
          'Email: ' +
          document.getElementById('email').value +
          '<br/> Tel: ' +
          document.getElementById('tel').value +
          '<br/>',
        script:
          ((document.getElementById('mmmm').innerHTML =
            document.getElementById('email').value),
          (document.getElementById('tttt').innerHTML =
            document.getElementById('tel').value)),

        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
          console.log('yahkiki')

          let x = document.getElementById('mmmm').innerHTML
          let y = document.getElementById('tttt').innerHTML
          tab =
            tab +
            '<tr><td>' +
            x +
            '</td><td>' +
            y +
            '</td><td><a href="#" style="color: rgb(0, 142, 161); " class="fa fa-trash">Suprime</a></td></tr></tbody>'
          Swal.fire('Saved!', '', 'success')
          console.log(tab)
          document.querySelector('.Ent').innerHTML = tab
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      console.log(document.getElementById('tel').value)
    } else if (result.isDenied) {
    }
  })
}
