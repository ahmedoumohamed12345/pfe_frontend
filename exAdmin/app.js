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
    fetch(
      'http://localhost:8080/testmailo?mail=' +
        document.getElementById('ml').value,
      {
        method: 'POST',
      }
    )
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
        if (text == 'true') {
          Swal.fire(
            'vous avez deja compltete votre demande'
            // 'vous serais envoyez pour completes votre demande'
          ).then((result) => {
            if (result.isConfirmed) {
              window.open('../page16/index.html', '_self')
            } else {
              window.open('../page16/index.html', '_self')
            }
          })
        } else {
          fetch('http://localhost:8080/logbtc', {
            method: 'POST',
            body: data,
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json.sla)
              // var ane = text
              // localStorage.setItem('myValue', ane)
              // window.location.href = '../btcplusdemande/steep.pro.html'
              if (json.type == 'pro') {
                if (json.sla == '12h') {
                  localStorage.setItem('sla', '12h')
                  localStorage.setItem('enter', json.enter)
                  localStorage.setItem('ee', json.tel)
                  localStorage.setItem('mm', json.mail)
                  console.log(json)

                  window.open('../btcplusdemande/steep.pro.html', '_self')
                }
                if (json.sla == '24h') {
                  localStorage.setItem('sla', '24h')
                  localStorage.setItem('enter', json.enter)
                  localStorage.setItem('ee', json.tel)
                  localStorage.setItem('mm', json.mail)
                  window.open('../btcplusdemande/steep.pro.html', '_self')
                }
                if (json.sla == 'realtime') {
                  localStorage.setItem('sla', 'realtime')
                  localStorage.setItem('enter', json.enter)
                  localStorage.setItem('ee', json.tel)
                  localStorage.setItem('mm', json.mail)
                  window.open('../btcplusdemande/steep.pro.html', '_self')
                }
              } else {
                if (json.type == 'perso') {
                  if (json.sla == '12h') {
                    localStorage.setItem('sla', '12h')
                    localStorage.setItem('enter', json.enter)
                    localStorage.setItem('ee', json.tel)
                    localStorage.setItem('mm', json.mail)
                    window.open('../b2c+perso/steps.pro.html', '_self')
                  }
                  if (json.sla == '24h') {
                    localStorage.setItem('sla', '24h')
                    localStorage.setItem('enter', json.enter)
                    localStorage.setItem('ee', json.tel)
                    localStorage.setItem('mm', json.mail)
                    window.open('../b2c+perso/steps.pro.html', '_self')
                  }
                  if (json.sla == 'realtime') {
                    localStorage.setItem('sla', 'realtime')
                    localStorage.setItem('enter', json.enter)
                    localStorage.setItem('ee', json.tel)
                    localStorage.setItem('mm', json.mail)
                    window.open('../b2c+perso/steps.pro.html', '_self')
                  }
                }
              }
            })
        }
      })

    document.getElementById('ml').style.borderColor = 'red'
    document.getElementById('ps').style.borderColor = 'red'
    document.getElementById('ps').value = ''
  }
}
