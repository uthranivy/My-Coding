
const myPost ={
    title: 'Uthra Ganapathy',
    body: 'My Portfolio',
    userId: 3
};

const myData ={
    method: 'post',
    body: JSON.stringify(myPost),
    headers: {
        'Content-Type': 'application/json'
    }
};

function postReq(){
    fetch('https://jsonplaceholder.typicode.com/posts',myData)
    .then(res => res.json())
    .then(res => console.log(res));
}



