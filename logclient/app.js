function fi() {
  a = 0
  document.getElementById('ml').style.borderColor = '#f6f6f6'
  document.getElementById('ps').style.borderColor = '#f6f6f6'

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (document.getElementById('ml').value == '') {
    document.getElementById('ml').style.borderColor = 'red'
    a = 1
  }
  if (!document.getElementById('ml').value.match(mailformat)) {
    document.getElementById('ml').style.borderColor = 'red'
    a = 1
  }
  if (document.getElementById('ps').value == '') {
    document.getElementById('ps').style.borderColor = 'red'
    a = 1
  }
  if (document.getElementById('ps').value.length <= 7) {
    document.getElementById('ps').style.borderColor = 'red'

    a = 1
  }
  if (a == 0) {
    // window.open('../page2/index1.html', '_self')
    var data = new FormData()

    const e = document.getElementById('ml').value
    const f = document.getElementById('ps').value
    var today = new Date()

    data.append('login', e)
    data.append('password', f)

    fetch('http://localhost:8080/authentif', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id == null) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login ou modepass incorrect',
          })
        } else {
          if (json.role == 'admin') {
            var ane = json.idutili
            localStorage.setItem('my', ane)

            window.location.href = '../page8/index.html'
          }
          if (json.role == 'Client') {
            var ane = json.idutili
            sessionStorage.setItem('nn', ane)
            sessionStorage.setItem('nn', ane)
            localStorage.setItem('my', ane)
            window.location.href = '../b2c_perso/page16/index.html'
          }
          if (json.role == 'Respob2b') {
            var ane = json.idutili
            localStorage.setItem('my', ane)
            window.location.href = '../page8/page9/index.html'
          }
        }
      })
  }
}
