
function myRequest(){ 
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get'
})
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
}

function myUserRequest(){ 
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get'
    })
      .then(response => response.json())
      .then(response => response.map(user => user.username))
      .then(userNames => console.log(userNames))
      .catch(err => console.log(err))
}

