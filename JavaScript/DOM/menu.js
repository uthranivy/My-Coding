// import "./style.css";

const items = [
  { id: 1, name: "Burger", price: 400 },
  { id: 2, name: "Fries", price: 300 },
  { id: 3, name: "Pizza", price: 600 },
];
const app = document.querySelector("ul");

items.forEach((item) => {
  app.innerHTML += `
        <li>${item.id}, ${item.name}, ${item.price}</li>  
    `;
});

const newApp = document.createElement("ul");

items.forEach((item) => {
  newApp.innerHTML += `
        <li>${item.id}, ${item.name}, ${item.price}</li>  
    `;
});
document.querySelector("div").appendChild(newApp);

const btnName = document.getElementById("btn");

btnName.onclick = () => {
  console.log("CLicked");
};

btnName.onmouseover = () => {
  newApp.style.backgroundColor = "yellow";
};

btnName.onmouseout = () => {
  newApp.style.backgroundColor = "";
};

const newEl = document.createElement("li");
//console.log(new1)
const text = document.createTextNode("Blog");
newEl.appendChild(text);
console.log(newEl);
const mylist = document.querySelector("#mylist");
mylist.appendChild(newEl);
console.log(mylist);
