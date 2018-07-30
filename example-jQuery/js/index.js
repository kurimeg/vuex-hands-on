$(function(){
  let users = []
  fetchUsers()  
    .done((data) => {
      users = data.EmpInfo
    })

  $('#search-container').hide()

  $('#input-search').change((event) => {
    const searchResult = searchUsers(users, event.target.value)
    renderUsers(searchResult)
  })

  $('#toggle-search').click(() => {
    $('#search-container').toggle()
  })

})

function fetchUsers() {
  return $.ajax({
    url:'http://scm1test.azurewebsites.net/api/emp/FetchEmpInfo',
    type:'POST',
    data:{
      'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MTI1NjY2NTksImV4cCI6MTUxMjU3MDI1OSwiaWF0IjoxNTEyNTY2NjU5LCJpc3MiOiJTQ01Jc3N1ZXIifQ.roP_X4AoObRhcpjX8b3NHwnBwwxXUDdtXo8SdiSl0pw',
      'EmpNo': ''
    }
  })
}

function renderUsers(searchResult) {
  $('#users').empty()
  $('#message').text(searchResult.message)
  if(searchResult.filteredUsers.length > 0){
    searchResult.filteredUsers.forEach(user => {
      $('#users').append(`<div>${user.EMP_NO} ${user.EMP_NM}</div>`)
    })
  }
}

function searchUsers(users, searchText) {
  if (!searchText) return []

  let filteredUsers = users.filter(emp => {
    let knj = false
    let kana = false
    if (emp.EMP_NM) knj = emp.EMP_NM.replace(/\s+/g, '').startsWith(searchText)
    if (emp.EMP_KANA_NM) kana = emp.EMP_KANA_NM.replace(/\s+/g, '').startsWith(searchText)

    return knj || kana
  })
  let message = ''
  if (filteredUsers.length > 0) {
    message = '下記候補から選択してください。'
  } else {
    message = '検索結果がありません。'
  }

  return { filteredUsers: filteredUsers, message: message }

}