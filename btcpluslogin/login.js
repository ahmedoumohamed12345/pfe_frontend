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

    data.append('log', e)
    data.append('tel', f)
    fetch('http://localhost:8080/logbtc', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
        if (text == 'null') {
          alert('login ou numero tel incorrect')
        } else {
          var ane = text
          localStorage.setItem('myValue', ane)
          window.location.href = '../page8/index.html'
        }
      })
  }
}
