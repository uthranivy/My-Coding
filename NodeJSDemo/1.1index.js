import fetch from 'node-fetch';

function myRequest(){ 
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get'
})
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
}

myRequest();

//              Type 2
// async function myRequest() {
//     const fetch = await import('node-fetch').then(module => module.default);
  
//     fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'GET'
//     })
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(err => console.log(err));
//   }
  
//   myRequest();

