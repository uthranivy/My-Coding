import "../App.css";

function ReactMap() {
  // const peoples = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 3, name: "Adam" },
  // ];

  const peoples = [{ name: "John" }, { name: "Jane" }, { name: "Adam" }];

  const persons = [
    {
      name: "John",
      skills: [
        { name: "Angular", type: "Frontend" },
        { name: "NodeJs", type: "Backend" },
      ],
    },
    {
      name: "Jane",
      skills: [
        { name: "React", type: "Frontend" },
        { name: "NodeJs", type: "Backend" },
      ],
    },
  ];
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        {/* {peoples.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))} */}
        <h2>2. Map Using Index</h2>
        {peoples.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
        <h2>3. Map Using Index</h2>
        {persons.map((person, index) => (
          <div key={index}>
            {person.name}
            {person.skills.map((skill, index) => (
              <li key={index}>
                {skill.name} named {skill.type}
              </li>
            ))}
          </div>
        ))}
      </header>
    </div>
  );
}

export default ReactMap;
