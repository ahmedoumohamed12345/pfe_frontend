function fi() {
  console.log('nere')
  a = 0
  document.getElementById('ml').style.borderColor = '#f6f6f6'
  document.getElementById('ps').style.borderColor = '#f6f6f6'
  console.log(document.getElementById('ps').value.length)
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
    console.log('yaklbas')
    a = 1
  }
  if (a == 0) {
    window.open('../page8/index.html', '_self')
  }
}
