const heading = document.getElementById("heading");

heading.style.color = "Red";

var list = document.getElementsByClassName("listName");

for (let i = 0; i < list.length; i++) {
  list[i].style.color = "blue";
}
