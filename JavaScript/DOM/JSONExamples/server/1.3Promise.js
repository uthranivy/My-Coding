
// let myPromise = new Promise((resolve, reject) => {
//     let data;
//     if(data){
//         resolve(data);
//     }
//     else{
//         reject(data);
//     }
// })

const myPost1 ={
    title: 'Uthra Ganapathy',
    body: 'My Portfolio',
    userId: 3
};

const myData1 ={
    method: 'post',
    body: JSON.stringify(myPost1),
    headers: {
        'Content-Type': 'application/json'
    }
};

async function promiseReq(){
    fetch('https://jsonplaceholder.typicode.com/posts',myData1)
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            return Promise.reject({status: res.status, statusText: res.statusText})
        }
    }).then(res => console.log(res))
    .catch(err => console.log('Error with Message', err.statusText));
}

