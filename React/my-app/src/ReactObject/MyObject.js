import "../App.css";

function MyObject() {
  const person = {
    name: "John",
    age: 30,
    location: "New York",
  };
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        {Object.keys(person).map((key) => (
          <p>{person[key]}</p>
        ))}
      </header>
    </div>
  );
}

export default MyObject;
// const person = {
//   name: "John",
//   age: 30,
//   location: "New York",
// };
// let mydata = Object.keys(person);
// console.log(mydata[2]);
