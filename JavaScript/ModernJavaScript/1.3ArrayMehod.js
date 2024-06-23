// Filter, Find, Includes


// let letterName = [1,7,5,3,8,6,4,9,3];

// let myData = letterName.filter((num)=> {
//     return  num > 6;
// });

// console.log(myData);

// var dataCollection =[
//     {
//         id:1,
//         title: "React Training"
//     },
//     {
//         id:2,
//         title: "NodeJS Training"
//     },
//     {
//         id:3,
//         title: "AWS Training"
//     },
//     {
//         id:3,
//         title: "Devops Training"
//     }
// ];

// // Filter can show all data where search
// var myDataSet = dataCollection.filter((myid) => {
//     return myid.id === 3;
// });

// // Find can show first matching data where search
// var myDataFind = dataCollection.find((myid) => {
//     return myid.id === 3;
// });

// console.log("Filter Output: ");
// console.log(myDataSet);
// console.log("Find Output: ");
// console.log(myDataFind);


// Includes get 'at' letter in arrays
// const searchData = ['cat', 'dog', 'bat', 'rat', 'goat'];

// let getVal = searchData.filter(name =>  name.includes('at') );

// console.log(getVal);


const places = ['Africa', 'Asia', 'Europe', 'Australia', 'America'];

var myIndex = places.filter((place, index) => {
        return index > 1;
    });

    console.log(myIndex);
