function search() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  var x = document.getElementsByClassName('ligne')
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none'
    } else {
      x[i].style.display = 'table-row'
    }
  }
}

let tab =
  '<thead><tr>' +
  '<td><p>demandeur</p>' +
  '<p></p></td>' +
  '<td><p>type</p>' +
  '<p></p></td>' +
  '<td>date</td>' +
  '<td>SLA</td>' +
  '<td>rendez-vous</td>' +
  '<td>statut demande</td>' +
  '<td>statut rendez-vous</td>' +
  '<td></td></th>' +
  '</tr></thead><tbody>'

fetch('http://localhost:8080/alldemande')
  .then((res) => res.json())
  .then((json) => {
    for (let i = json.length - 1; i >= 0; i--) {
      console.log(json[i].statud)
      if (json[i].statur == 'non-passe') {
        tab +=
          '<tr class="ligne">' +
          '<td><p id=' +
          i +
          '></p>' +
          '</td>' +
          ' ' +
          '<td>' +
          json[i].type +
          '</p>' +
          '</td>' +
          '<td>' +
          json[i].date +
          '</p>' +
          '</td>' +
          '<td>' +
          json[i].sla +
          '</p>' +
          '</td>' +
          '<td>' +
          json[i].rendezvous +
          '</p>' +
          '</td>' +
          '<td>' +
          json[i].statud +
          ' <a id="' +
          json[i].id +
          '" href="#" onclick="ff(this.id)" style="color: #008ea1;margin: 5px 0;"><i class="fa fa-pencil" ></i>	</a></p>' +
          '</td>' +
          '<td>' +
          json[i].statur +
          ' <a id="' +
          json[i].id +
          '" href="#" onclick="fff(this.id)" style="cursor: pointer;		font-size: 16px;color: #008ea1;margin: 5px 0;"><i class="fa fa-pencil" ></i>	</a></p>' +
          '</td>' +
          '<td>' +
          ' <a id="' +
          json[i].idc +
          '" href="#" onclick="ffff(this.id)" style="cursor: pointer;	float: right;	font-size: 16px;color: #008ea1;margin: 5px 0;"><i class="fa fa-plus" ></i>	</a></p>' +
          '</td></tr></tbody>'
        fetch(
          'http://localhost:8080/demandeclient?idc=' + parseInt(json[i].idc)
        )
          .then((response) => response.json())
          .then((json) => {
            document.getElementById(i).innerHTML = json.mail
            console.log(json.mail)
          })
      }
      document.querySelector('.Ent').innerHTML = tab
      document.getElementById('en').innerHTML = json.length
      console.log(json)
    }
  })

function createPDF() {
  var sTable = document.querySelector('.case').innerHTML

  var style = '<style>'
  style = style + 'table{border-collapse: collapse;}'
  style =
    style +
    ' thead tr{border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;}'
  style = style + 'thead td{font-weight: 700;}'
  style = style + 'td{padding: .5rem 1rem;}'
  style =
    style +
    'td .status-produit{display: inline-block;height: 15px;width: 15px;margin-right: 1rem;border-radius: 50%;}'
  style = style + ' tr td:last-child{display: flex;align-items: center;}'
  style = style + '</style>'

  var win = window.open('', '', 'height=700,width=700')

  win.document.write('<html><head>')
  win.document.write('<title>Enterprises</title>')
  win.document.write(style)
  win.document.write('</head>')
  win.document.write('<body>')
  win.document.write(sTable)
  win.document.write('</body></html>')

  win.document.close()

  win.print()
}
function ff(clickedid) {
  Swal.fire(
    'changer statut demande',
    '<select name="" id="std" > <option value="Attend appel-video" id="stdn">attend appel-video</option><option value="SENT">sent</option>'
  ).then((result) => {
    if (result.isConfirmed) {
      var e = document.getElementById('std')
      var text = e.options[e.selectedIndex].text
      var x = clickedid
      var data = new FormData()
      data.append('id', x)
      data.append('std', text)
      console.log(text)
      console.log(x)
      fetch('http://localhost:8080/modifierstd', {
        method: 'POST',
        body: data,
      })
        .then((response) => response.text())
        .then((text) => {})
      document.location.reload()
      console.log(e.name)
    }
  })
}
function fff(clickedid) {
  Swal.fire(
    'changer statut Rendez-vous',
    '<select name="" id="str"> <option value="PASSER" selected="true" >non-passe</option>  <option value="PASSER">passe</option>  </select>'
  ).then((result) => {
    if (result.isConfirmed) {
      var e = document.getElementById('str')
      var text = e.options[e.selectedIndex].text
      var x = clickedid
      var data = new FormData()
      data.append('id', x)
      data.append('str', text)
      console.log(text)
      console.log(x)
      fetch('http://localhost:8080/modifierstr', {
        method: 'POST',
        body: data,
      })
        .then((response) => response.text())
        .then((text) => {})
      document.location.reload()
      console.log(e.name)
    }
  })
}
function ffff(ccid) {
  localStorage.setItem('ddd', ccid)
  window.open('../page10/page16 copy/index.html', '_self')
}
// function feli(clicked_id) {
//   let tab1 = null
//   tab1 =
//     '<thead><tr>' +
//     '<td><p>id</p>' +
//     '<p></p></td>' +
//     '<td><p>client name</p>' +
//     '<p></p></td>' +
//     '<td>Enterprise</td>' +
//     '</tr></thead><tbody>'
//   while (true) {
//     fetch(
//       'http://localhost:8080/Client/enterprise_id?enterprise_id=' + clicked_id
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         for (let i = 0; i < json.length; i++) {
//           tab1 +=
//             '<tr class="ligne">' +
//             '<td>' +
//             json[i].id +
//             '</p>' +
//             '</td>' +
//             '<td>' +
//             json[i].user_name +
//             '</td>' +
//             '<td>' +
//             json[i].name +
//             '</p>' +
//             '</td>' +
//             '</tr>'
//         }
//         // console.log(tab1)

//         document.getElementsByClassName('.Inl').innerHTML = tab1
//         console.log(document.querySelector('.Inl'))

//         // window.open('./index1.html')
//       })
//     // console.log(document.querySelectorAll('.Inl'))
//     // console.log(clicked_id)
//   }
// }
