async function myUsers(endpoint){ 
    const res = await fetch(endpoint);
    if(!res.ok){
        throw new Error(res.status);
    }
    const data = await res.json();
    return data;
}

myUsers('https://jsonplaceholder.typicode.com/users') 
.then(data => {
    console.log(data.map(user => user.website))
})
.catch(err => console.log('Error:', err.message));