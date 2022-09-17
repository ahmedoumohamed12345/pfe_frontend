function fi() {
  console.log('nere')
  a = 0
  document.getElementById('ml').style.borderColor = '#f6f6f6'

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (document.getElementById('ml').value == '') {
    document.getElementById('ml').style.borderColor = 'red'
    a = 1
  }
  if (!document.getElementById('ml').value.match(mailformat)) {
    document.getElementById('ml').style.borderColor = 'red'
    a = 1
  }

  if (a == 0) {
    document.getElementById('ml').value = ''
  }
}
